/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a0709616202c166be8f8db7c827aa984"
  },
  {
    "url": "dist/esm/_rollupPluginBabelHelpers-ed8cbb08.js",
    "revision": "98841d0383596bb5de4892e516827e76"
  },
  {
    "url": "dist/esm/class-map-d74af20d.js",
    "revision": "7d7d1b050b7b8abb954c79fa78e52d89"
  },
  {
    "url": "dist/esm/configureStore.js",
    "revision": "0c14a7c6654bda9b826d680d0ef08dc8"
  },
  {
    "url": "dist/esm/connect-mixin-144a42a2.js",
    "revision": "32bacaeff0f1447cf3452131ef356995"
  },
  {
    "url": "dist/esm/creators.js",
    "revision": "7c0db263f5da6366a69f7951d92f00c5"
  },
  {
    "url": "dist/esm/DecrementButton.js",
    "revision": "8c2d105bc7b931e3bd6f8e9fcc12f3cc"
  },
  {
    "url": "dist/esm/dispatchers-19a19022.js",
    "revision": "a33fc2aa30d0ef5a6532c166a61ebf19"
  },
  {
    "url": "dist/esm/dispatchers.js",
    "revision": "e408f5747b1694ad33d965ec64482973"
  },
  {
    "url": "dist/esm/events.js",
    "revision": "ba000665a8a949f03d58d3579930d58a"
  },
  {
    "url": "dist/esm/form-element-300125b4.js",
    "revision": "da912443db028fe03020353b805be36a"
  },
  {
    "url": "dist/esm/IncrementButton.js",
    "revision": "513d596b8ab1fde21c9dc158b8059dfd"
  },
  {
    "url": "dist/esm/index-85299b5e.js",
    "revision": "ff0ea4ae38dd64c5491e84057c57fe42"
  },
  {
    "url": "dist/esm/index.js",
    "revision": "3feb8a26c0e63e6b6e96f119bcdecad7"
  },
  {
    "url": "dist/esm/index2.js",
    "revision": "2f058e49f128652fb6d9190059258917"
  },
  {
    "url": "dist/esm/index3.js",
    "revision": "51c157c8c9603cf0f66b670f7ffe51e2"
  },
  {
    "url": "dist/esm/initialState.js",
    "revision": "7de8767f8b06f43afda2d13ab376050f"
  },
  {
    "url": "dist/esm/iron-button-state-4dc51605.js",
    "revision": "52d49fcfdd6c7886d751136fac28b447"
  },
  {
    "url": "dist/esm/lit-element-51727a0b.js",
    "revision": "4afb5806204cf6679001b48bdb81404e"
  },
  {
    "url": "dist/esm/middleware.js",
    "revision": "38a4f40b4dca48c7a89300a65ba9c47d"
  },
  {
    "url": "dist/esm/mwc-button-e0830c8f.js",
    "revision": "6905ceb47d11328148f9a863ade71f58"
  },
  {
    "url": "dist/esm/mwc-dialog-3b5ca302.js",
    "revision": "82604a0edf2dec992b64419f5426dde4"
  },
  {
    "url": "dist/esm/mwc-slider-d35821e3.js",
    "revision": "f27729b5514b66b1104beeaea0c58c6d"
  },
  {
    "url": "dist/esm/mwc-snackbar-b8a221fd.js",
    "revision": "2771163e46d29f6accfcc3906f03781b"
  },
  {
    "url": "dist/esm/mwc-textfield-971dc8f3.js",
    "revision": "1e75a51b182cdae6e7237de6430456fa"
  },
  {
    "url": "dist/esm/tfjs-component-playground.js",
    "revision": "7f81c447cada95b1102919e4bca990cd"
  },
  {
    "url": "dist/esm/TFJSComponentPlayground.js",
    "revision": "a6ba274ec2b794a495c15d43d1517a50"
  },
  {
    "url": "dist/esm/TFJSComponentPlaygroundBouncer.js",
    "revision": "20960aaa30946e3c9b224393ceb23f23"
  },
  {
    "url": "dist/esm/TFJSComponentPlaygroundBranding.js",
    "revision": "74880fea214461a07b6f968a633ef95f"
  },
  {
    "url": "dist/esm/TFJSComponentPlaygroundContent.js",
    "revision": "3e4d57d61dd2f725b0ba300d2a2005e1"
  },
  {
    "url": "dist/esm/TFJSComponentPlaygroundCounter.js",
    "revision": "ad9f59bc5c11ab7d59a17fc648da4c8c"
  },
  {
    "url": "dist/esm/TFJSComponentPlaygroundDrawer.js",
    "revision": "f19e9091df15578f8a005a6a5d6f0b10"
  },
  {
    "url": "dist/esm/TFJSComponentPlaygroundHamburger.js",
    "revision": "f227a1dab10124eab54b3c9b8649b07a"
  },
  {
    "url": "dist/esm/TFJSComponentPlaygroundLandingNavigation.js",
    "revision": "1eb01b5dcf8851bdd4d81d532df0a87e"
  },
  {
    "url": "dist/esm/TFJSComponentPlaygroundLoading.js",
    "revision": "da9255545159586534f461a3d0556531"
  },
  {
    "url": "dist/esm/TFJSComponentPlaygroundNavigationSubtitle.js",
    "revision": "e0265522c269059c9eb2bd5183c9e35f"
  },
  {
    "url": "dist/esm/TFJSComponentPlaygroundRouting.js",
    "revision": "5cfa47ed3fa70594fef400ee8531a86f"
  },
  {
    "url": "dist/esm/TFJSComponentPlaygroundRoutingMethod.js",
    "revision": "8e7f5d3b738c23be1e5fa90d48ca2b2e"
  },
  {
    "url": "dist/esm/TFJSComponentPlaygroundRoutingType.js",
    "revision": "f55819de928e90aeea8b6ee56fadb933"
  },
  {
    "url": "dist/esm/TFJSComponentPlaygroundStore.js",
    "revision": "0c722b1df1688d0b18116f8a8bcee7ce"
  },
  {
    "url": "dist/esm/types.js",
    "revision": "83be9645f99d96f4deaa6f7a8de51a16"
  },
  {
    "url": "dist/esm/utilities.js",
    "revision": "1f30a14aa88bab6a9c2253334da53a92"
  },
  {
    "url": "dist/esm/value.js",
    "revision": "d1f9dbcf159a109f7193a1c6d791a971"
  },
  {
    "url": "dist/esm/XFaceDetector-fba98753.js",
    "revision": "dd2275c5a2d053ef34a8d7707867542a"
  },
  {
    "url": "dist/esm/XFaceDetectorNavigation.js",
    "revision": "64b741d474d395bd8b97416d2b2fc182"
  },
  {
    "url": "dist/esm/XFaceDetectorSequentialImageIds.js",
    "revision": "2bdb65a7bd2e64217e6c9ca212753e20"
  },
  {
    "url": "dist/esm/XFaceDetectorSingleImageUrl.js",
    "revision": "8348a0efb8a8c11e660fc86294f91a14"
  },
  {
    "url": "dist/esm/XFaceDetectorUserMediaVideo.js",
    "revision": "f5262a79017b5f533d1b75a9f7116a34"
  },
  {
    "url": "dist/esm/XImageClassifier-ac56385f.js",
    "revision": "ce8da19bc35a2056297be685899a4057"
  },
  {
    "url": "dist/esm/XImageClassifierNavigation.js",
    "revision": "0c16e4fe5e431810562b39056ac0dbbc"
  },
  {
    "url": "dist/esm/XImageClassifierSequentialImageIds.js",
    "revision": "b5a09422709ac53e52299accb666cf4e"
  },
  {
    "url": "dist/esm/XImageClassifierSingleImageUrl.js",
    "revision": "eec29c21c31e71928d975998726d422e"
  },
  {
    "url": "dist/esm/XImageClassifierUserMediaVideo.js",
    "revision": "4f6f0c0db724fd31e0591d08f1aa2e29"
  },
  {
    "url": "dist/esm/XObjectDetector-6b71cbce.js",
    "revision": "c1867eba7015c067149b3d178a18ce92"
  },
  {
    "url": "dist/esm/XObjectDetectorNavigation.js",
    "revision": "c2b92c94ec6ca26f00b2890c7bfacb6a"
  },
  {
    "url": "dist/esm/XObjectDetectorSequentialImageIds.js",
    "revision": "525847e736d56b94c0df91db79d5afe0"
  },
  {
    "url": "dist/esm/XObjectDetectorSingleImageUrl.js",
    "revision": "621017bea25db6244f523689081c5886"
  },
  {
    "url": "dist/esm/XObjectDetectorUserMediaVideo.js",
    "revision": "29e590865e53e27a301125002b77021c"
  },
  {
    "url": "favicon.ico",
    "revision": "8e95f1cb8b20c3c74e03e8788dcf2130"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "1541be46d0e48ddf14d4eaffdf2f2fa2"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "b3c4915043fbf42450a262a702a81dc9"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "737dbeeb265bff426a290c3e156b16a7"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "8b0639445ecc159db7848cec32fc1636"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "9843dc733a8bca96ebb41a6e330959e0"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "4b995869ae98ea520a369dad70a19e63"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "d4e01d5114f575aac7ab4ecf13794364"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "602f70018994896e1a4573e738ce1225"
  },
  {
    "url": "index.html",
    "revision": "197e02c124c0fa147b870cddffbfdf13"
  },
  {
    "url": "service-worker/registerServiceWorker.js",
    "revision": "2430ad6c9c7564564959df43b746fb26"
  },
  {
    "url": "service-worker/workbox-config.js",
    "revision": "e196bbcbdfdfbb53ac2a0c629216333a"
  },
  {
    "url": "theme.css",
    "revision": "3d79a5ce898f5a9fd63af8a9f3ad4927"
  },
  {
    "url": "/tfjs-component-playground/",
    "revision": "a3b2b40af1bbf6e681ccf0fdc10f0a0b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 100, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/.*$/, new workbox.strategies.CacheFirst({ "cacheName":"cdn-jsdeliver-net-cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/rawgit.com\/.*$/, new workbox.strategies.CacheFirst({ "cacheName":"rawgit-com-cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/unpkg.com\/.*$/, new workbox.strategies.CacheFirst({ "cacheName":"unpkg-com-cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
