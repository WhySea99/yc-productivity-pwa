const CACHE_NAME = 'yc-focus-v2';

self.addEventListener('install', (e) => {
  self.skipWaiting(); // Forces the updated code to activate instantly
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
