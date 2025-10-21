import {
  RouterTestingModule,
  init_testing as init_testing2
} from "./chunk-V65AKLA4.js";
import "./chunk-HWCLZL2W.js";
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
  provideZonelessChangeDetection
} from "./chunk-QRW7I3UZ.js";

// angular:jit:template:src\app\documentador\documentador.html
var documentador_default;
var init_documentador = __esm({
  "angular:jit:template:src\\app\\documentador\\documentador.html"() {
    documentador_default = '<div class="container mt-4">\r\n	<div class="row">\r\n		<div class="col-md-8 offset-md-2">\r\n			<div class="card">\r\n				<div class="card-header bg-primary text-white">\r\n					Documentador\r\n				</div>\r\n				<div class="card-body">\r\n					<p class="card-text">Este es el componente documentador usando Bootstrap.</p>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\documentador\documentador.css
var documentador_default2;
var init_documentador2 = __esm({
  "angular:jit:style:src\\app\\documentador\\documentador.css"() {
    documentador_default2 = "/* src/app/documentador/documentador.css */\n/*# sourceMappingURL=documentador.css.map */\n";
  }
});

// src/app/documentador/documentador.ts
var DocumentadorComponent;
var init_documentador3 = __esm({
  "src/app/documentador/documentador.ts"() {
    "use strict";
    init_tslib_es6();
    init_documentador();
    init_documentador2();
    init_core();
    DocumentadorComponent = class DocumentadorComponent2 {
    };
    DocumentadorComponent = __decorate([
      Component({
        selector: "app-documentador",
        standalone: true,
        template: documentador_default,
        styles: [documentador_default2]
      })
    ], DocumentadorComponent);
  }
});

// src/app/documentador/documentador.spec.ts
var require_documentador_spec = __commonJS({
  "src/app/documentador/documentador.spec.ts"(exports) {
    init_testing();
    init_testing2();
    init_core();
    init_documentador3();
    describe("DocumentadorComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [DocumentadorComponent, RouterTestingModule],
          providers: [provideZonelessChangeDetection()]
        }).compileComponents();
        fixture = TestBed.createComponent(DocumentadorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_documentador_spec();
//# sourceMappingURL=spec-documentador.spec.js.map
