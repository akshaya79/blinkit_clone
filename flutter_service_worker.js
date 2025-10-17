'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "36b156e9d969713356ce822a7d2efab4",
"assets/AssetManifest.bin.json": "43267726bf8da76b6f62d5d349c12ed7",
"assets/AssetManifest.json": "1941bc15e46695f3ff8f5df555832017",
"assets/Assets/123446789.pdf": "c470ba0e95865380585dd63abfeec2fc",
"assets/Assets/auth.json": "bf71ee6e2560ad2b1612817e0b6f9907",
"assets/Assets/cart_packing.json": "54844a70ef95980c159b81fdb63016a4",
"assets/Assets/Categories/1.png": "c471c78644f78d114a4e274ec157c589",
"assets/Assets/Categories/10.png": "36a0e4491e438fb83cc487b329505243",
"assets/Assets/Categories/11.png": "75d90f04e10727576bd7bc5462bc7f0e",
"assets/Assets/Categories/12.png": "e0bcdaafa4d4c3d7d42f804ea97f19cd",
"assets/Assets/Categories/13.png": "fcf1125304a0c502f62f6fdf3c511f1f",
"assets/Assets/Categories/14.png": "2cd6f4b6ffa94c60cf62369a1cf9ddd4",
"assets/Assets/Categories/15.png": "6d18b9c3fe49795eafb70d1c873913ce",
"assets/Assets/Categories/16.png": "6f874ff981a3eabbcefe4183073af438",
"assets/Assets/Categories/17.png": "c42a50892d39aff7d830509ae8864a1e",
"assets/Assets/Categories/18.png": "abe809f3129edb30f680a0010f38002f",
"assets/Assets/Categories/19.png": "027590cd90afa3766f65036f57c34e9f",
"assets/Assets/Categories/2.png": "b5375e01f2f7df24348000ea4bac1ac7",
"assets/Assets/Categories/20.png": "92add5553c0bf6e65d955f28cd577b1e",
"assets/Assets/Categories/3.png": "44ef21a6640230a9ae9e2941d64ada6a",
"assets/Assets/Categories/4.png": "5483cfeb6f2700751d7409c8e350a5d2",
"assets/Assets/Categories/5.png": "68f942342d8165ff7df76d2d2b00d9eb",
"assets/Assets/Categories/6.png": "11989f64aae40e54bb454a86854055a2",
"assets/Assets/Categories/7.png": "a9776439edbea569db84c03bb7997d8a",
"assets/Assets/Categories/8.png": "a96dcd14d4fd62fa1e066e0ad34cab9d",
"assets/Assets/Categories/9.png": "cd08b3e242c3c81dc685e3cd42883428",
"assets/Assets/cimgs/1.jpg": "49b88a6fee84b2f203ddc46f9e0a1eee",
"assets/Assets/cimgs/2.jpg": "fadb2f044f7f7611db1832e1501b8440",
"assets/Assets/cimgs/3.jpg": "32931c7309454eb2981da1bf936e97b3",
"assets/Assets/cimgs/4.jpg": "be4f9ec75a57d1e1293c942257014981",
"assets/Assets/cimgs/5.jpg": "d043e842071c2cf60e3075277c42c984",
"assets/Assets/Fonts/Catamaran-Bold.ttf": "29f1f414fb2a118d2bfbc215d7fc3d0e",
"assets/Assets/Fonts/Catamaran-ExtraBold.ttf": "b42072f2e69bb1c666e09c95ed103640",
"assets/Assets/Fonts/Catamaran-Light.ttf": "dc3da95032e964f668a70f01a201988f",
"assets/Assets/Fonts/Catamaran-Medium.ttf": "14fd050e294e254905a85f40b6b4478b",
"assets/Assets/Fonts/Catamaran-Regular.ttf": "c600acb297797db599c1ad51a9ee14c3",
"assets/Assets/Fonts/Catamaran-SemiBold.ttf": "4736252e325804659feb75ffb20563ba",
"assets/Assets/Fonts/Catamaran-Thin.ttf": "8f532f73839fef93ab5066fe41551c55",
"assets/Assets/Images/gift.jpg": "b06b2027122de854bdd44ebdc8c03588",
"assets/Assets/Products/1.png": "800b6af47f4de4babd5a2b151cbc419c",
"assets/Assets/Products/2.png": "db90f46d719c52bec032d05003c3bb01",
"assets/Assets/Products/3.png": "0768c8fae009c4ad7055f0a7529cae4c",
"assets/Assets/Products/4.png": "2dfec276b1493ef21087b320b2fd6792",
"assets/Assets/Products/5.png": "ee801b7d41d06e1a1798a071502d14b3",
"assets/Assets/Products/6.png": "db97255476baa2e0fb18d83a18f0ef67",
"assets/Assets/splash.png": "a401dc79f7f58a9663e3d9272dbd7c29",
"assets/Assets/splash2.png": "3d2c780497814fff42be6ee9df24031e",
"assets/Assets/SubCategories/1.png": "c52617687996b351f9e96057a74caea1",
"assets/Assets/SubCategories/10.png": "d3a6e9d569d600d36514732cb12b9fa3",
"assets/Assets/SubCategories/2.png": "be08ab6a60b11f0a19a00ed46e161110",
"assets/Assets/SubCategories/3.png": "4987afb0a563895fa65ae99f6f4e9673",
"assets/Assets/SubCategories/4.png": "2f59ca8d61bcf56891d0263711ead30f",
"assets/Assets/SubCategories/5.png": "7be441e76b54eaef6a863a2fee4be86a",
"assets/Assets/SubCategories/6.png": "0bffb5cdc2177ae510511283527222b1",
"assets/Assets/SubCategories/7.png": "8f3c64fa9045e3c1363dc8302bae95d4",
"assets/Assets/SubCategories/8.png": "eb84cb32120ebec76d141d11af1becd0",
"assets/Assets/SubCategories/9.png": "dd855e37023bfd968f632734bba65c02",
"assets/FontManifest.json": "24e30cf54b6c266c97202c6503b07c2a",
"assets/fonts/MaterialIcons-Regular.otf": "d087de13b6598a02ee10220b7fe13053",
"assets/NOTICES": "af2ac18824ac1ecc0a7401775410248d",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "1b3f6e6ea0cf555acd2a36406e5985cb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "02471056baad65cdd516003e37718d50",
"/": "02471056baad65cdd516003e37718d50",
"main.dart.js": "afdda7eec34d6c8dd65df793f8124963",
"manifest.json": "62df53d42ede5db96e59613cc8e6d711",
"version.json": "f8cc84f2c0f53839475976934097307e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
