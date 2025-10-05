'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6935292cac978c9cfe5a78da75b39c54",
".git/config": "61c17332e04b86ad008c0ee4b2fa6e28",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3140e65f256f986d7bf9b71fb78bf245",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a7c1953c0fffdc06dcb4ad1aee2d42b0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1ed6e1767745fe890c05e04175943388",
".git/logs/refs/heads/main": "fb9f3b4a49e9b133085357f293c3fec4",
".git/logs/refs/remotes/origin/HEAD": "3e7410d49756d1c2106f11f18cfae2bb",
".git/logs/refs/remotes/origin/main": "73c4f78ef0991c21de2ce878912f6215",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/08/faa49f71d4e5d0d537ff998e3e3c5b51c5f402": "4377d3dbd69972a7020bcdf852cbd39a",
".git/objects/09/8688c04b2ad23fe88c53e42642311e8f60a319": "e42ee4d1716d3d6ea8107a72642dbed7",
".git/objects/12/3bbd5b90576c3d99dd1e5a7e464e38bb40f7c5": "63e50f32becdb2f4d51fe1193e7853ae",
".git/objects/16/28847c7cb02b06ece8b94110648a10173f5413": "c635ad27564e071c033367a156ef8f9a",
".git/objects/1a/f814ac04caaa01e8a39f2b722ee8ab3a087f01": "b743d8b9371487d8def7b0848bd92521",
".git/objects/1f/46cdc67271bf8efe134cb8595b12c4ffd02f30": "8542e7e577a0126c657d9188e3fb7206",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/22/0ce2dc29ea0fbe33071fcc0c4267b55be9bea3": "6f05078d2756d6ffa2576a850f329db4",
".git/objects/22/66b6c9919ec6793a7c9440381d6e928e7e13c8": "0fc0bb1b84fcacdaa34fa2344f3c1476",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/32/1364529d15d871c09397b1994496d0b714ef28": "46b9452091e0289292e310f33cdbd6a3",
".git/objects/39/b8814aecf8ec43997e2093cfcb4cb739f8d705": "fb85de87c79af0fd83e29071fc246467",
".git/objects/3a/2bd1d9fab42cfd6b79ac3da4f53e16c421c917": "43becd24943441a49f3d921d3c40f5c9",
".git/objects/3a/5571276e9e89fc3cd1900a223b277cd9a8e99e": "8f0e0de560ea0b41fdd4f95dfb694c82",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3b/6a8572b3d6c8148cdcfbc3b25ce625ece309f4": "beee09e433b6be08a8d9c0836a6024ae",
".git/objects/3c/43d0f7d4feb5c6027e17b2771c3dc75350b0ce": "5cdea974ae9576982981c699d25184c1",
".git/objects/40/faaf10da3f2b6ac4afbd5e58007fc312b33b5e": "12908ea6506bf58275e24ccdb8c13a71",
".git/objects/41/afa2eee022e0f9c7149aae4c9016048e6e42e9": "6ccbbdcb45725598eb2cb038a166c9e3",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4e/63c7ec10267fc68ce61068195657776708dc41": "7281aab2c8db3342406af60dc2feff45",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/8228d7519d142c6980c86986fb61122e2c82ef": "da145d4a7fe54edba6a3a5902caf7d03",
".git/objects/51/5cf7558822a981fa126a9bd6f2903db5766d12": "6f737691e393772e684d9bdafda7fbf0",
".git/objects/60/98c1909fa395fc285a8cf74401863c90e0c0f8": "e65702384f79ee42cf78eead3a969287",
".git/objects/61/7576132a6a56674305f413b17d6591c3cf229b": "5203ff877c090d8d576bde042f499ab8",
".git/objects/64/c7dff6337100f90ffe4c1a2c68079e71622fd1": "df13bb850fe8211e212bdacbc9ebb902",
".git/objects/65/639f4f84d0892332b2499545c121f1d5e0f084": "837789648b080a3bb52cbc91278cdce8",
".git/objects/66/0572d7b961d38fe09383daa212e2404724d70f": "b2a2371ac1fa164fb7d5962515a2fb34",
".git/objects/6d/15662d308e68da2b5d7826c5736fcd91f939b2": "3f22e4c6b6b1c5f910aed1cdb38e7c7d",
".git/objects/6f/ef440944c64730db7cab48c1c883525c2e37ad": "94b31b1b15ab8266456a2ffa5a51f7e3",
".git/objects/75/29818deedc2cb727a392181ff7fd63a7e67b3b": "13c4c90c9c226d0a5ac7f9b8a6d85391",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7c/9a8a4ee83f39b6e1da51e5f02747b68f0e706b": "25635982c40ac35453153ae225b4ea38",
".git/objects/7e/52c42cfa2128a20377138ae07614cedc3478c8": "7d29ce18a478560a7624e487bc714b1e",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/5c04e493e4b82d146571a6559aee53c9ae0559": "b20b9410b8fd08c6e99cec7f8705ef5a",
".git/objects/99/44a9a2e0a6acfdf66635a2dde49cec16a2c303": "d69498f970439122314a36ce7eca0a39",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a4/d2611165f970b44c2eb0206bb5d5e92f51b4c6": "1d40c7f7143c3e547299eed25a5a303f",
".git/objects/a9/bc2d6f10e4c7da375e3fad72db129a5692a95f": "e819b2ea9f44c44f4477613e7871f665",
".git/objects/ab/83115648f98e50ebbad343704f54bbf36605db": "3158d213c16c0222297d2fdcdb5bb2af",
".git/objects/b6/ab217a5a2dc7063eb0b2643aa146a91d11fe07": "acec4b5478d815af3db7a09088c1afd6",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b8/eab0cb727b1aca1df1913cf42330732f3f7f3b": "0154aa99f255db61aa920f1a8dfdb948",
".git/objects/b9/1de8d519cb6f19fde774a2ffc44e2637fb00fa": "c9f759469bc2281d4c08db8186bebac9",
".git/objects/bb/09a8fdd47b660375b3ef2bc80857c0e5a4c1ca": "90e5f65fe98741cd74a59be058697d61",
".git/objects/bc/191be6095128106cac9086c73ec14b20483a86": "aea6f7bb419aac1a2e194b50259fb399",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c8/f1108cff7bd4816c45a563cd883fbae5890128": "1e7bb544d3576fbe153716f740394009",
".git/objects/c9/1b4da7c0504f22814b4f6d521889d41d2e2939": "669e3a4346e416a68b57e1155dbc8e5a",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d1/2fd58d92efcd58eed2292c042a2000cbfef111": "40936c211ef0ccb140a85a85ddb66df1",
".git/objects/d1/84df3ce7858c94eeb81166db4b4a0a8715b132": "c1673c433a2c92d2d658bfa3e0440037",
".git/objects/d3/9313007ad3c139763996866f80b1c64f689272": "f67343cf943a0d94a3c4546dbaa8dd05",
".git/objects/d3/98b03d58563fb0a20c8a342de1ecf8a0bcb41c": "4da9dc77f2d0872a5aabc88dab42ea28",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/fcd616bec580c61ef54da8df915226ed055d13": "255703dde8cc962eacd698c602676358",
".git/objects/db/7be19a47f0223a546aa927708460fc280922a6": "4a842c6e09ef0d86c47a4880ecc47920",
".git/objects/dd/6824869d81e70628e9f211baeb872f5937ea06": "d013e81f5ec9b3fb28c1a49f2ea9ac6a",
".git/objects/df/e2f3e67c627704f480f38afcb49c3c23c2aee7": "8c8f640753bf5e3ef44cbc171fb148dc",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ee/f54ebea1fb1f576ea8fc2b366f22b0a9abdbd5": "f03fe04b629e1a25c6c1a2d0782260ae",
".git/objects/ef/a405f55b17bb98137a263c949f6367d524b143": "ec0e806c20fac495c934d6f9f6f068ed",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/2c2278061bd796a2ac02ddc97bb1686b1ad767": "395a962666caf49d4917d3cf66a354f0",
".git/objects/f7/0f52d32a5431881738c44e96df18e1448f7e2a": "caf9cf63d743c0d577d42644e42beea2",
".git/objects/fc/9bc84a3a1063bd3c13fecd7c8011e25fc790aa": "be1b3a56ff679ca682100459bebd9161",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/ORIG_HEAD": "3adf36a86bd6e162106ef6676328f392",
".git/refs/heads/main": "3adf36a86bd6e162106ef6676328f392",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "32026a932af0d83488589766bfddb3d8",
"assets/AssetManifest.bin": "9e88e3ab925ca64aa29bc2c909570f84",
"assets/AssetManifest.bin.json": "35984d740f226ad2b0ad9660be5c2518",
"assets/AssetManifest.json": "889f0a3e667b26dcba77533b139a9cfe",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "afed02a25e325fd572221ca0432c78d8",
"assets/NOTICES": "83947401d211820afc12363d31db0692",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass.frag": "7d4014033989668256ee5869adfc5ebc",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass_arbitrary.frag": "e79f6aa229795ab966c79eda20c69a40",
"assets/shaders/ink_sparkle.frag": "9bb2aaa0f9a9213b623947fa682efa76",
"canvaskit/canvaskit.js": "1b6f288ce484225c079db75751f22814",
"canvaskit/canvaskit.js.symbols": "a3b4c42fca4cdf168ac2718d2d09bc7a",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "0d3e893c15ead7da6d36efe877694617",
"canvaskit/chromium/canvaskit.js.symbols": "03d31667dc4f5676bafee152fe8ff4d7",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "66504b1416ee7a68aee25f965a90949c",
"canvaskit/skwasm.js.symbols": "09f5d843a50cf276b2dba6fc466b98e6",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "31e5a202dc9ca33e695bc30bca93566c",
"canvaskit/skwasm_heavy.js.symbols": "7f3cadcdd3b8e95e0160e83d82085ef6",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "3303928b8a505daf6ec770a03a388223",
"flutter.js": "3265c4a743599232db370a9249855db3",
"flutter_bootstrap.js": "23d7f65e0e841d3f237ac863abb52977",
"icons/Icon-192.png": "82b7f6f83ef3489f14a3e759d1c1fb3e",
"icons/Icon-512.png": "14c776bb1599199ff62c6090f2d3a713",
"icons/Icon-maskable-192.png": "82b7f6f83ef3489f14a3e759d1c1fb3e",
"icons/Icon-maskable-512.png": "14c776bb1599199ff62c6090f2d3a713",
"index.html": "e6f680ee91c2b1d27d045f6ea319175a",
"/": "e6f680ee91c2b1d27d045f6ea319175a",
"main.dart.js": "227c66fc9da5c3ec160f3a800f5f281f",
"manifest.json": "b0144dea004b6b2b3a8c82fc373a5695",
"version.json": "248e5f338b3b7b644fb2b0875cbc21b9"};
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
