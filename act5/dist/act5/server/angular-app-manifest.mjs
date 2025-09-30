
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
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
    'index.csr.html': {size: 5022, hash: '99e5a9aa47ddc37ca5ff93603fe0890bb3191e15a5235fbf5605bcc8300d088c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 994, hash: 'ca5ef1154c84b5daf8137f7c2ca9da91ed4cd85c09f3c892b3648f2a74484342', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'documentador/index.html': {size: 23584, hash: '20803636f40dc0a46bca6c62696400f28d285cfa435fde18dcd6be8dfa78b012', text: () => import('./assets-chunks/documentador_index_html.mjs').then(m => m.default)},
    'bienvenida/index.html': {size: 22309, hash: 'c2edcccf452f022d9d34fd03a6f5d083da69e1458f3828417bc63407bbb85ca1', text: () => import('./assets-chunks/bienvenida_index_html.mjs').then(m => m.default)},
    'index.html': {size: 22695, hash: 'decde09a9e5e5d15d8ced083b3641fc426e7f8e822130559c69afbb42358f8c1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'proyect-mannager/index.html': {size: 22842, hash: '3d2396058203cd7ea69943f6a8e06a7b760b8e8667d95967ab88f232209b7598', text: () => import('./assets-chunks/proyect-mannager_index_html.mjs').then(m => m.default)},
    'styles-VRDYZCWE.css': {size: 230966, hash: 'yJEOwb9t5lw', text: () => import('./assets-chunks/styles-VRDYZCWE_css.mjs').then(m => m.default)}
  },
};
