if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),d={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/AboutUs/AboutUsImg.png",revision:"bb85f99c546748b5ddaa765f2abd28bb"},{url:"/AboutUs/BautiImg.png",revision:"5f8a8d7ebc99701d762487c393381e87"},{url:"/AboutUs/BautyImg.png",revision:"bebcf112a351fd8dcd41355b5c762665"},{url:"/AboutUs/EnzoImg.png",revision:"f274fc667b4acb45b90f865adddfbc6f"},{url:"/AboutUs/FrancoImg.png",revision:"4fdfc26cbe0382737510a064b81e9ec9"},{url:"/AboutUs/LinkedinLogo.png",revision:"1d5c8cc8d948e08084773545918140e8"},{url:"/AboutUs/TopAbout.png",revision:"6050fb30111f9151abf7fbf77f585749"},{url:"/Carousel/Carousel1.png",revision:"0386f5f2b4bc031124c2d84bb7a18f66"},{url:"/Carousel/Carousel2.png",revision:"90018319b42a66cd9e5669ff19ecde97"},{url:"/Carousel/Carousel3.png",revision:"9b889c8ce43805622dfd89450dc45250"},{url:"/Carousel/Carousel4.png",revision:"ca08678029403c4b1355d99f45af36f5"},{url:"/Carousel/Carousel5.png",revision:"9d92880160ce5b8039bbc3fbcd76598e"},{url:"/ContactUs/ContactImg.png",revision:"8775ed98e6c7974f8c205dc52fe02edb"},{url:"/General/Logo.ico",revision:"841439dfdf828853b1e751f2894eb84c"},{url:"/General/Logo.png",revision:"7b045ff4a025814d89c28612c4676ffd"},{url:"/General/LogoGoogle.png",revision:"6ece6123e79ec081168f4e0b12166daa"},{url:"/Landing/DiscordLanding.png",revision:"2375e61c6f9459d7d85cbb35754732d7"},{url:"/Landing/FaceBookLanding.png",revision:"ff5a949c4f595dd63a7be4d3354a3205"},{url:"/Landing/HombreNubeTanto.png",revision:"b2511368322596f9948e158852ac30c8"},{url:"/Landing/Impresora.png",revision:"00a477d7b21a5299d291c8015ffb332f"},{url:"/Landing/InstagramLanding.png",revision:"5db5371f443c863010948aa5617b190c"},{url:"/Landing/Objetivo.png",revision:"c6edbaa644388093f9e886d7d43235ea"},{url:"/Landing/Proveedores.png",revision:"7d02d9fa34ef7b0d8cacd4effd00c83f"},{url:"/Landing/PuntodeImpresion.png",revision:"7f22298de40cd65d59a303abd12cec84"},{url:"/Landing/Servicio.png",revision:"434bfd0c04393080bf4bede6c342d599"},{url:"/Landing/TopLanding.png",revision:"a5e3b4c7de70d2f6488a2e1c8b461afd"},{url:"/Landing/TusNecesidades.png",revision:"c8c4b2d4812128243c7529eaa2d4dd08"},{url:"/Landing/UsoPrintItBlack.png",revision:"02bfe4609360df0348e3e8c8db41a0b4"},{url:"/Landing/UsoPrintItWhite.png",revision:"ebd083fe8de69cb5a129cbe3b9203dc1"},{url:"/LogoWhite.png",revision:"4b8c5a37f9e6aef0f052cd94fea1228b"},{url:"/PWA/LogoPWA.png",revision:"bbe3ddcd3bbddfd5262de05972feb6d3"},{url:"/PWA/MaskableLogoPWA.png",revision:"beecc7979afe979361e4b5f78971b40e"},{url:"/RecoverPassword/Recover.png",revision:"2f0e3ac6a6ed92c1007b452fdb134d7a"},{url:"/RecoverPassword/Recover_Token.png",revision:"ed6664125d2ca80527633e17eb5698e8"},{url:"/STLViewer/matcap-porcelain-white.jpg",revision:"1b992319e2d525cb67d6637996663716"},{url:"/UserAuth/SignIn.png",revision:"89241f6e5c4d96689abf96620b527625"},{url:"/UserAuth/SignUp.png",revision:"b570ddcd56567884419b3106900b0402"},{url:"/_next/static/G98dmmgyau2Uk_vqDTxgN/_buildManifest.js",revision:"436579d6396fbaca918773d6ed992c9e"},{url:"/_next/static/G98dmmgyau2Uk_vqDTxgN/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/11e07bb4.e21e200f90e93a2f.js",revision:"e21e200f90e93a2f"},{url:"/_next/static/chunks/182-c10d6db5cc08cc9c.js",revision:"c10d6db5cc08cc9c"},{url:"/_next/static/chunks/237-03b2c0e16dedf2ed.js",revision:"03b2c0e16dedf2ed"},{url:"/_next/static/chunks/2577d2cc-c31b1ecd0d8b7e6a.js",revision:"c31b1ecd0d8b7e6a"},{url:"/_next/static/chunks/35-a7d2e9c93c991115.js",revision:"a7d2e9c93c991115"},{url:"/_next/static/chunks/530-adcf0d312f80774d.js",revision:"adcf0d312f80774d"},{url:"/_next/static/chunks/586-7126ad5ce7568b59.js",revision:"7126ad5ce7568b59"},{url:"/_next/static/chunks/588-7b43f4b672bbeff3.js",revision:"7b43f4b672bbeff3"},{url:"/_next/static/chunks/610-b3e85c3d99e96802.js",revision:"b3e85c3d99e96802"},{url:"/_next/static/chunks/647-913011c189ba7f51.js",revision:"913011c189ba7f51"},{url:"/_next/static/chunks/68-75e01af229d488bc.js",revision:"75e01af229d488bc"},{url:"/_next/static/chunks/785-df0220dc5019d3a1.js",revision:"df0220dc5019d3a1"},{url:"/_next/static/chunks/857.91da0949c2900a73.js",revision:"91da0949c2900a73"},{url:"/_next/static/chunks/891-62e92cae63fbafa3.js",revision:"62e92cae63fbafa3"},{url:"/_next/static/chunks/917-b67582aaaa4dbcaf.js",revision:"b67582aaaa4dbcaf"},{url:"/_next/static/chunks/983-96fbffa6a79d8b85.js",revision:"96fbffa6a79d8b85"},{url:"/_next/static/chunks/fb7d5399-8e69b852f2ee72d8.js",revision:"8e69b852f2ee72d8"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-c2499a390161ab5c.js",revision:"c2499a390161ab5c"},{url:"/_next/static/chunks/pages/_app-26cb373f47ca07a8.js",revision:"26cb373f47ca07a8"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/about-3755639cf6a4d5c9.js",revision:"3755639cf6a4d5c9"},{url:"/_next/static/chunks/pages/contact-us-74879daad7dfaf32.js",revision:"74879daad7dfaf32"},{url:"/_next/static/chunks/pages/dashboard-96f866db06a0373e.js",revision:"96f866db06a0373e"},{url:"/_next/static/chunks/pages/dashboard/misImpresoras-772381b5a9881806.js",revision:"772381b5a9881806"},{url:"/_next/static/chunks/pages/dashboard/misPedidos-c60696b8eb331abf.js",revision:"c60696b8eb331abf"},{url:"/_next/static/chunks/pages/dashboard/misTrabajos-2b252bdfafec2d34.js",revision:"2b252bdfafec2d34"},{url:"/_next/static/chunks/pages/dashboard/subirArchivo-eb58f894f0c5f8c5.js",revision:"eb58f894f0c5f8c5"},{url:"/_next/static/chunks/pages/index-31d90e6e98293e23.js",revision:"31d90e6e98293e23"},{url:"/_next/static/chunks/pages/recoverPassword-4aa4548670b4b32e.js",revision:"4aa4548670b4b32e"},{url:"/_next/static/chunks/pages/recoverPassword/%5Btoken%5D-e79ca763426ed3ad.js",revision:"e79ca763426ed3ad"},{url:"/_next/static/chunks/pages/settings-39bcc52931a3a2a6.js",revision:"39bcc52931a3a2a6"},{url:"/_next/static/chunks/pages/signIn-1e3c1a0eadad57c2.js",revision:"1e3c1a0eadad57c2"},{url:"/_next/static/chunks/pages/signUp-c37738ab598a9c73.js",revision:"c37738ab598a9c73"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-e35574432331eed6.js",revision:"e35574432331eed6"},{url:"/_next/static/css/0b431db32f47bd88.css",revision:"0b431db32f47bd88"},{url:"/_next/static/css/79ca15ebbf46d021.css",revision:"79ca15ebbf46d021"},{url:"/_next/static/media/remixicon.81a0dd4a.woff2",revision:"81a0dd4a"},{url:"/_next/static/media/remixicon.87279a61.woff",revision:"87279a61"},{url:"/_next/static/media/remixicon.8ed2eb01.eot",revision:"8ed2eb01"},{url:"/_next/static/media/remixicon.d9d97fb2.ttf",revision:"d9d97fb2"},{url:"/manifest.json",revision:"872784f1fbd5ad0c608eea6bba2a1317"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
