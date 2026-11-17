if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then(() => console.log("serviceWorker registrado"))
    .catch((err) =>
      console.error(`Erro ao registrar o service worker: ${err}`),
    );
}
