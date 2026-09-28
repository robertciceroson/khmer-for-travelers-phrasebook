// Khmer for Travelers Phrasebook: offline cache. (c) 2026 Robert Son.
const VERSION = 'kftp-v19';
const FILES = [
  './', './index.html', './privacy.html', './manifest.webmanifest', './fonts/fonts.css',
  './fonts/kantumruy-pro-khmer-400-normal.woff2', './fonts/kantumruy-pro-khmer-500-normal.woff2', './fonts/kantumruy-pro-khmer-700-normal.woff2',
  './fonts/kantumruy-pro-latin-400-normal.woff2', './fonts/kantumruy-pro-latin-500-normal.woff2', './fonts/kantumruy-pro-latin-700-normal.woff2',
  './fonts/moul-khmer-400-normal.woff2', './fonts/moul-latin-400-normal.woff2',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png', './icons/favicon-32.png',
  './audio/001.m4a', './audio/002.m4a', './audio/003.m4a', './audio/004.m4a', './audio/005.m4a', './audio/006.m4a', './audio/007.m4a', './audio/008.m4a', './audio/009.m4a', './audio/010.m4a', './audio/011.m4a', './audio/012.m4a', './audio/013.m4a', './audio/014.m4a', './audio/015.m4a', './audio/016.m4a', './audio/017.m4a', './audio/018.m4a', './audio/019.m4a', './audio/020.m4a', './audio/021.m4a', './audio/022.m4a', './audio/023.m4a', './audio/024.m4a', './audio/025.m4a', './audio/026.m4a', './audio/027.m4a', './audio/028.m4a', './audio/029.m4a', './audio/030.m4a', './audio/031.m4a', './audio/032.m4a', './audio/033.m4a', './audio/034.m4a', './audio/035.m4a', './audio/036.m4a', './audio/037.m4a', './audio/038.m4a', './audio/039.m4a', './audio/040.m4a', './audio/041.m4a', './audio/042.m4a', './audio/043.m4a', './audio/044.m4a', './audio/045.m4a', './audio/046.m4a', './audio/047.m4a', './audio/048.m4a', './audio/049.m4a', './audio/050.m4a', './audio/051.m4a', './audio/052.m4a', './audio/053.m4a', './audio/054.m4a', './audio/055.m4a', './audio/056.m4a', './audio/057.m4a', './audio/058.m4a', './audio/059.m4a', './audio/060.m4a', './audio/061.m4a', './audio/062.m4a', './audio/063.m4a', './audio/064.m4a', './audio/065.m4a', './audio/066.m4a', './audio/067.m4a', './audio/068.m4a', './audio/069.m4a', './audio/070.m4a', './audio/071.m4a', './audio/165.m4a', './audio/166.m4a', './audio/167.m4a', './audio/168.m4a', './audio/169.m4a', './audio/170.m4a', './audio/171.m4a', './audio/172.m4a', './audio/173.m4a', './audio/174.m4a', './audio/175.m4a', './audio/176.m4a', './audio/177.m4a', './audio/178.m4a', './audio/179.m4a', './audio/180.m4a', './audio/181.m4a', './audio/182.m4a', './audio/183.m4a', './audio/184.m4a', './audio/185.m4a', './audio/186.m4a', './audio/187.m4a', './audio/188.m4a', './audio/189.m4a', './audio/190.m4a', './audio/191.m4a', './audio/204.m4a', './audio/205.m4a', './audio/206.m4a', './audio/207.m4a', './audio/208.m4a', './audio/209.m4a', './audio/210.m4a', './audio/211.m4a', './audio/212.m4a', './audio/213.m4a', './audio/214.m4a', './audio/215.m4a', './audio/216.m4a', './audio/217.m4a', './audio/218.m4a', './audio/219.m4a', './audio/220.m4a', './audio/221.m4a', './audio/222.m4a', './audio/223.m4a', './audio/224.m4a', './audio/225.m4a', './audio/226.m4a', './audio/227.m4a', './audio/228.m4a', './audio/229.m4a', './audio/230.m4a', './audio/231.m4a', './audio/232.m4a', './audio/233.m4a', './audio/234.m4a', './audio/235.m4a', './audio/236.m4a', './audio/237.m4a', './audio/238.m4a', './audio/239.m4a', './audio/240.m4a', './audio/241.m4a', './audio/242.m4a', './audio/243.m4a'
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
