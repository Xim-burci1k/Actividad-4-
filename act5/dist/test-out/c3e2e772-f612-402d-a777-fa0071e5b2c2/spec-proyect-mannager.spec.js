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

// angular:jit:template:src\app\proyect-mannager\proyect-mannager.html
var proyect_mannager_default;
var init_proyect_mannager = __esm({
  "angular:jit:template:src\\app\\proyect-mannager\\proyect-mannager.html"() {
    proyect_mannager_default = '<nav class="navbar navbar-expand-lg navbar-dark bg-dark">\r\n	<div class="container-fluid">\r\n		<a class="navbar-brand" href="#">Proyect Mannager</a>\r\n		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">\r\n			<span class="navbar-toggler-icon"></span>\r\n		</button>\r\n		<div class="collapse navbar-collapse" id="navbarNav">\r\n			<ul class="navbar-nav">\r\n				<li class="nav-item">\r\n					<a class="nav-link active" aria-current="page" href="#">Inicio</a>\r\n				</li>\r\n				<li class="nav-item">\r\n					<a class="nav-link" href="#">Proyectos</a>\r\n				</li>\r\n				<li class="nav-item">\r\n					<a class="nav-link" href="#">Equipo</a>\r\n				</li>\r\n			</ul>\r\n		</div>\r\n	</div>\r\n</nav>\r\n<div class="container mt-4">\r\n	<h2>Gesti\xF3n de Proyectos</h2>\r\n	<p>Este es el componente Proyect Mannager usando clases nav y navbar de Bootstrap.</p>\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\proyect-mannager\proyect-mannager.css
var proyect_mannager_default2;
var init_proyect_mannager2 = __esm({
  "angular:jit:style:src\\app\\proyect-mannager\\proyect-mannager.css"() {
    proyect_mannager_default2 = "/* src/app/proyect-mannager/proyect-mannager.css */\n/*# sourceMappingURL=proyect-mannager.css.map */\n";
  }
});

// src/app/proyect-mannager/proyect-mannager.ts
var ProyectMannagerComponent;
var init_proyect_mannager3 = __esm({
  "src/app/proyect-mannager/proyect-mannager.ts"() {
    "use strict";
    init_tslib_es6();
    init_proyect_mannager();
    init_proyect_mannager2();
    init_core();
    ProyectMannagerComponent = class ProyectMannagerComponent2 {
    };
    ProyectMannagerComponent = __decorate([
      Component({
        selector: "app-proyect-mannager",
        standalone: true,
        template: proyect_mannager_default,
        styles: [proyect_mannager_default2]
      })
    ], ProyectMannagerComponent);
  }
});

// src/app/proyect-mannager/proyect-mannager.spec.ts
var require_proyect_mannager_spec = __commonJS({
  "src/app/proyect-mannager/proyect-mannager.spec.ts"(exports) {
    init_testing();
    init_testing2();
    init_core();
    init_proyect_mannager3();
    describe("ProyectMannagerComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [ProyectMannagerComponent, RouterTestingModule],
          providers: [provideZonelessChangeDetection()]
        }).compileComponents();
        fixture = TestBed.createComponent(ProyectMannagerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_proyect_mannager_spec();
//# sourceMappingURL=spec-proyect-mannager.spec.js.map
