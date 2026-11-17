const CACHE_NAME = "diário-de-bordo-v1";

const URLS = ["/", "/index.html", "/style.css", "/manifest.json"];

self.addEventListener("install", function (event) {
  console.log("ServiceWorker instalado");

  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS)));
});

self.addEventListener("activate", function (event) {
  console.log("ServiceWorker foi ativado");

  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key != CACHE_NAME)
            .map((caches) => caches.delete(caches)),
        ),
      ),
  );
});
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then((res) => res || fetch(event.request)),
  );
});
