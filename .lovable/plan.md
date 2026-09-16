# Descarregar a pasta `hostinger/`

## O que fazer
Empacotar a pasta `hostinger/` num único ficheiro `neuroenfants-hostinger.zip` e guardá-lo em `/mnt/documents` (a pasta "Files" do Lovable), para que possas descarregar tudo de uma só vez como um anexo de chat.

O `.zip` irá conter exatamente o que está na pasta `hostinger/`:
- `index.html` — a página completa em francês
- `styles.css` — todos os estilos
- `app.js` — galeria, notificações de compra, escolha do plano e redirecionamento Hotmart
- `favicon.ico` — ícone do site
- `assets/` — todas as imagens

## Como vais descarregar
1. Eu crio o `.zip` e coloco-o em "Files".
2. O ficheiro aparece como anexo nesta conversa — clicas para descarregar.
3. No teu computador, descompactas o `.zip`.
4. Envia o conteúdo descompactado para `public_html` no File Manager da Hostinger (hPanel → Ficheros → Gestor de archivos → `public_html`), não a pasta inteira.
5. Abre o teu domínio — a página aparece imediatamente.

## Notas
- O site é 100 % estático: não precisa de servidor, base de dados nem Node.js.
- As fontes (Questrial + Poppins) vêm do Google Fonts; só precisa de ligação à Internet.
- Os links de pagamento Hotmart estão no início do `app.js` (bloco "LINKS") para poderes editar se necessário.
