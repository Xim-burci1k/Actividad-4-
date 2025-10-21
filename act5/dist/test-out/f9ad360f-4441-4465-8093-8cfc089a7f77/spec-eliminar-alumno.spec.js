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

// angular:jit:template:src\app\eliminar-alumno\eliminar-alumno.html
var eliminar_alumno_default;
var init_eliminar_alumno = __esm({
  "angular:jit:template:src\\app\\eliminar-alumno\\eliminar-alumno.html"() {
    eliminar_alumno_default = "<p>eliminar-alumno works!</p>\r\n";
  }
});

// angular:jit:style:src\app\eliminar-alumno\eliminar-alumno.css
var eliminar_alumno_default2;
var init_eliminar_alumno2 = __esm({
  "angular:jit:style:src\\app\\eliminar-alumno\\eliminar-alumno.css"() {
    eliminar_alumno_default2 = "/* src/app/eliminar-alumno/eliminar-alumno.css */\n/*# sourceMappingURL=eliminar-alumno.css.map */\n";
  }
});

// src/app/eliminar-alumno/eliminar-alumno.ts
var EliminarAlumno;
var init_eliminar_alumno3 = __esm({
  "src/app/eliminar-alumno/eliminar-alumno.ts"() {
    "use strict";
    init_tslib_es6();
    init_eliminar_alumno();
    init_eliminar_alumno2();
    init_core();
    EliminarAlumno = class EliminarAlumno2 {
    };
    EliminarAlumno = __decorate([
      Component({
        selector: "app-eliminar-alumno",
        imports: [],
        template: eliminar_alumno_default,
        styles: [eliminar_alumno_default2]
      })
    ], EliminarAlumno);
  }
});

// src/app/eliminar-alumno/eliminar-alumno.spec.ts
var require_eliminar_alumno_spec = __commonJS({
  "src/app/eliminar-alumno/eliminar-alumno.spec.ts"(exports) {
    init_testing();
    init_eliminar_alumno3();
    describe("EliminarAlumno", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [EliminarAlumno]
        }).compileComponents();
        fixture = TestBed.createComponent(EliminarAlumno);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_eliminar_alumno_spec();
//# sourceMappingURL=spec-eliminar-alumno.spec.js.map
