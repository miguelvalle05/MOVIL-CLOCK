if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>s(e,t),d={module:{uri:t},exports:o,require:c};i[t]=Promise.all(r.map((e=>d[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-d37740a6"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"imagen_icono.png",revision:"ee6bb20d915178646396149fe52713c0"},{url:"index.html",revision:"083eb2267037ba9f626e1b3e55b9d2c6"},{url:"manifest.json",revision:"ac3d64e5e8fdfb4cafc2617d661c243e"},{url:"script.js",revision:"049d5931b064b8a57288dba0a40872a1"},{url:"styles.css",revision:"cc85184610978d657816df7f51efd1c3"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
