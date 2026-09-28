// Khmer for Travelers Phrasebook: offline cache. (c) 2026 Robert Son.
const VERSION = 'kftp-v2';
const FILES = [
  './', './index.html', './privacy.html', './manifest.webmanifest', './fonts/fonts.css',
  './fonts/kantumruy-pro-khmer-400-normal.woff2', './fonts/kantumruy-pro-khmer-500-normal.woff2', './fonts/kantumruy-pro-khmer-700-normal.woff2',
  './fonts/kantumruy-pro-latin-400-normal.woff2', './fonts/kantumruy-pro-latin-500-normal.woff2', './fonts/kantumruy-pro-latin-700-normal.woff2',
  './fonts/moul-khmer-400-normal.woff2', './fonts/moul-latin-400-normal.woff2',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png', './icons/favicon-32.png',
  './audio/001.m4a', './audio/002.m4a', './audio/003.m4a', './audio/004.m4a', './audio/005.m4a'
];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    // Pages: try the network first so updates arrive, fall back to the saved copy offline.
    e.respondWith(fetch(req).then((res) => { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); return res; })
      .catch(() => caches.match(req).then((r) => r || caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(req).then((r) => r || fetch(req).then((res) => { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); return res; })));
});
