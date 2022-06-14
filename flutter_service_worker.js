'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4a0975e76baa6711c8639af467df3aa6",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/loading.gif": "e4b6323e19e57f6761b1ce47b7d329e0",
"assets/NOTICES": "799f787429a92d894da6f6698aebff7b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "a1da016e52c4bd62f959e0a56e6a002c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-debug.log": "672387f20f11cc40f35baa45c55211c1",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"images/loading.gif": "e4b6323e19e57f6761b1ce47b7d329e0",
"images/MyTasks/tasks1.png": "f8591c36003a470576ed5f44e59ea448",
"images/MyTasks/tasks2.png": "7d22b0561238cab2e0f49e5f2a33e375",
"images/MyTasks/tasks3.png": "5d3fb3ef61686148cb1d89e1fbca7707",
"images/MyTasks/tasks4.png": "17718c327eed05d82764681fd75f541f",
"images/MyTasks/tasks5.png": "b0fef3c963fc0cfe8ea56c1436d4e8f5",
"images/MyTasks/tasks6.png": "13a4f41bf3d36c79dd49d24fe8794b30",
"images/MyTasks/tasks7.png": "44d3207422c80187219e468b48a0f7d8",
"images/MyTasks/tasks8.png": "c0bd39ede61bff49d0a8ef437f5e420b",
"images/Otbokhly/otbokhly1.png": "7698d5e763e3ba08d118815b190494aa",
"images/Otbokhly/otbokhly10.png": "3591cc5b1091d118695600c6135e1287",
"images/Otbokhly/otbokhly11.png": "3e2ef2d4231b586e0c08217bc0bbb2d5",
"images/Otbokhly/otbokhly2.png": "c6b0c92fc2402a7ee193e1ddc311057d",
"images/Otbokhly/otbokhly3.png": "d0e9da202c2db252a32aff7943ea49de",
"images/Otbokhly/otbokhly4.png": "78dad5db4d60553d69d2577376fd9d91",
"images/Otbokhly/otbokhly5.png": "0e5e238bc7d6ed57bfd4086fe72d30a4",
"images/Otbokhly/otbokhly6.png": "d1954178c8f3c5fb313e0ebb600b39b5",
"images/Otbokhly/otbokhly7.png": "475c1f6be8f5c40af07e35b8123e91c6",
"images/Otbokhly/otbokhly8.png": "f4239605139c264640abfdfc1e9d47ed",
"images/Otbokhly/otbokhly9.png": "39374252c0cbe0aace46904b1e7fc153",
"images/Taxi/taxi1.png": "a6149d02be02999e29575c8e7a982411",
"images/Taxi/taxi10.png": "c7ca4268fe632a152216f7e8378e7294",
"images/Taxi/taxi2.png": "50b37b3bc5452b120db55806d4a1ace9",
"images/Taxi/taxi3.png": "8593c8ce9498c39d301a3c65af3de31c",
"images/Taxi/taxi4.png": "f6a16b497a6da6430ecacc9dc6759c63",
"images/Taxi/taxi5.png": "e783f0dcec97890796ba00121e889646",
"images/Taxi/taxi6.png": "f190dca98857f0dd5d96fe9b3e32c616",
"images/Taxi/taxi7.png": "5e06fd76b0c8b367d0214b6b62fd226b",
"images/Taxi/taxi8.png": "e3ebae2910f38a3ea14588cdfc3abf5f",
"images/Taxi/taxi9.png": "0ba7bf3681f76b5772f141266f8b432c",
"index.html": "afb6a3187956f181d52e31c88ca1e723",
"/": "afb6a3187956f181d52e31c88ca1e723",
"main.dart.js": "451e0e10aac882ec9d655769877878a1",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "4aa78f0c7b0a33a604db17d5f6893baa"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
