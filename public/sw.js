if (!self.define) {
  let e,
    s = {};
  const n = (n, a) => (
    (n = new URL(n + ".js", a).href),
    s[n] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, i) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[c]) return;
    let t = {};
    const r = (e) => n(e, c),
      d = { module: { uri: c }, exports: t, require: r };
    s[c] = Promise.all(a.map((e) => d[e] || r(e))).then((e) => (i(...e), t));
  };
}
define(["./workbox-588899ac"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/AboutUsImg.png",
          revision: "bb85f99c546748b5ddaa765f2abd28bb",
        },
        { url: "/BautiImg.png", revision: "5f8a8d7ebc99701d762487c393381e87" },
        { url: "/BautyImg.png", revision: "bebcf112a351fd8dcd41355b5c762665" },
        { url: "/Carousel1.png", revision: "0386f5f2b4bc031124c2d84bb7a18f66" },
        { url: "/Carousel2.png", revision: "90018319b42a66cd9e5669ff19ecde97" },
        { url: "/Carousel3.png", revision: "9b889c8ce43805622dfd89450dc45250" },
        { url: "/Carousel4.png", revision: "ca08678029403c4b1355d99f45af36f5" },
        { url: "/Carousel5.png", revision: "9d92880160ce5b8039bbc3fbcd76598e" },
        {
          url: "/ContactImg.png",
          revision: "8775ed98e6c7974f8c205dc52fe02edb",
        },
        {
          url: "/DiscordLanding.png",
          revision: "2375e61c6f9459d7d85cbb35754732d7",
        },
        { url: "/EnzoImg.png", revision: "f274fc667b4acb45b90f865adddfbc6f" },
        {
          url: "/FaceBookLanding.png",
          revision: "ff5a949c4f595dd63a7be4d3354a3205",
        },
        { url: "/FrancoImg.png", revision: "4fdfc26cbe0382737510a064b81e9ec9" },
        {
          url: "/HombreNubeTanto.png",
          revision: "b2511368322596f9948e158852ac30c8",
        },
        { url: "/Impresora.png", revision: "00a477d7b21a5299d291c8015ffb332f" },
        {
          url: "/InstagramLanding.png",
          revision: "5db5371f443c863010948aa5617b190c",
        },
        {
          url: "/LinkedinLogo.png",
          revision: "1d5c8cc8d948e08084773545918140e8",
        },
        { url: "/Logo.ico", revision: "841439dfdf828853b1e751f2894eb84c" },
        { url: "/Logo.png", revision: "7b045ff4a025814d89c28612c4676ffd" },
        {
          url: "/LogoGoogle.png",
          revision: "6ece6123e79ec081168f4e0b12166daa",
        },
        { url: "/LogoPWA.png", revision: "bbe3ddcd3bbddfd5262de05972feb6d3" },
        { url: "/LogoWhite.png", revision: "4b8c5a37f9e6aef0f052cd94fea1228b" },
        {
          url: "/MaskableLogoPWA.png",
          revision: "beecc7979afe979361e4b5f78971b40e",
        },
        { url: "/Objetivo.png", revision: "c6edbaa644388093f9e886d7d43235ea" },
        {
          url: "/Proveedores.png",
          revision: "7d02d9fa34ef7b0d8cacd4effd00c83f",
        },
        {
          url: "/PuntodeImpresion.png",
          revision: "7f22298de40cd65d59a303abd12cec84",
        },
        { url: "/Recover.png", revision: "2f0e3ac6a6ed92c1007b452fdb134d7a" },
        {
          url: "/Recover_Token.png",
          revision: "ed6664125d2ca80527633e17eb5698e8",
        },
        { url: "/Servicio.png", revision: "434bfd0c04393080bf4bede6c342d599" },
        { url: "/SignIn.png", revision: "89241f6e5c4d96689abf96620b527625" },
        { url: "/SignUp.png", revision: "b570ddcd56567884419b3106900b0402" },
        { url: "/TopAbout.png", revision: "6050fb30111f9151abf7fbf77f585749" },
        {
          url: "/TopLanding.png",
          revision: "a5e3b4c7de70d2f6488a2e1c8b461afd",
        },
        {
          url: "/TusNecesidades.png",
          revision: "c8c4b2d4812128243c7529eaa2d4dd08",
        },
        {
          url: "/UsoPrintItBlack.png",
          revision: "02bfe4609360df0348e3e8c8db41a0b4",
        },
        {
          url: "/UsoPrintItWhite.png",
          revision: "ebd083fe8de69cb5a129cbe3b9203dc1",
        },
        {
          url: "/_next/static/50ekPBvnSTEobdJqI1f11/_buildManifest.js",
          revision: "a7d58d9c2dc8cd7b699e9a9462b89cb2",
        },
        {
          url: "/_next/static/50ekPBvnSTEobdJqI1f11/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/11e07bb4-e21e200f90e93a2f.js",
          revision: "e21e200f90e93a2f",
        },
        {
          url: "/_next/static/chunks/237-03b2c0e16dedf2ed.js",
          revision: "03b2c0e16dedf2ed",
        },
        {
          url: "/_next/static/chunks/2577d2cc-c31b1ecd0d8b7e6a.js",
          revision: "c31b1ecd0d8b7e6a",
        },
        {
          url: "/_next/static/chunks/35-a7d2e9c93c991115.js",
          revision: "a7d2e9c93c991115",
        },
        {
          url: "/_next/static/chunks/435-e15bd65a035feefe.js",
          revision: "e15bd65a035feefe",
        },
        {
          url: "/_next/static/chunks/501-f58d8af9d5b1a901.js",
          revision: "f58d8af9d5b1a901",
        },
        {
          url: "/_next/static/chunks/530-adcf0d312f80774d.js",
          revision: "adcf0d312f80774d",
        },
        {
          url: "/_next/static/chunks/586-7126ad5ce7568b59.js",
          revision: "7126ad5ce7568b59",
        },
        {
          url: "/_next/static/chunks/588-7b43f4b672bbeff3.js",
          revision: "7b43f4b672bbeff3",
        },
        {
          url: "/_next/static/chunks/785-df0220dc5019d3a1.js",
          revision: "df0220dc5019d3a1",
        },
        {
          url: "/_next/static/chunks/843-f680214ec4025397.js",
          revision: "f680214ec4025397",
        },
        {
          url: "/_next/static/chunks/891-62e92cae63fbafa3.js",
          revision: "62e92cae63fbafa3",
        },
        {
          url: "/_next/static/chunks/917-b67582aaaa4dbcaf.js",
          revision: "b67582aaaa4dbcaf",
        },
        {
          url: "/_next/static/chunks/983-d20b44f00e5ae000.js",
          revision: "d20b44f00e5ae000",
        },
        {
          url: "/_next/static/chunks/988-2d2442e9e645f58a.js",
          revision: "2d2442e9e645f58a",
        },
        {
          url: "/_next/static/chunks/fb7d5399-8e69b852f2ee72d8.js",
          revision: "8e69b852f2ee72d8",
        },
        {
          url: "/_next/static/chunks/framework-2c79e2a64abdb08b.js",
          revision: "2c79e2a64abdb08b",
        },
        {
          url: "/_next/static/chunks/main-09fcbd6b4e682398.js",
          revision: "09fcbd6b4e682398",
        },
        {
          url: "/_next/static/chunks/pages/_app-43b041bcfed0aced.js",
          revision: "43b041bcfed0aced",
        },
        {
          url: "/_next/static/chunks/pages/_error-54de1933a164a1ff.js",
          revision: "54de1933a164a1ff",
        },
        {
          url: "/_next/static/chunks/pages/about-6b57108d372a6388.js",
          revision: "6b57108d372a6388",
        },
        {
          url: "/_next/static/chunks/pages/contact-us-eba813dcf96ab0eb.js",
          revision: "eba813dcf96ab0eb",
        },
        {
          url: "/_next/static/chunks/pages/dashboard-010a2e849c934177.js",
          revision: "010a2e849c934177",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/misImpresoras-f8ca9c0751a4373c.js",
          revision: "f8ca9c0751a4373c",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/misPedidos-dfbb8eeaf4b29f52.js",
          revision: "dfbb8eeaf4b29f52",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/misTrabajos-85c720625fda13a6.js",
          revision: "85c720625fda13a6",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/subirArchivo-254b15d3dc3a814d.js",
          revision: "254b15d3dc3a814d",
        },
        {
          url: "/_next/static/chunks/pages/index-611b9aedf82599c0.js",
          revision: "611b9aedf82599c0",
        },
        {
          url: "/_next/static/chunks/pages/recoverPassword-4c8dc87673523485.js",
          revision: "4c8dc87673523485",
        },
        {
          url: "/_next/static/chunks/pages/recoverPassword/%5Btoken%5D-6c567a9d30660101.js",
          revision: "6c567a9d30660101",
        },
        {
          url: "/_next/static/chunks/pages/settings-8706b8ac12f9311f.js",
          revision: "8706b8ac12f9311f",
        },
        {
          url: "/_next/static/chunks/pages/signIn-f6c623eaa47f4175.js",
          revision: "f6c623eaa47f4175",
        },
        {
          url: "/_next/static/chunks/pages/signUp-adef955c53286097.js",
          revision: "adef955c53286097",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-880e48e2fc817058.js",
          revision: "880e48e2fc817058",
        },
        {
          url: "/_next/static/css/0b431db32f47bd88.css",
          revision: "0b431db32f47bd88",
        },
        {
          url: "/_next/static/css/e0e4f322849fe1bf.css",
          revision: "e0e4f322849fe1bf",
        },
        {
          url: "/_next/static/media/remixicon.81a0dd4a.woff2",
          revision: "81a0dd4a",
        },
        {
          url: "/_next/static/media/remixicon.87279a61.woff",
          revision: "87279a61",
        },
        {
          url: "/_next/static/media/remixicon.8ed2eb01.eot",
          revision: "8ed2eb01",
        },
        {
          url: "/_next/static/media/remixicon.d9d97fb2.ttf",
          revision: "d9d97fb2",
        },
        { url: "/manifest.json", revision: "b6198f85db92eaad52102fe943e5bcc0" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: a,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});

