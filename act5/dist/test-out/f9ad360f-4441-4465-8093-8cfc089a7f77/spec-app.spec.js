import {
  RouterModule,
  RouterOutlet,
  init_router
} from "./chunk-FQMW7WDS.js";
import "./chunk-SJ7QWCBB.js";
import {
  Component,
  TestBed,
  __async,
  __commonJS,
  __decorate,
  __esm,
  init_core,
  init_testing,
  init_tslib_es6,
  provideZonelessChangeDetection,
  signal
} from "./chunk-ZROR7HZW.js";

// angular:jit:template:src\app\app.html
var app_default;
var init_app = __esm({
  "angular:jit:template:src\\app\\app.html"() {
    app_default = '\r\n<nav class="navbar navbar-expand-lg navbar-dark bg-primary">\r\n  <div class="container-fluid">\r\n    <a class="navbar-brand" href="#">act5</a>\r\n    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">\r\n      <span class="navbar-toggler-icon"></span>\r\n    </button>\r\n    <div class="collapse navbar-collapse" id="navbarNav">\r\n      <ul class="navbar-nav">\r\n        <li class="nav-item"><a class="nav-link" routerLink="/">Home</a></li>\r\n        <li class="nav-item"><a class="nav-link" routerLink="/bienvenida">Bienvenida</a></li>\r\n        <li class="nav-item"><a class="nav-link" routerLink="/documentador">Documentador</a></li>\r\n        <li class="nav-item"><a class="nav-link" routerLink="/proyect-mannager">Proyect Mannager</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<main class="container mt-4">\r\n  <router-outlet></router-outlet>\r\n</main>\r\n\r\n';
  }
});

// angular:jit:style:src\app\app.css
var app_default2;
var init_app2 = __esm({
  "angular:jit:style:src\\app\\app.css"() {
    app_default2 = "/* src/app/app.css */\n/*# sourceMappingURL=app.css.map */\n";
  }
});

// src/app/app.ts
var App;
var init_app3 = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_tslib_es6();
    init_app();
    init_app2();
    init_core();
    init_router();
    App = class App2 {
      title = signal("act5");
    };
    App = __decorate([
      Component({
        selector: "app-root",
        standalone: true,
        imports: [RouterOutlet, RouterModule],
        template: app_default,
        styles: [app_default2]
      })
    ], App);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_core();
    init_testing();
    init_app3();
    describe("App", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [App],
          providers: [provideZonelessChangeDetection()]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
      it("should render title", () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("h1")?.textContent).toContain("Hello, act5");
      });
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app.spec.js.map
