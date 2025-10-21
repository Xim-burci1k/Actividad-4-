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
} from "./chunk-QRW7I3UZ.js";

// angular:jit:template:src\app\agregar-alumno\agregar-alumno.html
var agregar_alumno_default;
var init_agregar_alumno = __esm({
  "angular:jit:template:src\\app\\agregar-alumno\\agregar-alumno.html"() {
    agregar_alumno_default = "<p>agregar-alumno works!</p>\r\n";
  }
});

// angular:jit:style:src\app\agregar-alumno\agregar-alumno.css
var agregar_alumno_default2;
var init_agregar_alumno2 = __esm({
  "angular:jit:style:src\\app\\agregar-alumno\\agregar-alumno.css"() {
    agregar_alumno_default2 = "/* src/app/agregar-alumno/agregar-alumno.css */\n/*# sourceMappingURL=agregar-alumno.css.map */\n";
  }
});

// src/app/agregar-alumno/agregar-alumno.ts
var AgregarAlumno;
var init_agregar_alumno3 = __esm({
  "src/app/agregar-alumno/agregar-alumno.ts"() {
    "use strict";
    init_tslib_es6();
    init_agregar_alumno();
    init_agregar_alumno2();
    init_core();
    AgregarAlumno = class AgregarAlumno2 {
    };
    AgregarAlumno = __decorate([
      Component({
        selector: "app-agregar-alumno",
        imports: [],
        template: agregar_alumno_default,
        styles: [agregar_alumno_default2]
      })
    ], AgregarAlumno);
  }
});

// src/app/agregar-alumno/agregar-alumno.spec.ts
var require_agregar_alumno_spec = __commonJS({
  "src/app/agregar-alumno/agregar-alumno.spec.ts"(exports) {
    init_testing();
    init_agregar_alumno3();
    describe("AgregarAlumno", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [AgregarAlumno]
        }).compileComponents();
        fixture = TestBed.createComponent(AgregarAlumno);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_agregar_alumno_spec();
//# sourceMappingURL=spec-agregar-alumno.spec.js.map
