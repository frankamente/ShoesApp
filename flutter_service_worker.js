'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/manifest.json": "db4cd17da27ac7f0f3425e0d605ebd21",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/assets/AssetManifest.json": "c1cbec9697d6e3106ed1a67075f9d377",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/assets/assets/imgs/azul.png": "a0cd607237ec1cb0683f4206996299dd",
"/assets/assets/imgs/amarillo.png": "7fc2c6b1334a9fa685336aca4ad846b5",
"/assets/assets/imgs/negro.png": "8ea360e79f98624d080d16ab5dfd4d33",
"/assets/assets/imgs/verde.png": "50cf016f0231bf6d5dae9b3dfe3305a5",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/main.dart.js": "71c115fb87c1079a207fbba1703f1a04",
"/index.html": "cc6a8c2aa3db0699577a3b5b2528fe5c"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
