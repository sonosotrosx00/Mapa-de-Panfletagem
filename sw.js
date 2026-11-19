// Service worker: guarda o app para abrir sem internet.
// Ao alterar arquivos do site, aumente a VERSAO para os aparelhos atualizarem.
const VERSAO = 'v5';
const SHELL = `shell-${VERSAO}`;
const MAPAS = 'mapas-v1';
const ARQUIVOS = [
  './', 'index.html', 'styles.css', 'app.js', 'data.js', 'manifest.webmanifest',
  'img/logo_prefeitura.png', 'img/logo_belem_limpa.png',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/favicon.png', 'icons/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(SHELL).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('shell-') && k !== SHELL).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  // Mapas (imagens): guardados depois da primeira visualização
  if (url.pathname.includes('/mapas/')) {
    e.respondWith(
      caches.open(MAPAS).then(async c => {
        const hit = await c.match(req);
        if (hit) return hit;
        const res = await fetch(req);
        if (res.ok) c.put(req, res.clone());
        return res;
      })
    );
    return;
  }

  // PDFs: sempre da rede (arquivos grandes)
  if (url.pathname.includes('/pdf/')) return;

  // App: rede primeiro, cache se estiver sem internet
  e.respondWith(
    fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(SHELL).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('index.html')))
  );
});
