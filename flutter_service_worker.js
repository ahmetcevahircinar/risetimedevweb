'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "db27b94e563bd511acac95db84e540b8",
".git/config": "046f0b43835ee1d1296dba90c06e9e31",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9ca7f8328630edbaa4b0a2be0ea63615",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5d60d6c844c38f310b801cc07510df51",
".git/logs/refs/heads/main": "26959908012b990cd35ed422da9e42e4",
".git/logs/refs/remotes/origin/main": "a3c9647ca04f2a82a052d09c63bbb456",
".git/objects/04/aa91d08a3b08acc46cf6ca7f0fce1566c53ea1": "0a59f248cdb9d5e1b5f5a59185991cbc",
".git/objects/06/03a21c63f0fa9229e268a1cb78f99fcaa06067": "54c29a72fdb1a47728b60f4627d5d988",
".git/objects/0b/1e4dd993e2d41282a677634f77b1399154356f": "255bcff5aee7b673d792ad19736de4a4",
".git/objects/10/785d22e55aad35be0ab992a114419a45c56966": "287d294f7a7e84c3ac8658cf474ba7df",
".git/objects/17/83722478436405f1f5c53b0569fdccd80e6647": "9585b5036e8a82f81142ed85fd7aa730",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/62c2c01f77c1f9dcabf0d388ac33df4d77ab51": "e96a0b4174213123a8dd6bf40fede6fb",
".git/objects/29/dff7c2b5cf2615f634f0e5597fa652cd60d636": "3c41db162090cf4e7a97b53dfc19dc26",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/624ca4883c100392bcaae178c4035d4d450f6e": "f6634d021edb376e020e5cfaf8ffc887",
".git/objects/37/8f85d6a04a2a0b5f27a53489b18367a19b87af": "4ca81a6d8a1253063ba814cec442c1d1",
".git/objects/40/96020cad5932c34d323c61d76b12d5c39ab429": "c73cf22dfec359a08bce7fc4993d73ca",
".git/objects/45/e691c21fb55e23bc9d592f450cc1e0e2bdf82f": "ae7200e6dcd85148eae31ba5b04895a8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/2b6fb4d18a0261920840dc546348743ef097db": "11948a92de4e381b95ecb021ecdb2960",
".git/objects/52/3c9ba88f34dad7e978eb2e8159c1235f4b70af": "47259018fbcfd3b65fcb7d27c6704e68",
".git/objects/56/65660f8ae4f26c1968e42e891dc6c3683e6a0a": "b069bd80135134a50016993f92374c77",
".git/objects/59/ebe866557f0e4d1fe098298ba0f55c46ee71f3": "323d9ab782fcdb6446ac7d01a2b5ad4d",
".git/objects/5b/28a63aad41dce833cda24f6ad808371db04fab": "51b26cfa0d09adbfc60acec21897ecd2",
".git/objects/5f/0e9873e2f3083058a94abf574c67876a282cdc": "1d59d8be74003b827eb6a19e78b6f9a8",
".git/objects/65/6977c5a61e2b26896c0ef399a7c0b7891dc171": "b6b55d8252ac29efe97aaadf656536cb",
".git/objects/66/3b6b15f90fb987b62790e5036fca55970cdff7": "0e818425a87bbac0fd6260aa26882dda",
".git/objects/69/d6e703edc00efe439329cdd43b974d6839e0a4": "19f4db0f2938cb3bf1e99e71316666f7",
".git/objects/6d/3943600d8e5d7e990b5ba06a834ee3e589fa01": "f5ec9701de6e200cc3dbe58166453f99",
".git/objects/71/4c090ee78340f60f1832b852aae75b1b092d85": "776c27a34ed159cb39592a8526de1d91",
".git/objects/74/27394724457529611446d38d27be5eb95b3bad": "291ac00ff0c237db97c1a1add0551ba8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/06d1c718c581fc2845b3c37b4602744a6cb28e": "37dc7830482a97023fd31100f51f7fbb",
".git/objects/84/0fe8a5f52a23829ddc8495c295690aa369151d": "9c7bb9c736b80fd0388611991ef894bc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/46807747671484008a69ff852945f467193660": "2154a695b81b555081e378ad93bb29a5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/a6115c61fa64c76b454c6554a1f49d73f24578": "20d977a7a224dbf6f6508b32b7169308",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/c1c90ac9b2519d00aea46d6f9cdb6f2830cb7b": "f4356249baea633ebf5deeb7bee9c7c4",
".git/objects/a5/cdfe7e7fcdb49f9d4ce1872badbee40e074701": "04ebc9b2fb44135f40733e8e4ed5141c",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/39e746ab681938c55d19b8ac56f3ad5aa907f5": "f79ec6640a6c2e60ecb0799988bf0d53",
".git/objects/ae/05cbd15a019b18cce75a6cc05bf022019e5794": "77088728c61a5277337149b70ce24b2d",
".git/objects/ae/77f699eb8928bb3589ec69c2393918b70020e0": "b77a034a9ba6ae03348ba85a90f5ec5d",
".git/objects/af/4e334199df774bee2a29860b5a7bab133254f7": "58cf6d731bf09350baf4dbec917775e3",
".git/objects/b0/01e257e0cacdff3e405955f5175693ad451777": "5988c44d91d20fdb56c841de749259c6",
".git/objects/b2/b31258e1de4cd45bca4f501b1779178d94e717": "d4706966a170b78abb810b1261a7a9ad",
".git/objects/b2/d8ff1cc4047f1d854d2cf686a1b600944358f4": "8cec35b22abead196b414f5bb7bc3ab4",
".git/objects/b3/94e18372c075f7b89bc783ccdbc78c22f361b6": "6a90432fc91c343e4140c80ccaeb4905",
".git/objects/b3/9a432fa2c723557f702748d43756a45f0d3981": "99dccca73b685156138bcbd196b764bc",
".git/objects/b5/ab36a979f1217f500c60776a93dac977d86cfd": "eac621e118bf970016fe794f3ae0a97b",
".git/objects/b5/af92c3843d8a52624c7cdeed06bb20973a99f9": "86bdf95698c2ebe316fa7d68916dd83e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c5/0938c47e92f55df90b299cd61df7f3b75d41a8": "9a7ccb81a1bad12d9e0ba2f6c4d0c0bb",
".git/objects/c8/28b74175214c0dc71ac71a385d6261d2012c2c": "5b8300ef1ff0bb87202a552c442b000b",
".git/objects/c9/543458560f3095039fbd6a92726c0faf0dc438": "75474261660675106c81a9141d1e277b",
".git/objects/d3/a765a0b43331a6c88f8b24df0cfea22c8d3ec9": "73fc0311ad536cf030585eaef5009c5c",
".git/objects/d7/5aece88d2d63a8b8b999c349a14df9a3099c3a": "753828343629218655ed5d0f1268daae",
".git/objects/d9/0b3c0cb088bce8c93ed9de73f9983c3901fb8b": "d20259402886b3038e52f8a22dfa9fbe",
".git/objects/da/73789bba0e29794480c6166fa21d78ce33ccc1": "c3bc3fe2c19d5a75979b3bfb43a2003e",
".git/objects/dd/bd1ef43500bd4512b98823c4e58d208e4185b7": "2be56abc04500e6cae2cd8d5585581d3",
".git/objects/e1/a8244f308133c16f67a3113b396f2ba84873dc": "8f2dec63fa7fad905b84b3c56bc2ccf9",
".git/objects/e3/a7fbb0cfdffbad27af9710d42b96e3e6533962": "70bb7db6e327587f949013f7ff1c5815",
".git/objects/e4/75ed337931c52c439fc9c78c473f5cb53223ee": "31a8a12c6eee4fc4b934fbb92e012cac",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/42c2e07220ed67b5f2890a12848d4f7f9e9849": "b07002351cd51b43bf688722ad0f8531",
".git/objects/eb/1d3cae5e20b4a41d039251a74437954a13cac9": "bb87042569c4f2ce7715061a6cb1b9df",
".git/objects/eb/90f06b652c7ebdae409c41f49830bf7adb737f": "d8e74a79a90f1c1af9acec2ca8ffa5f3",
".git/objects/f5/4fb605b152dac2e3982b95f53c8765e968ed60": "318e1abdf15f5e388242d5527105cc9f",
".git/objects/f5/6b29ff29cd0ac780e1420b17762464d83119f7": "51fd641dee99c85c7249729c313361d7",
".git/objects/fc/60b419f8b08e36f847e68b0ef62aeb30eb9029": "024923818a7faa067bd79c3195c2d13c",
".git/objects/fd/703d1f36b3ab7ec34deeb0dcf04e867db75265": "2bf9e456605aa1d76e5f42ef8aadcdae",
".git/objects/fe/ce45ece7f5ebb4671d19996058cf02ecd2d476": "12b98f6a529758d774cf8e6943297c0d",
".git/refs/heads/main": "01823366bd90ca39ba62b4e2033ef016",
".git/refs/remotes/origin/main": "01823366bd90ca39ba62b4e2033ef016",
"assets/AssetManifest.json": "d0d59bab0e70fbe25fc3e0fd9b3403a7",
"assets/assets/icons/chat.svg": "6603c9da23d55c3ab75cf052cf2e5b53",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/icons/excle_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/assets/icons/facebook.svg": "e44d4dd6594e6ae6718a89059f29cdc7",
"assets/assets/icons/Figma_file.svg": "0ae328b79325e7615054aed3147c81f9",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/google-plus.svg": "3f71987b1e86c1f980e19a685acd040c",
"assets/assets/icons/google_drive.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"assets/assets/icons/login.svg": "a7711b1f104c98c8ae18420653074837",
"assets/assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"assets/assets/icons/menu_dashbord.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/one_drive.svg": "aa908c0a29eb795606799385cdfc8592",
"assets/assets/icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/icons/signup.svg": "2fa408c0387578db0675dc11edc3e0fa",
"assets/assets/icons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/assets/icons/twitter.svg": "7e145c9eb60da95379f070be9920eca5",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/assets/images/login_bottom.png": "b473d9b1b30607e274348f114273a094",
"assets/assets/images/logo.png": "5315be9d0a7602fb12a0ad4c2e3006e9",
"assets/assets/images/main_bottom.png": "322c8b4cda43fe21e0d78a1f30f387ce",
"assets/assets/images/main_top.png": "cd3220e276bb9dee0a1c7d18126aad72",
"assets/assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/assets/images/risetime_logo.png": "f29111550961074788b96eb97d93d43f",
"assets/assets/images/signup_top.png": "6eaad7a7b0febd05500366722015bd6d",
"assets/assets/translations/en-US.json": "6713de4793ed72c0070516fe29f8ffd2",
"assets/assets/translations/tr-TR.json": "05f11850fdc2b0684898b060804ca603",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "36fffe84204a6655ee9b8bc0a9607810",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "22a5e81ec5592774cf347c179983e53f",
"/": "22a5e81ec5592774cf347c179983e53f",
"main.dart.js": "a39b6661960e3966e9ec2802e8623cb8",
"manifest.json": "2970feafc9f454f1c1d60d2613d14614",
"version.json": "ee6c485fba636f53520ddf9779070d12"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
