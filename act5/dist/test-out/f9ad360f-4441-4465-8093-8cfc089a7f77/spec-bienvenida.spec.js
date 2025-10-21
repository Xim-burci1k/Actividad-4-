import {
  Component,
  TestBed,
  __async,
  __commonJS,
  __decorate,
  __esm,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-ZROR7HZW.js";

// angular:jit:template:src\app\bienvenida\bienvenida.html
var bienvenida_default;
var init_bienvenida = __esm({
  "angular:jit:template:src\\app\\bienvenida\\bienvenida.html"() {
    bienvenida_default = '<div class="alert alert-success mt-4" role="alert">\r\n	<h4 class="alert-heading">\xA1Bienvenido!</h4>\r\n	<p>Este es el componente de bienvenida usando Bootstrap.</p>\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\bienvenida\bienvenida.css
var bienvenida_default2;
var init_bienvenida2 = __esm({
  "angular:jit:style:src\\app\\bienvenida\\bienvenida.css"() {
    bienvenida_default2 = "/* src/app/bienvenida/bienvenida.css */\n/*# sourceMappingURL=bienvenida.css.map */\n";
  }
});

// src/app/bienvenida/bienvenida.ts
var BienvenidaComponent;
var init_bienvenida3 = __esm({
  "src/app/bienvenida/bienvenida.ts"() {
    "use strict";
    init_tslib_es6();
    init_bienvenida();
    init_bienvenida2();
    init_core();
    BienvenidaComponent = class BienvenidaComponent2 {
    };
    BienvenidaComponent = __decorate([
      Component({
        selector: "app-bienvenida",
        standalone: true,
        template: bienvenida_default,
        styles: [bienvenida_default2]
      })
    ], BienvenidaComponent);
  }
});

// src/app/bienvenida/bienvenida.spec.ts
var require_bienvenida_spec = __commonJS({
  "src/app/bienvenida/bienvenida.spec.ts"(exports) {
    init_testing();
    init_bienvenida3();
    describe("BienvenidaComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [BienvenidaComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(BienvenidaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_bienvenida_spec();
//# sourceMappingURL=spec-bienvenida.spec.js.map
