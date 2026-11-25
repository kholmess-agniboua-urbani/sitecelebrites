
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const text = file => readFileSync(join(root, file), 'utf8');
const media = new Map();
const mimeTypes = { png: 'image/png', jpg: 'image/jpeg', mp4: 'video/mp4' };

function dataUrl(file) {
  if (!media.has(file)) {
    const extension = file.split('.').pop();
    const mime = mimeTypes[extension];
    if (!mime) throw new Error('Type de fichier inattendu : ' + file);
    media.set(file, 'data:' + mime + ';base64,' + readFileSync(join(root, file)).toString('base64'));
  }
  return media.get(file);
}

function pack(page) {
  return text(page)
    .replace(/<link rel="stylesheet" href="([^"]+)">/, (_, file) => '<style>\n' + text(join(dirname(page), file)) + '</style>')
    .replace(/\b(src|poster)="([^"]+)"/g, (_, attr, file) => attr + '="' + dataUrl(join(dirname(page), file)) + '"')
    .replace(/<a href="\.\.\/medias\/videos\/Daft-Punk\.mp4">Ouvrir le fichier MP4<\/a>\./, '')
    .replace(/href="(?:\.\.\/)?index\.html"/g, 'href="#accueil" target="_parent"')
    .replace(/href="(?:\.\.\/index\.html)?#beyoncé"/g, 'href="#beyoncé" target="_parent"')
    .replace(/href="(?:\.\.\/)?daft-punk\.html"/g, 'href="#daft-punk" target="_parent"')
    .replace(/href="zidane\.html"/g, 'href="#zidane" target="_parent"')
    .replace(/<a href="(https:\/\/[^"]+)"(?![^>]*\btarget=)/g, '<a href="$1" target="_blank" rel="noopener noreferrer"');
}

const pages = {
  accueil: pack('sources/accueil.html'),
  daftPunk: pack('sources/daft-punk.html'),
  zidane: pack('sources/zidane.html')
};

const archive = JSON.stringify(pages).replaceAll('<', '\\u003c');
const html = '<!DOCTYPE html>\n' + `
<!-- Fichier autonome généré par node scripts/build-presentation.mjs. -->
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>StarPulse - Trois stars, trois univers</title>
  <style>
    html, body { height: 100%; margin: 0; }
    iframe { display: block; width: 100%; height: 100%; border: 0; }
  </style>
</head>
<body>
  <noscript><p>Activez JavaScript pour ouvrir la présentation. Dans le dossier extrait, vous pouvez aussi <a href="sources/accueil.html">ouvrir l’accueil</a>.</p></noscript>
  <iframe id="presentation" title="Présentation StarPulse"></iframe>
  <script id="pages" type="application/json">${archive}</script>
  <script>
    const pages = JSON.parse(document.getElementById('pages').textContent);
    const frame = document.getElementById('presentation');
    let currentPage;

    function showPage() {
      const route = new URL(location.href).hash.slice(1);
      const page = route === 'zidane' ? 'zidane' : route === 'daft-punk' ? 'daftPunk' : 'accueil';

      function positionPage() {
        const body = frame.contentDocument;
        if (route === 'beyonc%C3%A9' || route === 'beyoncé') {
          body.getElementById('beyoncé')?.scrollIntoView();
        } else {
          frame.contentWindow.scrollTo(0, 0);
        }
      }

      if (currentPage === page && frame.contentDocument?.readyState === 'complete') {
        positionPage();
        return;
      }

      frame.onload = positionPage;
      if (currentPage !== page) {
        currentPage = page;
        frame.srcdoc = pages[page];
      }
    }

    window.addEventListener('hashchange', showPage);
    showPage();
  </script>
</body>
</html>
`;
writeFileSync(join(root, 'fansite.html'), html);
