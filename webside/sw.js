const version = "v1";

self.addEventListener("install", (event) => {
  console.log("Service work installed");
  event.waitUntil(preCache());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  // get
  if (request.method !== "GET") {
    return;
  }

  // search in cache
  event.respondWith(cachedResponse(request));

  //update cache
  event.waitUntil(updateCache());
});

async function preCache() {
  const cache = await caches.open(version);
  return cache.addAll([
    /*     "/",
    "/index.html",
    "/assets/index.js",
    "/assets/MediaPlayer.js",
    "/assets/plugins/AutoPlay.js",
    "/assets/plugins/AutoPause.js",
    "/assets/index.css",
    "/assets/BigBuckBunny.mp4", */
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open(version);
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(version);
  const response = await fetch(request);
  return cache.put(request, response);
}
