if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-a1945487"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/2117-30156f88f7a8d1a5.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/2972-f76b45cc00a7c1a4.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/5878-3158cb5f36f24de9.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/9081a741-b8ff4a1bfcd3a044.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/_not-found/page-c9d291280d1669e5.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/about/bank-accounts/page-f06f6432d2cd0a5b.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/about/blood-bank/page-33e2451ee10cded4.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/about/board/page-1ac3fd295f327a83.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/about/founders/page-c0ac1be682dbb510.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/about/history/page-65071f4adf7354a4.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/about/members/page-80308f758194ed95.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/about/statute/page-f218bcfc82903c86.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/about/supervisory/page-09c82f7a892d7785.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/about/village/economy/page-06b8983e123f4930.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/about/village/education/page-44ce0d63d8adf8b1.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/about/village/geography/page-14e999c42c11c547.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/about/village/history/page-c762ce03de874403.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/about/village/page-fa0427eb4d233480.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/about/village/places/page-0216910e93d0883c.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/about/village/population/page-4bd20b9477a014fa.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/about/writers/page-ee072ef42310bd60.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/announcements/page-4f02d58160398cd3.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/auth/page-40c1afe293d51b0a.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/contact/layout-53dd7946f63c84fc.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/contact/page-bc3b397ad0f3d7f6.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/culture/curses/page-cd826fa86c8d9235.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/culture/page-4ebe5421ad3eaa1c.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/culture/proverbs/page-ff899397c2cc533f.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/culture/words/page-ad879524a6f22504.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/donate/page-6453257f291d619b.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/events/page-c46f0721b4f82558.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/gallery/page-359d1e54bd2eb15c.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/gallery/photos/page-1054eb5671b49c13.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/layout-a25ba502e0ceadf5.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/news/%5Bid%5D/page-2e2965706a12a284.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/news/layout-9c6470ace87d7931.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/news/page-3c13bf1a4b29e82e.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/page-bfb5d300347cbc93.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/projects/%5Bid%5D/page-604e3feb7142f956.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/projects/page-c0143505721cde94.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/search/page-e036389bda8541cc.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/statistics/page-bb603bea175d5ed0.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/test/page-659c4b9c906916b3.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/village-guide/page-f99365b0e7eb010e.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/app/village/about-district/page-4b477807413c642d.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/fd9d1056-f22372ea8fcedcd8.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/framework-a63c59c368572696.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/main-app-b795a3b11fe6742c.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/main-bdf444e916545f80.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/pages/_app-78ddf957b9a9b996.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/pages/_error-7ce03bcf1df914ce.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-4cebf195636317da.js",revision:"HoCnMA6nvt8_wWJFs2R8h"},{url:"/_next/static/css/0befa3b2df9850d1.css",revision:"0befa3b2df9850d1"},{url:"/_next/static/css/14b14a6aef2e7c57.css",revision:"14b14a6aef2e7c57"},{url:"/_next/static/css/1a66b784ab5f34c2.css",revision:"1a66b784ab5f34c2"},{url:"/_next/static/css/43ac8565519e5cd3.css",revision:"43ac8565519e5cd3"},{url:"/_next/static/css/44be66d4c8a2eaea.css",revision:"44be66d4c8a2eaea"},{url:"/_next/static/css/44d91c9f164ec51a.css",revision:"44d91c9f164ec51a"},{url:"/_next/static/css/4560dfca6877fe87.css",revision:"4560dfca6877fe87"},{url:"/_next/static/css/60125a1b00bddab7.css",revision:"60125a1b00bddab7"},{url:"/_next/static/css/7091e00fa537f002.css",revision:"7091e00fa537f002"},{url:"/_next/static/css/86253d4527927ad0.css",revision:"86253d4527927ad0"},{url:"/_next/static/css/993f2dd41b69ecc0.css",revision:"993f2dd41b69ecc0"},{url:"/_next/static/css/9f380e3091b74ff4.css",revision:"9f380e3091b74ff4"},{url:"/_next/static/css/a6fc127f5cd3b384.css",revision:"a6fc127f5cd3b384"},{url:"/_next/static/css/adc27e0dc69c0bf6.css",revision:"adc27e0dc69c0bf6"},{url:"/_next/static/css/b5637577d95a5d95.css",revision:"b5637577d95a5d95"},{url:"/_next/static/css/b5be106e7704440a.css",revision:"b5be106e7704440a"},{url:"/_next/static/css/bc9b247975512eb8.css",revision:"bc9b247975512eb8"},{url:"/_next/static/css/c7e3923bcba23141.css",revision:"c7e3923bcba23141"},{url:"/_next/static/css/cc78d17bbb9fdb3c.css",revision:"cc78d17bbb9fdb3c"},{url:"/_next/static/css/d2ad6973d92895f5.css",revision:"d2ad6973d92895f5"},{url:"/_next/static/css/d3085b1a25dd308e.css",revision:"d3085b1a25dd308e"},{url:"/_next/static/css/d5a94a42ab07bd6a.css",revision:"d5a94a42ab07bd6a"},{url:"/_next/static/css/dcf1b4a3e33f59ba.css",revision:"dcf1b4a3e33f59ba"},{url:"/_next/static/css/dd628a5327fc5dbb.css",revision:"dd628a5327fc5dbb"},{url:"/_next/static/css/e23d23453c991be7.css",revision:"e23d23453c991be7"},{url:"/_next/static/css/e51a40203cfda2cf.css",revision:"e51a40203cfda2cf"},{url:"/_next/static/css/eb8c5b6a318148c7.css",revision:"eb8c5b6a318148c7"},{url:"/_next/static/css/fd493a8f6545d1d5.css",revision:"fd493a8f6545d1d5"},{url:"/documents/tuzuk.pdf",revision:"08806e25bd5daf59d55ed4fe7c80701a"},{url:"/favicon.ico",revision:"aaefbc877ea3869293e8651efd0f2934"},{url:"/icons/icon-192.png",revision:"aaefbc877ea3869293e8651efd0f2934"},{url:"/icons/icon-512.png",revision:"aaefbc877ea3869293e8651efd0f2934"},{url:"/images/arslandede-intro.jpg",revision:"1f4afc93fc0848bf69dee98a3d3c6213"},{url:"/images/arslandede1.jpg",revision:"17aa775fb90ac901735a0c8b52931d5b"},{url:"/images/arslandede2.jpg",revision:"dda889d6083db7bee95e9029715ddf27"},{url:"/images/arslandede3.jpg",revision:"76356770129b8fd699a39afc902afde6"},{url:"/images/arslandede4.jpg",revision:"a7c7b19a85cd1b3734431eb0bd76f841"},{url:"/images/arslandede5.jpg",revision:"8e52211eefbeb2618c5d91c4b33ac536"},{url:"/images/bagis_kampanya/agaclandirma.jpg",revision:"f49fdb1221d76e6f9cf96d490d7cdb98"},{url:"/images/bagis_kampanya/egitim.jpg",revision:"0d18ff2b31235dac94c3a7089443cd9b"},{url:"/images/bagis_kampanya/kumanya.jpg",revision:"e09804995e2ed3b92fc896facf46a6f0"},{url:"/images/cami1.jpg",revision:"8e30b734e989d4b15a9086aea03f3645"},{url:"/images/dernek_yonetim/Fatih_Kurtoglu.jpg",revision:"666adb2491c2a80061e618827317d7ce"},{url:"/images/dernek_yonetim/abdullah_kurtoglu.jpg",revision:"3ea21c68978a789d5eae66a288afa4f4"},{url:"/images/dernek_yonetim/emre_aktas.jpg",revision:"5dce64fb663ce2634d041d19b543bbe9"},{url:"/images/kis1.jpg",revision:"4b1c868a24e45bf5679f023a3c03b114"},{url:"/images/kis2.jpg",revision:"7ea30ca22588460163338e41ea5eb0e0"},{url:"/images/kis3.jpg",revision:"e9060d556a1855d0381852963d0f16f7"},{url:"/images/kis4.jpg",revision:"baf13d2c91a9545e8d493ad051b80e34"},{url:"/images/kis5.jpg",revision:"b51dc3c747c4d1d0d3cb04ea66500c1c"},{url:"/images/kis6.jpg",revision:"3f3a823ae2e3ad1a0692f8f114ea7181"},{url:"/images/koy1.jpg",revision:"dda889d6083db7bee95e9029715ddf27"},{url:"/images/koy2.jpg",revision:"a7c7b19a85cd1b3734431eb0bd76f841"},{url:"/images/koy3.jpg",revision:"5823431903da1513b1091f23c5638eae"},{url:"/images/logo.jpg",revision:"200e7737174c4b8ed00f0e8219e00ff0"},{url:"/images/manza2.jpg",revision:"63f50f8ba61da973565d3d899ac1a4ec"},{url:"/images/manzara1 - Kopya.jpg",revision:"17aa775fb90ac901735a0c8b52931d5b"},{url:"/images/manzara1.jpg",revision:"17aa775fb90ac901735a0c8b52931d5b"},{url:"/images/manzara3.jpg",revision:"95a8988cc2b8b3c2d4009e5ee610e3ec"},{url:"/images/manzara4.jpg",revision:"8616efc3d5e7d864b3e27b0d02c32d13"},{url:"/images/manzara6.jpg",revision:"df2dba792c78c4b1664415d8b8b4e67f"},{url:"/images/manzara8.jpg",revision:"8225732d52818926e69eaa938f74e655"},{url:"/images/manzaraa5.jpg",revision:"e3ebc6a0b25134c5a0fa4799eb471083"},{url:"/images/news/agaclandirma.webp",revision:"e3ebf5efed8f9e2d53643ca5c2894677"},{url:"/images/news/altyapi.webp",revision:"3e8ef67a160bea9301718cf7478167aa"},{url:"/images/news/genclerevent.webp",revision:"65a77e18e4aba11093671e2fef152bd1"},{url:"/images/news/piknik-soru.webp",revision:"f96903433d3ddd7eeecf53dd2a48ab64"},{url:"/images/news/piknik.webp",revision:"d86a071fbaa14cbbf967f93656449970"},{url:"/images/news/sukacagi.webp",revision:"c56810ecfdab40e95be556aaccb4e170"},{url:"/images/news/tarla.webp",revision:"8760c4090c5e39f0e1dc946bca22dc04"},{url:"/images/news/website-launch.png",revision:"2f362a507970c4ff8dbfae21a630a8a7"},{url:"/images/news/website-launch.webp",revision:"43b1481019f0829c4f955e9010189026"},{url:"/images/news/yonetim.webp",revision:"6f54f939d6e003e87c98dc5ebc0778c5"},{url:"/manifest.json",revision:"14f27b81c9ef85981fbe8c557dd8d2c0"},{url:"/offline.html",revision:"41c3aaabd8e491ad19f1bf3f14c6f28c"},{url:"/robots.txt",revision:"c354ef23c8f7df5ad4a7a1662c83edcd"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https?.*/,new e.NetworkFirst({cacheName:"https-calls",networkTimeoutSeconds:15,plugins:[new e.ExpirationPlugin({maxEntries:150,maxAgeSeconds:2592e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
