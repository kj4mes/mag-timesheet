const C='tsapp-v1';
const A=['./','./index.html','./manifest.json','https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js','https://cdn.jsdelivr.net/npm/idb-keyval@6/dist/umd.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>Promise.all(A.map(u=>c.add(u).catch(()=>{})))));self.skipWaiting();});
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).then(r=>{const x=r.clone();caches.open(C).then(c=>c.put(e.request,x));return r;}).catch(()=>caches.match(e.request)));});
