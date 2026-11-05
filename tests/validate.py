"""Validate local references and run behavior checks without browser dependencies."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import json
import subprocess

ROOT = Path(__file__).resolve().parents[1]
VOID = set('area base br col embed hr img input link meta param source track wbr'.split())


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path = path
        self.tree = {'tag': 'document', 'attrs': {}, 'children': []}
        self.stack = [self.tree]
        self.elements = []
        self.feed(path.read_text(encoding='utf-8'))
        assert len(self.stack) == 1, f'{path.name}: unclosed tags'

    def handle_starttag(self, tag, attrs):
        node = {'tag': tag, 'attrs': dict(attrs), 'children': [], 'text': ''}
        self.stack[-1]['children'].append(node)
        self.elements.append(node)
        if tag not in VOID:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VOID:
            self.handle_endtag(tag)

    def handle_endtag(self, tag):
        assert self.stack[-1]['tag'] == tag, f'{self.path.name}: unexpected </{tag}> after {self.stack[-1]["tag"]}'
        self.stack.pop()

    def handle_data(self, data):
        self.stack[-1]['text'] = self.stack[-1].get('text', '') + data


pages = {path.name: Page(path) for path in ROOT.glob('*.html')}
for path in ROOT.glob('*.css'):
    source = path.read_text(encoding='utf-8')
    # Check delimiter integrity without adding a CSS-parser dependency.
    import re
    clean = re.sub(r'/\*.*?\*/|"[^"\\]*(?:\\.[^"\\]*)*"|\'[^\'\\]*(?:\\.[^\'\\]*)*\'', '', source, flags=re.S)
    stack = []
    for char in clean:
        if char in '{(':
            stack.append(char)
        elif char in '})':
            assert stack and stack.pop() == {'}': '{', ')': '('}[char], f'{path.name}: unbalanced delimiter'
    assert not stack, f'{path.name}: unclosed delimiter'
for name, page in pages.items():
    ids = [node['attrs']['id'] for node in page.elements if 'id' in node['attrs']]
    assert len(ids) == len(set(ids)), f'{name}: duplicate IDs'
    assert sum(node['tag'] == 'h1' for node in page.elements) == 1, f'{name}: expected one h1'
    assert sum(node['tag'] == 'main' for node in page.elements) == 1, f'{name}: expected one main'
    for node in page.elements:
        attrs = node['attrs']
        if node['tag'] == 'img':
            assert all(attr in attrs for attr in ['alt', 'width', 'height', 'decoding']), f'{name}: image attributes'
        if node['tag'] == 'label':
            assert attrs.get('for') in ids, f'{name}: unassociated label'
        if attrs.get('target') == '_blank':
            assert 'noopener' in attrs.get('rel', ''), f'{name}: external-link rel'
        refs = [attrs[key] for key in ['href', 'src'] if key in attrs]
        refs.extend(item.strip().split()[0] for item in attrs.get('srcset', '').split(',') if item.strip())
        for ref in refs:
            url = urlsplit(ref)
            if url.scheme or url.netloc:
                continue
            target = ROOT / unquote(url.path) if url.path else page.path
            assert target.is_file(), f'{name}: missing {ref}'
            if url.fragment:
                target_page = pages.get(target.name)
                assert target_page and any(n['attrs'].get('id') == url.fragment for n in target_page.elements), f'{name}: missing anchor {ref}'
            assert ref != '#', f'{name}: placeholder link'

result = subprocess.run(
    ['node', str(ROOT / 'tests' / 'behavior.cjs')],
    input=json.dumps({name: page.tree for name, page in pages.items()}, ensure_ascii=False),
    encoding='utf-8', check=True, capture_output=True,
)
print(result.stdout.strip())
print(f'PASS: structure, headings, labels, images and local links across {len(pages)} pages.')
