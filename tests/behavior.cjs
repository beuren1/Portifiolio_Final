// DOM fixtures exercise actual page markup and application handlers.
// Layout, image appearance and native email-app handoff still require a browser.
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const fixtures = JSON.parse(fs.readFileSync(0, 'utf8'))
const source = fs.readFileSync(path.join(__dirname, '../script.js'), 'utf8')
const dictionary = vm.runInNewContext(
  source.slice(source.indexOf('  const textos = '), source.indexOf('  const reducedMotion')) + ';textos'
)

class Element {
  constructor(node, parent = null) {
    this.tagName = node.tag
    this.attrs = { ...node.attrs }
    this.parent = parent
    this.children = node.children.map(child => new Element(child, this))
    this.textContent = node.text ?? ''
    this.handlers = {}
    this.dataset = Object.fromEntries(Object.entries(this.attrs)
      .filter(([key]) => key.startsWith('data-'))
      .map(([key, value]) => [key.slice(5).replace(/-([a-z])/g, (_, char) => char.toUpperCase()), value]))
    this.classes = new Set((this.attrs.class ?? '').split(/\s+/))
    this.classList = {
      add: (...names) => names.forEach(name => this.classes.add(name)),
      remove: (...names) => names.forEach(name => this.classes.delete(name)),
      contains: name => this.classes.has(name),
      toggle: (name, on) => on ? this.classes.add(name) : this.classes.delete(name)
    }
    this.scrollLeft = 0
    this.style = {}
    this.hidden = 'hidden' in this.attrs
    this.elements = { namedItem: name => this.querySelector(`[name="${name}"]`) }
  }
  get offsetLeft() { return this.parent ? this.parent.children.indexOf(this) * 348 : 0 }
  getAttribute(key) { return this.attrs[key] ?? null }
  setAttribute(key, value) { this.attrs[key] = String(value) }
  addEventListener(type, listener) { (this.handlers[type] ??= []).push(listener) }
  emit(type, detail = {}) {
    const event = { target: this, preventDefault() { this.defaultPrevented = true }, ...detail }
    for (const listener of this.handlers[type] ?? []) listener(event)
    return event
  }
  matches(selector) {
    if (selector[0] === '.') return this.classes.has(selector.slice(1))
    if (selector[0] === '#') return this.attrs.id === selector.slice(1)
    const attribute = /^\[([^=\]]+)(?:="([^"]*)")?\]$/.exec(selector)
    if (attribute) return attribute[1] in this.attrs && (attribute[2] === undefined || this.attrs[attribute[1]] === attribute[2])
    return this.tagName === selector
  }
  querySelectorAll(selector) {
    return this.children.flatMap(child => [
      ...(selector.split(/,\s*/).some(part => child.matches(part)) ? [child] : []),
      ...child.querySelectorAll(selector)
    ])
  }
  querySelector(selector) { return this.querySelectorAll(selector)[0] ?? null }
  contains(element) { return element === this || this.children.some(child => child.contains(element)) }
  closest(selector) { return this.matches(selector) ? this : this.parent?.closest(selector) ?? null }
  append(element) { element.parent = this; this.children.push(element) }
  cloneNode() {
    const serialize = element => ({ tag: element.tagName, attrs: element.attrs, text: element.textContent, children: element.children.map(serialize) })
    return new Element(serialize(this))
  }
  getBoundingClientRect() { return { top: 0 } }
  scrollTo({ left }) { this.scrollLeft = left }
  focus() { this.focused = true }
  reportValidity() { return !this.invalid }
  setCustomValidity(message) { this.invalid = Boolean(message) }
}

function setup(page, options = {}) {
  const document = new Element(fixtures[page])
  document.documentElement = document.querySelector('html')
  document.body = document.querySelector('body')
  document.getElementById = id => document.querySelector(`#${id}`)
  const media = new Map()
  const window = {
    innerHeight: 900,
    location: { href: '' },
    matchMedia(query) {
      if (!media.has(query)) {
        const element = new Element({ tag: 'media', attrs: {}, children: [] })
        element.matches = query.includes('reduced-motion') ? Boolean(options.reduced) : true
        media.set(query, element)
      }
      return media.get(query)
    },
    addEventListener() {}
  }
  const storage = options.storage ?? new Map()
  const frames = new Map()
  let frameId = 0
  const context = {
    document, window,
    localStorage: {
      getItem(key) { if (options.blockStorage) throw Error('Storage blocked'); return storage.get(key) },
      setItem(key, value) { if (options.blockStorage) throw Error('Storage blocked'); storage.set(key, value) }
    },
    requestAnimationFrame(callback) { frames.set(++frameId, callback); return frameId },
    cancelAnimationFrame(id) { frames.delete(id) },
    FormData: class {
      constructor(form) { this.form = form }
      get(name) { return this.form.elements.namedItem(name).value }
    }
  }
  vm.runInNewContext(source, context)
  document.emit('DOMContentLoaded')
  return { document, window, storage, frames }
}

