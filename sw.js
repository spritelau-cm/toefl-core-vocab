const cacheName = "toefl-core-v5";
const assets = [
  "./",
  "./index.html",
  "./styles.css",
  "./styles.css?v=3000",
  "./vocabulary.js",
  "./vocabulary.js?v=3000",
  "./app.js",
  "./app.js?v=3000",
  "./manifest.webmanifest",
  "./manifest.webmanifest?v=3000",
  "./icons/icon.svg",
  "./icons/apple-touch-icon.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(assets)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== cacheName).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
