// Cache name
const CACHE_NAME = 'pwa-sample-caches-v1';
// Cache targets
const urlsToCache = [
  './',
  './js/jquery-3.7.1.min.js',
  './js/script.js',
  './index.html',
  './pages/onlineJudgment.html',
  './pages/menue.html',
  './pages/a.html',
  './pages/b.html',
  './pages/d.html',
  './pages/e.html',
  './css/style.css',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return response ? response : fetch(event.request);
      })
  );
});