for (const page of Object.keys(fixtures)) {
  const { document, storage } = setup(page)
  const button = document.querySelector('.lang-btn')
  const translated = document.querySelectorAll('[data-i18n]')
  for (const attribute of ['data-i18n', 'data-i18n-placeholder', 'data-i18n-aria-label', 'data-i18n-alt']) {
    for (const element of document.querySelectorAll(`[${attribute}]`)) {
      for (const language of ['pt', 'en']) assert.equal(typeof dictionary[language][element.getAttribute(attribute)], 'string', `${page}: missing ${language} translation`)
    }
  }
  const portuguese = translated.map(element => element.textContent)
  button.emit('click')
  assert.equal(document.documentElement.lang, 'en')
  assert.equal(storage.get('portfolio-language'), 'en')
  assert.equal(document.querySelector('[data-i18n="navAbout"]').textContent, 'about')
  for (const element of translated) assert.notEqual(element.textContent, '', `Empty translation: ${page}`)
  if (page === 'projects.html') {
    assert.equal(document.querySelector('[data-i18n="viewProject"]').textContent, 'View project')
    assert.match(document.querySelector('[data-project-name]').getAttribute('aria-label'), /^View project/)
    assert.match(document.querySelector('[data-i18n="projectDescription1"]').textContent, /Full-stack/)
  }
  button.emit('click')
  assert.equal(document.documentElement.lang, 'pt-BR')
  assert.deepEqual(translated.map(element => element.textContent), portuguese)
  const restored = setup(page, { storage: new Map([['portfolio-language', 'en']]) })
  assert.equal(restored.document.documentElement.lang, 'en')
  setup(page, { blockStorage: true }).document.querySelector('.lang-btn').emit('click')

  const menu = document.querySelector('.menu-toggle')
  const nav = document.getElementById('main-navigation')
  assert.equal(menu.getAttribute('aria-expanded'), 'false')
  menu.emit('click')
  assert.equal(menu.getAttribute('aria-expanded'), 'true')
  assert(nav.classList.contains('is-open'))
  document.emit('keydown', { key: 'Escape' })
  assert.equal(menu.getAttribute('aria-expanded'), 'false')
  assert(menu.focused)
}

{
  const { document, frames } = setup('index.html')
  const slider = document.querySelector('.home-projects-slider')
  const track = document.querySelector('.home-projects-track')
  assert.equal(track.children.length, 10)
  for (const clone of track.children.slice(5)) {
    assert.equal(clone.getAttribute('aria-hidden'), 'true')
    assert(clone.querySelectorAll('a').every(link => link.tabIndex === -1))
  }
  const tick = time => {
    const [id, callback] = frames.entries().next().value
    frames.delete(id)
    callback(time)
  }
  tick(1000)
  tick(2000)
  const displacement = () => -Number(/translate3d\(([-\d.]+)px/.exec(track.style.transform)[1])
  assert(displacement() > 0, 'The track must visibly move using a transform')
  slider.emit('wheel', { deltaX: 0, deltaY: 120, shiftKey: false })
  assert.equal(frames.size, 1, 'Vertical page scrolling must not stop the loop')
  for (let time = 2064; time < 65000; time += 64) tick(time)
  assert(displacement() < 1740, 'Continuous motion must wrap at the first duplicate')
  assert.equal(document.querySelector('[data-carousel]'), null, 'Carousel must have no buttons')
  slider.emit('focusin')
  slider.scrollLeft = 0
  assert.equal(frames.size, 0, 'Keyboard focus must stop autoplay')
  slider.emit('keydown', { key: 'ArrowRight' })
  assert.equal(slider.scrollLeft, 348)
  slider.emit('keydown', { key: 'ArrowLeft' })
  assert.equal(slider.scrollLeft, 0)
  slider.emit('keydown', { key: 'ArrowLeft' })
  assert.equal(slider.scrollLeft, 1392, 'Previous wraps to last real card')
  const reduced = setup('index.html', { reduced: true })
  assert.equal(reduced.frames.size, 1, 'The explicitly requested loop remains active')
  slider.emit('focusout', { relatedTarget: null })
  assert.equal(frames.size, 1, 'Autoplay resumes automatically when focus leaves')
  slider.emit('mouseenter')
  assert.equal(frames.size, 1, 'Hover must not stop the continuous loop')
  slider.emit('mouseleave')
  assert.equal(frames.size, 1, 'Autoplay resumes automatically when the mouse leaves')
}

{
  const { document, window } = setup('contact.html')
  const form = document.getElementById('contact-form')
  form.elements.namedItem('name').value = 'Teste & revisão'
  form.elements.namedItem('email').value = 'teste@example.com'
  form.elements.namedItem('message').value = 'Mensagem com acentuação & sinais? #teste'
  form.emit('submit')
  assert.match(window.location.href, /^mailto:josuebeurensilvaa@gmail.com\?subject=/)
  const url = new URL(window.location.href)
  assert.match(url.searchParams.get('body'), /Mensagem com acentuação & sinais\? #teste/)
  assert.match(document.getElementById('form-status').textContent, /ainda não foi enviada/)
  window.location.href = ''
  form.invalid = true
  form.emit('submit')
  assert.equal(window.location.href, '', 'Invalid form must not launch email')
}

console.log('PASS: language persistence and storage fallback; menu and Escape; carousel controls, focus pause and reduced motion; encoded email draft and validation.')
