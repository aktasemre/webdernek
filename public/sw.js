if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),b={module:{uri:n},exports:t,require:r};s[n]=Promise.all(i.map((e=>b[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Y352iLvMlMWHNiWhbkSrz/_buildManifest.js",revision:"0ea7e7088aabf697ba3d8aa8c7b54a89"},{url:"/_next/static/Y352iLvMlMWHNiWhbkSrz/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/2972-f76b45cc00a7c1a4.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/5878-3158cb5f36f24de9.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/6997-715488897eff250b.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/9081a741-0618bc1f220672ff.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/_not-found/page-c61c6e4f3a78fc6a.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/about/bank-accounts/page-4af121600efbe6c8.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/about/blood-bank/page-f85b696962492890.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/about/board/page-1008927d281e5a5b.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/about/founders/page-85dfe39679c32f59.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/about/history/page-31b75d8203a95d27.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/about/members/page-848ef18214abd443.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/about/statute/page-2781a24bd1e67d5d.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/about/supervisory/page-939f9c09848439e8.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/about/village/economy/page-a74046e6563b38f4.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/about/village/education/page-8d6ce646b8f77112.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/about/village/geography/page-8d0cb9e65b7ac599.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/about/village/history/page-eb97df8df1c40ef7.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/about/village/page-7060c29888242b9d.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/about/village/places/page-aa53f13504f5b805.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/about/village/population/page-f830657e16ce8e12.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/about/writers/page-5a2ec700b88456af.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/announcements/page-d7b71945ba5b08ef.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/auth/page-c9d26818b80fcb47.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/contact/layout-674e9e19d14db66f.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/contact/page-058b7e9065e28b79.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/culture/curses/page-6b6cd01d7140f987.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/culture/page-cc5c7d4a1b3c2d64.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/culture/proverbs/page-fa74bbdfec925076.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/culture/words/page-12e68414040ee728.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/donate/page-b7faa4a77c6349bf.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/events/page-677e494f50ead7f5.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/gallery/page-8c0ba50bcb56c9e6.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/gallery/photos/page-c56e417f9c377f24.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/layout-8069b70f4a00ec47.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/news/%5Bid%5D/page-4be7f680d98bba48.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/news/layout-d7fc6a8189f57656.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/news/page-2bc43f2ad403e4de.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/page-22b17e87c7a52391.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/projects/%5Bid%5D/page-a5bb573f30a35a92.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/projects/page-261e1adbeeba43b9.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/search/page-ff9410a528a2521b.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/statistics/page-4555c8cd4310e466.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/test/page-8cc3fa9d72a6aee3.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/village-guide/page-d5d07104b8c1167f.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/app/village/about-district/page-2d60066370841d2f.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/fd9d1056-f22372ea8fcedcd8.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/framework-a63c59c368572696.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/main-789d5f291e629aa2.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/main-app-f1a45d0da3214d12.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/pages/_app-78ddf957b9a9b996.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/pages/_error-7ce03bcf1df914ce.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-ebdbf92009ece64e.js",revision:"Y352iLvMlMWHNiWhbkSrz"},{url:"/_next/static/css/0befa3b2df9850d1.css",revision:"0befa3b2df9850d1"},{url:"/_next/static/css/14b14a6aef2e7c57.css",revision:"14b14a6aef2e7c57"},{url:"/_next/static/css/1a66b784ab5f34c2.css",revision:"1a66b784ab5f34c2"},{url:"/_next/static/css/43ac8565519e5cd3.css",revision:"43ac8565519e5cd3"},{url:"/_next/static/css/4560dfca6877fe87.css",revision:"4560dfca6877fe87"},{url:"/_next/static/css/504c9ed05a4ac77d.css",revision:"504c9ed05a4ac77d"},{url:"/_next/static/css/60125a1b00bddab7.css",revision:"60125a1b00bddab7"},{url:"/_next/static/css/7091e00fa537f002.css",revision:"7091e00fa537f002"},{url:"/_next/static/css/86253d4527927ad0.css",revision:"86253d4527927ad0"},{url:"/_next/static/css/993f2dd41b69ecc0.css",revision:"993f2dd41b69ecc0"},{url:"/_next/static/css/9f380e3091b74ff4.css",revision:"9f380e3091b74ff4"},{url:"/_next/static/css/a6fc127f5cd3b384.css",revision:"a6fc127f5cd3b384"},{url:"/_next/static/css/adc27e0dc69c0bf6.css",revision:"adc27e0dc69c0bf6"},{url:"/_next/static/css/b5637577d95a5d95.css",revision:"b5637577d95a5d95"},{url:"/_next/static/css/b5be106e7704440a.css",revision:"b5be106e7704440a"},{url:"/_next/static/css/bc9b247975512eb8.css",revision:"bc9b247975512eb8"},{url:"/_next/static/css/c7e3923bcba23141.css",revision:"c7e3923bcba23141"},{url:"/_next/static/css/cc78d17bbb9fdb3c.css",revision:"cc78d17bbb9fdb3c"},{url:"/_next/static/css/d2ad6973d92895f5.css",revision:"d2ad6973d92895f5"},{url:"/_next/static/css/d3085b1a25dd308e.css",revision:"d3085b1a25dd308e"},{url:"/_next/static/css/d5a94a42ab07bd6a.css",revision:"d5a94a42ab07bd6a"},{url:"/_next/static/css/d64c4b1c4670f785.css",revision:"d64c4b1c4670f785"},{url:"/_next/static/css/dcf1b4a3e33f59ba.css",revision:"dcf1b4a3e33f59ba"},{url:"/_next/static/css/dd628a5327fc5dbb.css",revision:"dd628a5327fc5dbb"},{url:"/_next/static/css/e23d23453c991be7.css",revision:"e23d23453c991be7"},{url:"/_next/static/css/e51a40203cfda2cf.css",revision:"e51a40203cfda2cf"},{url:"/_next/static/css/eb8c5b6a318148c7.css",revision:"eb8c5b6a318148c7"},{url:"/_next/static/css/fd493a8f6545d1d5.css",revision:"fd493a8f6545d1d5"},{url:"/documents/tuzuk.pdf",revision:"08806e25bd5daf59d55ed4fe7c80701a"},{url:"/favicon.ico",revision:"aaefbc877ea3869293e8651efd0f2934"},{url:"/icons/icon-192.png",revision:"aaefbc877ea3869293e8651efd0f2934"},{url:"/icons/icon-512.png",revision:"aaefbc877ea3869293e8651efd0f2934"},{url:"/images/arslandede-intro.jpg",revision:"1f4afc93fc0848bf69dee98a3d3c6213"},{url:"/images/arslandede1.jpg",revision:"17aa775fb90ac901735a0c8b52931d5b"},{url:"/images/arslandede2.jpg",revision:"dda889d6083db7bee95e9029715ddf27"},{url:"/images/arslandede3.jpg",revision:"76356770129b8fd699a39afc902afde6"},{url:"/images/arslandede4.jpg",revision:"a7c7b19a85cd1b3734431eb0bd76f841"},{url:"/images/arslandede5.jpg",revision:"8e52211eefbeb2618c5d91c4b33ac536"},{url:"/images/cami1.jpg",revision:"8e30b734e989d4b15a9086aea03f3645"},{url:"/images/dernek_yonetim/Fatih_Kurtoglu.jpg",revision:"666adb2491c2a80061e618827317d7ce"},{url:"/images/dernek_yonetim/abdullah_kurtoglu.jpg",revision:"3ea21c68978a789d5eae66a288afa4f4"},{url:"/images/dernek_yonetim/emre_aktas.jpg",revision:"5dce64fb663ce2634d041d19b543bbe9"},{url:"/images/kis1.jpg",revision:"4b1c868a24e45bf5679f023a3c03b114"},{url:"/images/kis2.jpg",revision:"7ea30ca22588460163338e41ea5eb0e0"},{url:"/images/kis3.jpg",revision:"e9060d556a1855d0381852963d0f16f7"},{url:"/images/kis4.jpg",revision:"baf13d2c91a9545e8d493ad051b80e34"},{url:"/images/kis5.jpg",revision:"b51dc3c747c4d1d0d3cb04ea66500c1c"},{url:"/images/kis6.jpg",revision:"3f3a823ae2e3ad1a0692f8f114ea7181"},{url:"/images/koy1.jpg",revision:"dda889d6083db7bee95e9029715ddf27"},{url:"/images/koy2.jpg",revision:"a7c7b19a85cd1b3734431eb0bd76f841"},{url:"/images/koy3.jpg",revision:"5823431903da1513b1091f23c5638eae"},{url:"/images/logo.jpg",revision:"200e7737174c4b8ed00f0e8219e00ff0"},{url:"/images/manza2.jpg",revision:"63f50f8ba61da973565d3d899ac1a4ec"},{url:"/images/manzara1 - Kopya.jpg",revision:"17aa775fb90ac901735a0c8b52931d5b"},{url:"/images/manzara1.jpg",revision:"17aa775fb90ac901735a0c8b52931d5b"},{url:"/images/manzara3.jpg",revision:"95a8988cc2b8b3c2d4009e5ee610e3ec"},{url:"/images/manzara4.jpg",revision:"8616efc3d5e7d864b3e27b0d02c32d13"},{url:"/images/manzara6.jpg",revision:"df2dba792c78c4b1664415d8b8b4e67f"},{url:"/images/manzara8.jpg",revision:"8225732d52818926e69eaa938f74e655"},{url:"/images/manzaraa5.jpg",revision:"e3ebc6a0b25134c5a0fa4799eb471083"},{url:"/manifest.json",revision:"80f81b525c9e9256f78f9b18b2a68b6f"},{url:"/offline.html",revision:"41c3aaabd8e491ad19f1bf3f14c6f28c"},{url:"/robots.txt",revision:"c354ef23c8f7df5ad4a7a1662c83edcd"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
