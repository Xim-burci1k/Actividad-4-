
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/bienvenida"
  },
  {
    "renderMode": 2,
    "route": "/documentador"
  },
  {
    "renderMode": 2,
    "route": "/proyect-mannager"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 384, hash: '373e494bdde16dec939322808eb6cae77a4d41af3a7fb5ed10c12ee852df6a7b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 924, hash: '60d3e00fe91bc0bc17033d16f70c252c6ada7d4f8f209d40fdf46e9334e0fc4c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2418, hash: '5ceb4efde5c67e50361aa3a52285f86aa72aae125e67e198a4ace5ce37fb7716', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'bienvenida/index.html': {size: 2410, hash: '48335cb38e1a58d2849eb1cbb571550b87829de0eca663399833a3806bafdd9e', text: () => import('./assets-chunks/bienvenida_index_html.mjs').then(m => m.default)},
    'documentador/index.html': {size: 2548, hash: '9f5eec4a0709b1c2f90d61fb5809c14db39ea036d2c4761d68548c8a3580f3f2', text: () => import('./assets-chunks/documentador_index_html.mjs').then(m => m.default)},
    'proyect-mannager/index.html': {size: 3103, hash: 'e9fbef0d8a5a868212a3dcf2e4477b9042564a8b40743817907681f81ffde9db', text: () => import('./assets-chunks/proyect-mannager_index_html.mjs').then(m => m.default)}
  },
};
