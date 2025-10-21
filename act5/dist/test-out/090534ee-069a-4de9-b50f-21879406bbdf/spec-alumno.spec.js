import {
  init_router
} from "./chunk-MNZKD3E2.js";
import {
  Router,
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

// angular:jit:style:src\app\alumno\alumno.css
var alumno_default;
var init_alumno = __esm({
  "angular:jit:style:src\\app\\alumno\\alumno.css"() {
    alumno_default = "/* src/app/alumno/alumno.css */\n/*# sourceMappingURL=alumno.css.map */\n";
  }
});

// src/app/alumno/alumno.ts
var AlumnoComponent;
var init_alumno2 = __esm({
  "src/app/alumno/alumno.ts"() {
    "use strict";
    init_tslib_es6();
    init_alumno();
    init_core();
    init_router();
    AlumnoComponent = class AlumnoComponent2 {
      navegar;
      constructor(navegar) {
        this.navegar = navegar;
      }
      ngOnInit() {
      }
      irAgregarAlumno() {
        this.navegar.navigate(["/agregar-alumno"]);
      }
      irModificarAlumno() {
        this.navegar.navigate(["/modificar-alumno"]);
      }
      irEliminarAlumno() {
        this.navegar.navigate(["/eliminar-alumno"]);
      }
      static ctorParameters = () => [
        { type: Router }
      ];
    };
    AlumnoComponent = __decorate([
      Component({
        selector: "app-alumno",
        standalone: true,
        imports: [],
        template: `<p>Componente alumno (detalle)</p>`,
        styles: [alumno_default]
      })
    ], AlumnoComponent);
  }
});

// src/app/alumno/alumno.spec.ts
var require_alumno_spec = __commonJS({
  "src/app/alumno/alumno.spec.ts"(exports) {
    init_testing();
    init_testing2();
    init_core();
    init_alumno2();
    describe("AlumnoComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [AlumnoComponent, RouterTestingModule],
          providers: [provideZonelessChangeDetection()]
        }).compileComponents();
        fixture = TestBed.createComponent(AlumnoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_alumno_spec();
//# sourceMappingURL=spec-alumno.spec.js.map
