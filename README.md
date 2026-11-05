# Portfólio de Josué Beuren

Site estático em HTML, CSS e JavaScript, sem dependências de produção.

## Visualização local

Na pasta `portifolio1`, execute:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Abra `http://127.0.0.1:8000`. O servidor local também permite conferir a
persistência do idioma entre páginas. Use `Ctrl+C` para encerrá-lo.

## Organização

- `styles.css`: reset, componentes compartilhados, home e página Sobre.
- `projects.css` e `contact.css`: estilos específicos dessas páginas.
- `script.js`: traduções, navegação móvel, animações, carrossel e formulário.
- `assets/optimized/`: imagens menores e variantes para `srcset`.
- `assets/`: originais preservados.

Os menus permanecem disponíveis sem JavaScript e os projetos podem ser
percorridos horizontalmente. Com JavaScript, o carrossel funciona em loop
automático por deslocamento dos cartões, sem botões e sem pausa ao passar o
mouse. Ele pausa enquanto recebe foco pelo teclado ou quando fica fora da tela,
e retoma automaticamente. O loop permanece ativo conforme a configuração
solicitada; as demais animações respeitam a preferência por movimento reduzido.

O idioma selecionado é salvo no navegador quando o armazenamento está disponível.

## Contato

O formulário abre um rascunho no aplicativo de email do visitante, destinado a
`josuebeurensilvaa@gmail.com`. Ele não envia mensagens diretamente nem confirma
entrega. O endereço também aparece como alternativa para copiar ou clicar.
O envio direto exigirá integrar um backend ou serviço de formulários.

## Verificações

Na raiz do projeto, execute:

```sh
node --check portifolio1/script.js
python portifolio1/tests/validate.py
```

Requer Python 3 e Node.js. A validação confere HTML, imagens, destinos locais e
executa o JavaScript com uma simulação do DOM construída a partir dos HTMLs.
Ela cobre idioma, armazenamento indisponível, menu, carrossel, movimento
reduzido e rascunho de email. Não substitui a verificação visual em navegador,
o teste com leitor de tela ou a abertura real de um cliente de email.

Para regenerar as imagens derivadas no Windows, use
`scripts/optimize-assets.ps1`, que utiliza System.Drawing e mantém os originais.
Se a política do PowerShell bloquear scripts, siga a política local antes de
executá-lo.