if (!self.define) {
  let e,
    s = {};
  const n = (n, a) => (
    (n = new URL(n + ".js", a).href),
    s[n] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, c) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    let t = {};
    const r = (e) => n(e, i),
      d = { module: { uri: i }, exports: t, require: r };
    s[i] = Promise.all(a.map((e) => d[e] || r(e))).then((e) => (c(...e), t));
  };
}
define(["./workbox-7c2a5a06"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/AboutUsImg.png",
          revision: "bb85f99c546748b5ddaa765f2abd28bb",
        },
        { url: "/BautiImg.png", revision: "5f8a8d7ebc99701d762487c393381e87" },
        { url: "/BautyImg.png", revision: "bebcf112a351fd8dcd41355b5c762665" },
        { url: "/Carousel1.png", revision: "0386f5f2b4bc031124c2d84bb7a18f66" },
        { url: "/Carousel2.png", revision: "90018319b42a66cd9e5669ff19ecde97" },
        { url: "/Carousel3.png", revision: "9b889c8ce43805622dfd89450dc45250" },
        { url: "/Carousel4.png", revision: "ca08678029403c4b1355d99f45af36f5" },
        { url: "/Carousel5.png", revision: "9d92880160ce5b8039bbc3fbcd76598e" },
        {
          url: "/ContactImg.png",
          revision: "8775ed98e6c7974f8c205dc52fe02edb",
        },
        {
          url: "/DiscordLanding.png",
          revision: "2375e61c6f9459d7d85cbb35754732d7",
        },
        { url: "/EnzoImg.png", revision: "f274fc667b4acb45b90f865adddfbc6f" },
        {
          url: "/FaceBookLanding.png",
          revision: "ff5a949c4f595dd63a7be4d3354a3205",
        },
        { url: "/FrancoImg.png", revision: "4fdfc26cbe0382737510a064b81e9ec9" },
        {
          url: "/HombreNubeTanto.png",
          revision: "b2511368322596f9948e158852ac30c8",
        },
        { url: "/Impresora.png", revision: "00a477d7b21a5299d291c8015ffb332f" },
        {
          url: "/InstagramLanding.png",
          revision: "5db5371f443c863010948aa5617b190c",
        },
        {
          url: "/LinkedinLogo.png",
          revision: "1d5c8cc8d948e08084773545918140e8",
        },
        { url: "/Logo.ico", revision: "841439dfdf828853b1e751f2894eb84c" },
        { url: "/Logo.png", revision: "7b045ff4a025814d89c28612c4676ffd" },
        {
          url: "/LogoGoogle.png",
          revision: "6ece6123e79ec081168f4e0b12166daa",
        },
        { url: "/LogoPWA.png", revision: "bbe3ddcd3bbddfd5262de05972feb6d3" },
        { url: "/LogoWhite.png", revision: "4b8c5a37f9e6aef0f052cd94fea1228b" },
        {
          url: "/MaskableLogoPWA.png",
          revision: "beecc7979afe979361e4b5f78971b40e",
        },
        { url: "/Objetivo.png", revision: "c6edbaa644388093f9e886d7d43235ea" },
        {
          url: "/Proveedores.png",
          revision: "7d02d9fa34ef7b0d8cacd4effd00c83f",
        },
        {
          url: "/PuntodeImpresion.png",
          revision: "7f22298de40cd65d59a303abd12cec84",
        },
        { url: "/Recover.png", revision: "2f0e3ac6a6ed92c1007b452fdb134d7a" },
        {
          url: "/Recover_Token.png",
          revision: "ed6664125d2ca80527633e17eb5698e8",
        },
        { url: "/Servicio.png", revision: "434bfd0c04393080bf4bede6c342d599" },
        { url: "/SignIn.png", revision: "89241f6e5c4d96689abf96620b527625" },
        { url: "/SignUp.png", revision: "b570ddcd56567884419b3106900b0402" },
        { url: "/TopAbout.png", revision: "6050fb30111f9151abf7fbf77f585749" },
        {
          url: "/TopLanding.png",
          revision: "a5e3b4c7de70d2f6488a2e1c8b461afd",
        },
        {
          url: "/TusNecesidades.png",
          revision: "c8c4b2d4812128243c7529eaa2d4dd08",
        },
        {
          url: "/UsoPrintItBlack.png",
          revision: "02bfe4609360df0348e3e8c8db41a0b4",
        },
        {
          url: "/UsoPrintItWhite.png",
          revision: "ebd083fe8de69cb5a129cbe3b9203dc1",
        },
        {
          url: "/_next/static/Cj0TaWJDTtxCNaxfeAR2p/_buildManifest.js",
          revision: "3a32b9da3be11d49f8e05e631bff454e",
        },
        {
          url: "/_next/static/Cj0TaWJDTtxCNaxfeAR2p/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/11e07bb4-e21e200f90e93a2f.js",
          revision: "e21e200f90e93a2f",
        },
        {
          url: "/_next/static/chunks/182-c10d6db5cc08cc9c.js",
          revision: "c10d6db5cc08cc9c",
        },
        {
          url: "/_next/static/chunks/237-03b2c0e16dedf2ed.js",
          revision: "03b2c0e16dedf2ed",
        },
        {
          url: "/_next/static/chunks/2577d2cc-c31b1ecd0d8b7e6a.js",
          revision: "c31b1ecd0d8b7e6a",
        },
        {
          url: "/_next/static/chunks/35-a7d2e9c93c991115.js",
          revision: "a7d2e9c93c991115",
        },
        {
          url: "/_next/static/chunks/530-adcf0d312f80774d.js",
          revision: "adcf0d312f80774d",
        },
        {
          url: "/_next/static/chunks/586-7126ad5ce7568b59.js",
          revision: "7126ad5ce7568b59",
        },
        {
          url: "/_next/static/chunks/588-7b43f4b672bbeff3.js",
          revision: "7b43f4b672bbeff3",
        },
        {
          url: "/_next/static/chunks/610-b3e85c3d99e96802.js",
          revision: "b3e85c3d99e96802",
        },
        {
          url: "/_next/static/chunks/647-913011c189ba7f51.js",
          revision: "913011c189ba7f51",
        },
        {
          url: "/_next/static/chunks/785-df0220dc5019d3a1.js",
          revision: "df0220dc5019d3a1",
        },
        {
          url: "/_next/static/chunks/891-62e92cae63fbafa3.js",
          revision: "62e92cae63fbafa3",
        },
        {
          url: "/_next/static/chunks/917-b67582aaaa4dbcaf.js",
          revision: "b67582aaaa4dbcaf",
        },
        {
          url: "/_next/static/chunks/983-37d89fcac70a3b82.js",
          revision: "37d89fcac70a3b82",
        },
        {
          url: "/_next/static/chunks/fb7d5399-8e69b852f2ee72d8.js",
          revision: "8e69b852f2ee72d8",
        },
        {
          url: "/_next/static/chunks/framework-2c79e2a64abdb08b.js",
          revision: "2c79e2a64abdb08b",
        },
        {
          url: "/_next/static/chunks/main-c2499a390161ab5c.js",
          revision: "c2499a390161ab5c",
        },
        {
          url: "/_next/static/chunks/pages/_app-26cb373f47ca07a8.js",
          revision: "26cb373f47ca07a8",
        },
        {
          url: "/_next/static/chunks/pages/_error-54de1933a164a1ff.js",
          revision: "54de1933a164a1ff",
        },
        {
          url: "/_next/static/chunks/pages/about-4af624553f455407.js",
          revision: "4af624553f455407",
        },
        {
          url: "/_next/static/chunks/pages/contact-us-5a61001b9f8edd04.js",
          revision: "5a61001b9f8edd04",
        },
        {
          url: "/_next/static/chunks/pages/dashboard-96f866db06a0373e.js",
          revision: "96f866db06a0373e",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/misImpresoras-081c046a464552bf.js",
          revision: "081c046a464552bf",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/misPedidos-0267a5c820a4c3fa.js",
          revision: "0267a5c820a4c3fa",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/misTrabajos-579e3327a22488e4.js",
          revision: "579e3327a22488e4",
        },
        {
          url: "/_next/static/chunks/pages/dashboard/subirArchivo-709c55d6947564ec.js",
          revision: "709c55d6947564ec",
        },
        {
          url: "/_next/static/chunks/pages/index-6e7f69ff08921939.js",
          revision: "6e7f69ff08921939",
        },
        {
          url: "/_next/static/chunks/pages/recoverPassword-4c8dc87673523485.js",
          revision: "4c8dc87673523485",
        },
        {
          url: "/_next/static/chunks/pages/recoverPassword/%5Btoken%5D-6c567a9d30660101.js",
          revision: "6c567a9d30660101",
        },
        {
          url: "/_next/static/chunks/pages/settings-128c7f476ffc7df3.js",
          revision: "128c7f476ffc7df3",
        },
        {
          url: "/_next/static/chunks/pages/signIn-f6c623eaa47f4175.js",
          revision: "f6c623eaa47f4175",
        },
        {
          url: "/_next/static/chunks/pages/signUp-adef955c53286097.js",
          revision: "adef955c53286097",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-5146130448d8adf7.js",
          revision: "5146130448d8adf7",
        },
        {
          url: "/_next/static/css/0b431db32f47bd88.css",
          revision: "0b431db32f47bd88",
        },
        {
          url: "/_next/static/css/5fed2cbd0647c6aa.css",
          revision: "5fed2cbd0647c6aa",
        },
        {
          url: "/_next/static/media/remixicon.81a0dd4a.woff2",
          revision: "81a0dd4a",
        },
        {
          url: "/_next/static/media/remixicon.87279a61.woff",
          revision: "87279a61",
        },
        {
          url: "/_next/static/media/remixicon.8ed2eb01.eot",
          revision: "8ed2eb01",
        },
        {
          url: "/_next/static/media/remixicon.d9d97fb2.ttf",
          revision: "d9d97fb2",
        },
        { url: "/manifest.json", revision: "b6198f85db92eaad52102fe943e5bcc0" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: a,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
