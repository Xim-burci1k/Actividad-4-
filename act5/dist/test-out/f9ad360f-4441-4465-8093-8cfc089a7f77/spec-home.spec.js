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

// angular:jit:template:src\app\home\home.html
var home_default;
var init_home = __esm({
  "angular:jit:template:src\\app\\home\\home.html"() {
    home_default = '<div class="container mt-4">\r\n	<div class="card">\r\n		<div class="card-body">\r\n			<h2 class="card-title">Home</h2>\r\n			<p class="card-text">\xA1Bienvenido a la p\xE1gina principal!</p>\r\n		</div>\r\n	</div>\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\home\home.css
var home_default2;
var init_home2 = __esm({
  "angular:jit:style:src\\app\\home\\home.css"() {
    home_default2 = "/* src/app/home/home.css */\n/*# sourceMappingURL=home.css.map */\n";
  }
});

// src/app/home/home.ts
var HomeComponent;
var init_home3 = __esm({
  "src/app/home/home.ts"() {
    "use strict";
    init_tslib_es6();
    init_home();
    init_home2();
    init_core();
    HomeComponent = class HomeComponent2 {
    };
    HomeComponent = __decorate([
      Component({
        selector: "app-home",
        standalone: true,
        template: home_default,
        styles: [home_default2]
      })
    ], HomeComponent);
  }
});

// src/app/home/home.spec.ts
var require_home_spec = __commonJS({
  "src/app/home/home.spec.ts"(exports) {
    init_testing();
    init_home3();
    describe("HomeComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [HomeComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_home_spec();
//# sourceMappingURL=spec-home.spec.js.map
