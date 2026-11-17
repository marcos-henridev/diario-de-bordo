const CACHE_NAME = "diario-de-bordo-v2";

// Caminhos relativos ao sw.js (que fica em /src/), então funcionam
// tanto em http://localhost:3000/src/ quanto em qualquer subpasta do deploy.
const URLS = [
  "./",
  "./index.html",
  "./style.css",
  "./manifest.json",
  "./app.js",
  "./utils/script.js",
  "./utils/const/index.js",
  "./utils/crud/index.js",
  "./utils/globals/index.js",
  "../public/seta.svg",
  "../public/setablack.svg",
  "../public/iconsPerfil/Robozinho@1x.png",
  "../public/iconsPerfil/Cacto@1x.png",
  "../public/iconsPerfil/Cafezinho@1x.png",
  "../public/iconsPerfil/Planeta@1x.png",
  "../public/iconsPerfil/Sorvete@1x.png",
  "../public/IconApp/icons/icon-192x192.png",
  "../public/IconApp/icons/icon-512x512.png",
  "../public/IconApp/icons/maskable-icon-192x192.png",
  "../public/IconApp/icons/maskable-icon-512x512.png",
];

// Arquivos de CDN (flatpickr): guardados à parte para que uma falha
// de rede neles não impeça a instalação do service worker.
const CDN_URLS = [
  "https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css",
  "https://cdn.jsdelivr.net/npm/flatpickr",
  "https://cdn.jsdelivr.net/npm/flatpickr/dist/l10n/pt.js",
];

self.addEventListener("install", function (event) {
  console.log("ServiceWorker instalado");

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll(URLS).then(() =>
        Promise.allSettled(CDN_URLS.map((url) => cache.add(url))),
      ),
    ),
  );
});

self.addEventListener("activate", function (event) {
  console.log("ServiceWorker foi ativado");

  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key)),
        ),
      ),
  );
});

self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((res) => res || fetch(event.request)),
  );
});
