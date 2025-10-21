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

// angular:jit:template:src\app\modificar-alumno\modificar-alumno.html
var modificar_alumno_default;
var init_modificar_alumno = __esm({
  "angular:jit:template:src\\app\\modificar-alumno\\modificar-alumno.html"() {
    modificar_alumno_default = "<p>modificar-alumno works!</p>\r\n";
  }
});

// angular:jit:style:src\app\modificar-alumno\modificar-alumno.css
var modificar_alumno_default2;
var init_modificar_alumno2 = __esm({
  "angular:jit:style:src\\app\\modificar-alumno\\modificar-alumno.css"() {
    modificar_alumno_default2 = "/* src/app/modificar-alumno/modificar-alumno.css */\n/*# sourceMappingURL=modificar-alumno.css.map */\n";
  }
});

// src/app/modificar-alumno/modificar-alumno.ts
var ModificarAlumno;
var init_modificar_alumno3 = __esm({
  "src/app/modificar-alumno/modificar-alumno.ts"() {
    "use strict";
    init_tslib_es6();
    init_modificar_alumno();
    init_modificar_alumno2();
    init_core();
    ModificarAlumno = class ModificarAlumno2 {
    };
    ModificarAlumno = __decorate([
      Component({
        selector: "app-modificar-alumno",
        imports: [],
        template: modificar_alumno_default,
        styles: [modificar_alumno_default2]
      })
    ], ModificarAlumno);
  }
});

// src/app/modificar-alumno/modificar-alumno.spec.ts
var require_modificar_alumno_spec = __commonJS({
  "src/app/modificar-alumno/modificar-alumno.spec.ts"(exports) {
    init_testing();
    init_modificar_alumno3();
    describe("ModificarAlumno", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [ModificarAlumno]
        }).compileComponents();
        fixture = TestBed.createComponent(ModificarAlumno);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_modificar_alumno_spec();
//# sourceMappingURL=spec-modificar-alumno.spec.js.map
