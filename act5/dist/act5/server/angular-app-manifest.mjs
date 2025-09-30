
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
    'index.csr.html': {size: 5022, hash: '643710b9b60e94c114c052cfe6e916672d202a46b9aaf433aa16771b8ac24b61', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 994, hash: '698cd96697e3162b8cf3b8fbb27d254df7cd0e6645b6b95dad6c90d13b805b5d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'proyect-mannager/index.html': {size: 12257, hash: '1053c396705223c5642e9a0af2ffe4b35a8aa1ff96fbc4c2dd832dfd71b9b977', text: () => import('./assets-chunks/proyect-mannager_index_html.mjs').then(m => m.default)},
    'index.html': {size: 7344, hash: '3edd1a03d1b0cfefce3629bd3c458c490121fc4a778f013192158c9d899bad77', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'documentador/index.html': {size: 8233, hash: '9561ae354160b292d272ae690a4f2c0e85b569a1c02e70e1ce637b106b65e7b4', text: () => import('./assets-chunks/documentador_index_html.mjs').then(m => m.default)},
    'bienvenida/index.html': {size: 6508, hash: '04c05af9e678a02e02f0bba0dcfb437d8fa2bc4943b61aee7ed81350b43d2eed', text: () => import('./assets-chunks/bienvenida_index_html.mjs').then(m => m.default)},
    'styles-VRDYZCWE.css': {size: 230966, hash: 'yJEOwb9t5lw', text: () => import('./assets-chunks/styles-VRDYZCWE_css.mjs').then(m => m.default)}
  },
};
