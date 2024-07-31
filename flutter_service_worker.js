'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e1bd8b54af05f2d4173447287452e316",
".git/config": "619d161b6a2dfdc15010daa7b7cd0d61",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0a18c9124cbde78e0afd7fcf9b38c025",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7688655292fb9b6324a70c8908974631",
".git/logs/refs/heads/master": "7688655292fb9b6324a70c8908974631",
".git/logs/refs/remotes/origin/master": "afe9b36af116496cb0c47f723b7136e8",
".git/objects/04/b0c9a305e31ece3c99f0e0a95884f49065b67e": "17e5470461c5135101cc150a9beed2b2",
".git/objects/08/97f878b45bcc2f2fec1cb4f9e8adfd37ec58a4": "ac2a33a1c12a23115180d4bc33f31d75",
".git/objects/0c/213c0559de8cb52b57769e09704d7cf9ad6017": "38d5e16c3bcc40ed8b2e092a3417ad56",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/ce6c772d7d08555d70da52fa7e90c424614660": "b84f283ad6af4f4cb6a77f048c8daf59",
".git/objects/22/4d3a145b5d081c08085066962a225930d9be10": "03121402f1d2d3745ae941d9137b070a",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2f/212c479b2e2584a10a749c17729d6dc4dcc839": "c28e08420212f826f334e8fa18807dbb",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/38/41dbbee56a8cfd53b9d1661a17aeea504fd889": "fe3ff31c449670398297f88790d75d70",
".git/objects/39/912fd6adc320ad5a8e418bbbf7393b48f4200f": "29cdaeae7d8f80771d8c891a3ba3893a",
".git/objects/3b/b65717a907a202e127488eb56022bca73e2258": "3c702da623e2e58a5d8eb16b7f282185",
".git/objects/4b/7e7afad7831a85a026af945ebe6bee776ff2a0": "2576355c22945d63b86e33c6131f2aaa",
".git/objects/51/32c8f54c2948fd6045fc259516e93cf4cccffe": "8514320b366c436116833c6f4837dbd6",
".git/objects/52/0f225a8b874aaeaba149855ba23d037bf99d17": "ab17898e9a406cc2724fea06b2c7a312",
".git/objects/52/637b93a4b2f8bbba520eb85c21e0e7c50241ca": "bc1297d24d5e0506041b199986f573cf",
".git/objects/62/6cd62d5e85b010ca5f5f017a82f4ff65cf65ba": "daeee0823c950191ed67996c34a3fc6b",
".git/objects/6f/4684e083a018fb2b9b3e3579fa83d88e00357d": "c36a0d2885d9ce067027d762572f1a49",
".git/objects/72/06613694f0dae575a085859affb548a4095472": "ac5d5fc80603681a0d8764ec060e94ed",
".git/objects/79/2896519e686a4fb71be9213c1a8c7ae2e73670": "ae52bf70cae26f3860d0278c535e98f5",
".git/objects/7c/0ab4a0cc05f064bc65d65452c27c3371f9d7f1": "debcf984a2e1562784061fc49e66c60b",
".git/objects/7e/94ccece9ff019fb9c42a71760b35529b23b7ab": "d5c070596e9f671ab0e726952f5ef2b2",
".git/objects/80/cfb9b4bb90ffae1a180ca1ae23b6cd0d642319": "48be3d35504169a77b84f93a1f1776cb",
".git/objects/81/8f695478301dcb365f2f8633f45d7834a505c9": "db7f139d1cfb80e40aaa3f10b353a8c0",
".git/objects/81/e585eb8e87f9d2ba1addda8e08be7126a57067": "624c34801abbe7099f830494627485b6",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51b86cc2d41316d7c0de529082f56f33b2aede": "0558ce7dd2ad620c9569b3bf698b69a8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/e7197583a2319df04c2f0e21c489af3a49f8e5": "ab241086cfb2d2d5963b522e94f8b750",
".git/objects/95/4737611bc03940a3d5492cd703a8dbf2bf9727": "273a45425a6979fd42efe122e551e35e",
".git/objects/9d/0fc340fba7264999c656906b1fc429fcf37eb6": "003e5c19fb57daa6a474baf84011c8f5",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a0/60f4603c8052ce6365d4596ec6d800a2136f18": "517e7baf2b036c6db1d98f49ea70e70c",
".git/objects/a2/26e0333065bf540fd0288d31796711a64232b3": "3009c336b2d611ba03c62d760db0cede",
".git/objects/a7/d1c884854302f3389832aa0b959fe3126d8629": "10b48a448b3f63794593277906c0f061",
".git/objects/b0/fd33291e557fc1e38fe3653e38d4268bc20471": "051648c0047728d5401677867f498075",
".git/objects/b5/4c82320df836d6b77bb64cdd2d9a64201708c8": "8205b7e74a4e42e19a0f35a9bd9cb043",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c1/5972b11727c9ebc0a2f3bf2b827145bc67e44d": "722ff29e60e982a997534ba14ab55f9a",
".git/objects/c2/b89c2ca73fc21a22554001b7ce2c37ccc13f94": "d49da5236b569c9f97bbc74dcc666d31",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c3/8feea0c9b721f5d552967cf483ddcf297ca199": "28b33a00bacc9b2fe243611e81656753",
".git/objects/c3/eeda11fd264c21104eb7f82b83afde006a515f": "324fecf748a79f12363c63e14faf795a",
".git/objects/c9/e97f9f931b8271a86796f529662d4f1ec92fdc": "1826bca74b887c8b2b953335510921f7",
".git/objects/ce/4b82b348e8080e9960fef3d5f2d74fb90676da": "77251926a477e4ae917749bb8ebf2dfc",
".git/objects/d1/1b2896a35582970830d2a4475705c9f0999ac6": "78dbe218a15186137b093678bfba890f",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/99927722ed21cd6bc05c6085d0866436731b6e": "af40872de4b7dcc6c723a883c1873059",
".git/objects/d9/5d074891fd312df4a4e74ca74a67672ba28101": "43930503a1e29d834a10b380cdc1b04e",
".git/objects/db/03bc088fd45f589188fcd48420833e37c814af": "37777d3090c3a9816249296180284da9",
".git/objects/e0/23ef66f526b7ed7cee08bd2839efa23df91fa7": "0b36e26283d20d0ae72739015035493e",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e1/1e230aeccc68a6ec22c982fd82b57137a704f5": "03c5a649dc3546265de27f64f087cd8d",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e6/1c4c9b21b0f12b85dd6df59283916b8b972827": "4b2e0332642eb81ee4826fd2fedbc068",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/10ff0660560f198da83d86627dc690f0b03367": "2d3bedf92f04debb37da2080ef735c63",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/objects/pack/tmp_pack_3hK70B": "54ecaba0be2af4379ac26b5da12151b7",
".git/objects/pack/tmp_pack_D1au20": "ddfe6147182d5d93663c198266c90e02",
".git/objects/pack/tmp_pack_jvC8BV": "ac8593d14750e6131cedd35a5f03b5d2",
".git/objects/pack/tmp_pack_ljCrof": "6c925d46c4501e88f049eb13c203d19d",
".git/objects/pack/tmp_pack_m9xDy4": "605863d16875cfdb7f7fb33e4c4ad9a1",
".git/objects/pack/tmp_pack_NMKxSf": "605863d16875cfdb7f7fb33e4c4ad9a1",
".git/objects/pack/tmp_pack_SeyL9M": "605863d16875cfdb7f7fb33e4c4ad9a1",
".git/objects/pack/tmp_pack_TI2p7G": "605863d16875cfdb7f7fb33e4c4ad9a1",
".git/objects/pack/tmp_pack_xWGota": "fe001ee77f20a7a27919066e78966c9e",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "ab7d5eb776503edf88fd0f31e9e72a3d",
".git/refs/remotes/origin/master": "ab7d5eb776503edf88fd0f31e9e72a3d",
"assets/AssetManifest.bin": "dafe00ea2fdf19fd7e34dd9a24001369",
"assets/AssetManifest.json": "ff87c1e733757674c57bf8d3dc0e8fa4",
"assets/assets/flower.png": "5c096699441745fed94a27e1f4aeb2f9",
"assets/assets/img1.jpg": "a50765ba9429229c7ef70f528a8d0733",
"assets/assets/img2.jpg": "9e676b446a1f18488c1c45e8b85e8754",
"assets/assets/loading.gif": "6d64694580b802a458db98d074d6c9a6",
"assets/assets/logo.png": "66383c810aaa4d0040605ed5fa3c7caf",
"assets/assets/Meddon.ttf": "2ef637e29853f2e76ee4393e39dd6fdc",
"assets/assets/recording.gif": "ef84f28b10d1d30f10b29b112e660075",
"assets/FontManifest.json": "ff81ed10596af589c7298591a3f7fea0",
"assets/fonts/MaterialIcons-Regular.otf": "51ae374a42e4c3676b3158d40e704899",
"assets/NOTICES": "e33b941b044f2d3b93c058ddebbd6b70",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8db4a9467d69a0349330b07218e0cf1a",
"/": "8db4a9467d69a0349330b07218e0cf1a",
"main.dart.js": "bf3e0a4d460fdae5c3c0e3ceef3fdf56",
"manifest.json": "6ed01cc840dfbb7a5511d8684e320caf",
"version.json": "7e026da94b4ca9f9e364a958081d4ac2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
