(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _views_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/about-page/about-page.component */ 3981);
/* harmony import */ var _views_certificates_certificates_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/certificates/certificates.component */ 4159);
/* harmony import */ var _views_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/home-page/home-page.component */ 7015);
/* harmony import */ var _views_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/projects/projects.component */ 5778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);







const routes = [
    { path: 'home', component: _views_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__.HomePageComponent },
    { path: 'about', component: _views_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_0__.AboutPageComponent },
    { path: 'certificates', component: _views_certificates_certificates_component__WEBPACK_IMPORTED_MODULE_1__.CertificatesComponent },
    { path: 'projects', component: _views_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__.ProjectsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/nav/nav.component */ 9273);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _sections_sections_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/sections.module */ 4065);
/* harmony import */ var _views_views_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/views.module */ 5397);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ 5830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _sections_sections_module__WEBPACK_IMPORTED_MODULE_3__.SectionsModule,
            _views_views_module__WEBPACK_IMPORTED_MODULE_4__.ViewsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _sections_sections_module__WEBPACK_IMPORTED_MODULE_3__.SectionsModule,
        _views_views_module__WEBPACK_IMPORTED_MODULE_4__.ViewsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule] }); })();


/***/ }),

/***/ 3997:
/*!*****************************************************!*\
  !*** ./src/app/sections/banner/banner.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _shared_profile_fab_profile_fab_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/profile-fab/profile-fab.component */ 7711);







function BannerComponent_app_profile_fab_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-profile-fab", 11);
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("profileData", data_r1);
} }
const _c0 = function () { return ["/about"]; };
class BannerComponent {
    constructor() {
        this.profileData = [
            {
                image_loc: 'facebook-logo.svg',
                gradient: ['#2f55a4', '#445c8f'],
                href: 'https://www.facebook.com/a.p.nikhilkumar/'
            },
            {
                image_loc: 'github-logo.svg',
                gradient: ['#000000', '#1d1a1a'],
                href: 'https://github.com/nikki9119'
            },
            {
                image_loc: 'linkedin-logo.svg',
                gradient: ['#0e76a8', '#1293d2'],
                href: 'https://www.linkedin.com/in/nikki9119/'
            },
            {
                image_loc: 'instagram-logo.svg',
                gradient: ['#e95950', '#bc2a8d'],
                href: 'https://www.instagram.com/nikhil_kumar_99/'
            },
            {
                image_loc: 'twitter-logo.svg',
                gradient: ['#00acee', '#00b9ff'],
                href: 'https://twitter.com/nikki9119'
            }
        ];
    }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 15, vars: 3, consts: [[1, "banner"], [1, "name_card"], [1, "image-card", "mat-elevation-z10"], ["src", "assets/images/profile.jpg", "alt", "Profile picture", 1, "profile_image"], [1, "name", "mat-display-2", "fw-300"], [1, "profile_intro", "mat-h1", "fw-300"], [1, "buttons"], ["mat-flat-button", "", 1, "scroll_banner", "fw-300", "btn-primary", 3, "routerLink"], ["mat-flat-button", "", "href", "https://docs.google.com/document/d/1_sQoLjKgs-igOZQHC4IyiPWcIMsQN12r9oI3S9tvnP0/edit?usp=sharing", "target", "_blank", 1, "scroll_banner", "fw-300", "btn-primary"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "3vw", 1, "profiletray"], [3, "profileData", 4, "ngFor", "ngForOf"], [3, "profileData"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Nikhil Kumar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " CS Undergrad at College of Engineering Guindy | Web Developer | Photographer | Motorcycle Enthusiast | AvGeek\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "More about me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Get my Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, BannerComponent_app_profile_fab_14_Template, 1, 1, "app-profile-fab", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.profileData);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutGapDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _shared_profile_fab_profile_fab_component__WEBPACK_IMPORTED_MODULE_0__.ProfileFabComponent], styles: [".banner[_ngcontent-%COMP%] {\n  background: linear-gradient(#0072ff, #00c6ff);\n  background: linear-gradient(to right, #009fff, #ec2f4b);\n  height: 50vh;\n  position: absolute;\n  width: 100%;\n  -webkit-clip-path: polygon(160% 0%, 0% 100%, 0% 100%, 0% 0%);\n          clip-path: polygon(160% 0%, 0% 100%, 0% 100%, 0% 0%);\n}\n\n.name_card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  top: 14vh;\n}\n\n.image-card[_ngcontent-%COMP%] {\n  width: 18em;\n  height: 18em;\n  border-radius: 50%;\n  padding: 4px;\n}\n\n.profile_image[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: 50%;\n  height: 100%;\n  width: 100%;\n  object-fit: contain;\n}\n\nspan.name[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0.5em;\n}\n\ndiv.profile_intro[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  top: 10vh;\n  padding: 1em;\n}\n\n.scroll_banner[_ngcontent-%COMP%] {\n  position: relative;\n  top: 10vh;\n  display: flex;\n  width: 9em;\n  height: 2em;\n  margin: 0 0.5em;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  font-size: 1.5em;\n  border-radius: 7px;\n  text-decoration: none;\n}\n\n.profiletray[_ngcontent-%COMP%] {\n  position: relative;\n  top: 19vh;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZDQUFBO0VBQ0EsdURBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNERBQUE7VUFBQSxvREFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQWMsV0FBQTtFQUFhLG1CQUFBO0FBRy9COztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBR0o7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUdKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUdKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFFSiIsImZpbGUiOiJiYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVye1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDcyZmYsIzAwYzZmZik7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIzAwOWZmZiwjZWMyZjRiKTtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDE2MCUgMCUsIDAlIDEwMCUsIDAlIDEwMCUsIDAlIDAlKTtcclxufVxyXG5cclxuLm5hbWVfY2FyZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDE0dmg7XHJcbn1cclxuXHJcbi5pbWFnZS1jYXJke1xyXG4gICAgd2lkdGg6IDE4ZW07XHJcbiAgICBoZWlnaHQ6IDE4ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuXHJcbi5wcm9maWxlX2ltYWdle1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcblxyXG5zcGFuLm5hbWV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDAuNWVtO1xyXG59XHJcblxyXG5kaXYucHJvZmlsZV9pbnRyb3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0b3A6IDEwdmg7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbn1cclxuXHJcbi5zY3JvbGxfYmFubmVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA5ZW07XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIG1hcmdpbjogMCAwLjVlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCMxOTc2ZDIsIzQyYTVmNSk7XHJcbn1cclxuXHJcbi5wcm9maWxldHJheXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTl2aDtcclxufVxyXG5cclxuLmJ1dHRvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"] });


/***/ }),

/***/ 4065:
/*!*********************************************!*\
  !*** ./src/app/sections/sections.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionsModule": () => (/* binding */ SectionsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner/banner.component */ 3997);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ 5830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);








class SectionsModule {
}
SectionsModule.ɵfac = function SectionsModule_Factory(t) { return new (t || SectionsModule)(); };
SectionsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SectionsModule });
SectionsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SectionsModule, { declarations: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule], exports: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent] }); })();


/***/ }),

/***/ 1017:
/*!***********************************************************************!*\
  !*** ./src/app/shared/certificate-card/certificate-card.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CertificateCardComponent": () => (/* binding */ CertificateCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 1436);





function CertificateCardComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
} if (rf & 2) {
    const prv_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", prv_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("matTooltip", prv_r5.name);
} }
function CertificateCardComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ongoing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CertificateCardComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Issued on ", ctx_r2.certificate.doi, "");
} }
function CertificateCardComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Credential ID: ", ctx_r3.certificate.cred_id, "");
} }
function CertificateCardComponent_div_10_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "See credential");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r6.certificate.verify_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CertificateCardComponent_div_10_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View certificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r7.certificate.view_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CertificateCardComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CertificateCardComponent_div_10_a_1_Template, 2, 1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CertificateCardComponent_div_10_a_2_Template, 2, 1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.certificate.verify_link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.certificate.view_link);
} }
class CertificateCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CertificateCardComponent.ɵfac = function CertificateCardComponent_Factory(t) { return new (t || CertificateCardComponent)(); };
CertificateCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CertificateCardComponent, selectors: [["app-certificate-card"]], inputs: { certificate: "certificate" }, decls: 11, vars: 6, consts: [["fxFlex", "", 1, "mat-elevation-z3", "card", "cert"], ["fxLayout", "column", "fxLayoutAlign", "space-evenly stretch", "fxLayoutGap", "0.3em", "fxFlex", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "text-medium", "fw-400"], ["fxLayout", "row", "fxLayoutAlign", "start", "fxLayoutGap", "0.5em"], ["class", "provider-img mat-elevation-z3", 3, "src", "matTooltip", 4, "ngFor", "ngForOf"], ["class", "text-small fw-300", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 4, "ngIf"], [1, "provider-img", "mat-elevation-z3", 3, "src", "matTooltip"], [1, "text-small", "fw-300"], ["color", "primary", "class", "fw-400 link", "fxLayout", "row", "fxLayoutAlign", "center center", "target", "_blank", 3, "href", 4, "ngIf"], ["color", "primary", "fxLayout", "row", "fxLayoutAlign", "center center", "target", "_blank", 1, "fw-400", "link", 3, "href"]], template: function CertificateCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CertificateCardComponent_img_6_Template, 1, 2, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CertificateCardComponent_div_7_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CertificateCardComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CertificateCardComponent_div_9_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CertificateCardComponent_div_10_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.certificate.course);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.certificate.providers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.certificate.status == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.certificate.status == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.certificate.status == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.certificate.status == 3);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutGapDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltip], styles: [".provider-img[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n}\n\n.cert[_ngcontent-%COMP%] {\n  min-width: 20em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlcnRpZmljYXRlLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoiY2VydGlmaWNhdGUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm92aWRlci1pbWd7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmNlcnR7XHJcbiAgICBtaW4td2lkdGg6IDIwZW07XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6343:
/*!*******************************************************************!*\
  !*** ./src/app/shared/education-card/education-card.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationCardComponent": () => (/* binding */ EducationCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../status/status.component */ 2330);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 1095);





class EducationCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
EducationCardComponent.ɵfac = function EducationCardComponent_Factory(t) { return new (t || EducationCardComponent)(); };
EducationCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EducationCardComponent, selectors: [["app-education-card"]], inputs: { institution: "institution" }, decls: 21, vars: 8, consts: [[1, "mat-elevation-z3", "card"], ["fxLayout", "row", "fxLayoutAlign", "space-around stretch"], ["fxLayout", "column", "fxLayoutAlign", "space-evenly stretch", "fxFlex", "", "fxLayoutGap", "0.2em"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "1em"], [1, "institution-logo", 3, "src", "alt"], ["fxLayout", "column", "fxLayoutAlign", "center start"], [1, "text-medium"], [1, "text-small", "fw-300"], [3, "status"], ["fxFlexOffset", "0.5em", 1, "text-small", "fw-400"], ["mat-button", "", "fxLayout", "row", "fxLayoutAlign", "center center", 1, "marksheet-btn", "fw-400", "btn-flat-accent"]], template: function EducationCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-status", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Marksheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.institution.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx.institution.alt);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.institution.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.institution.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.institution.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.institution.education);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.institution.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.institution.marks);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutGapDirective, _status_status_component__WEBPACK_IMPORTED_MODULE_0__.StatusComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexOffsetDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatAnchor], styles: [".institution-logo[_ngcontent-%COMP%] {\n  width: 65px;\n  height: 65px;\n}\n\n.secondary-info[_ngcontent-%COMP%] {\n  padding: 0 1em;\n}\n\n.marksheet-btn[_ngcontent-%COMP%] {\n  margin: 0 0.5em;\n  height: 1.7em;\n  width: 6em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkdWNhdGlvbi1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFFQSxhQUFBO0VBQ0EsVUFBQTtBQUFKIiwiZmlsZSI6ImVkdWNhdGlvbi1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluc3RpdHV0aW9uLWxvZ297XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGhlaWdodDogNjVweDtcclxufVxyXG5cclxuLnNlY29uZGFyeS1pbmZve1xyXG4gICAgcGFkZGluZzogMCAxZW07XHJcbn1cclxuXHJcbi5tYXJrc2hlZXQtYnRue1xyXG4gICAgbWFyZ2luOiAwIDAuNWVtO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGhlaWdodDogMS43ZW07XHJcbiAgICB3aWR0aDogNmVtO1xyXG59Il19 */"] });


/***/ }),

/***/ 3994:
/*!*********************************************************************!*\
  !*** ./src/app/shared/experience-card/experience-card.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienceCardComponent": () => (/* binding */ ExperienceCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../status/status.component */ 2330);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);





function ExperienceCardComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const desc_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", desc_r1, " ");
} }
class ExperienceCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExperienceCardComponent.ɵfac = function ExperienceCardComponent_Factory(t) { return new (t || ExperienceCardComponent)(); };
ExperienceCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExperienceCardComponent, selectors: [["app-experience-card"]], inputs: { company: "company" }, decls: 20, vars: 8, consts: [[1, "mat-elevation-z3", "card"], ["fxLayout", "row", "fxLayoutAlign", "space-around stretch"], ["fxLayout", "column", "fxLayoutAlign", "space-evenly stretch", "fxFlex", "", "fxLayoutGap", "0.2em"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "1em"], [1, "company-logo", 3, "src", "alt"], ["fxLayout", "column", "fxLayoutAlign", "center start"], [1, "text-medium"], [1, "text-small", "fw-300"], [3, "status"], ["fxFlexOffset", "0.5em", 1, "text-small", "fw-400"], [1, "text-small", "fw-400"], ["class", "text-small fw-300", 4, "ngFor", "ngForOf"]], template: function ExperienceCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-status", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Job Description :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ExperienceCardComponent_li_19_Template, 2, 1, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.company.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx.company.alt);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.company.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.company.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.company.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.company.designation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.company.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.company.description);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutGapDirective, _status_status_component__WEBPACK_IMPORTED_MODULE_0__.StatusComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexOffsetDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: [".company-logo[_ngcontent-%COMP%] {\n  width: 65px;\n  height: 65px;\n}\n\n.exp-header[_ngcontent-%COMP%] {\n  padding: 0px 5px 0px 3px !important;\n}\n\nul[_ngcontent-%COMP%] {\n  margin-block-start: 0em;\n  margin-block-end: 0em;\n  padding-inline-start: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQ0FBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBQ0oiLCJmaWxlIjoiZXhwZXJpZW5jZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBhbnktbG9nb3tcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG59XHJcblxyXG4uZXhwLWhlYWRlcntcclxuICAgIHBhZGRpbmc6IDBweCA1cHggMHB4IDNweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG51bHtcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMGVtO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDJlbTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 9273:
/*!*********************************************!*\
  !*** ./src/app/shared/nav/nav.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services.service */ 5808);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ 8030);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 1436);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg */ 6777);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ 7746);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 6627);















function NavComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14); return _r4.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/home"]; };
function NavComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Nikhil Kumar's Portfolio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
function NavComponent_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "light_mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NavComponent_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "dark_mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "is-transparent": a0 }; };
const _c2 = function (a0) { return { "light-theme": a0 }; };
const _c3 = ["*"];
class NavComponent {
    constructor(router, services) {
        this.router = router;
        this.services = services;
        this.isLightTheme = false;
        this.isNotHome = false;
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
                console.log(event.url);
                this.activatedRoute = event.url;
                if (this.activatedRoute == '/home' || this.activatedRoute == '/') {
                    this.isNotHome = false;
                }
                else {
                    this.isNotHome = true;
                }
                console.log(this.isNotHome);
            }
        });
        this.isHandset$ = services.IsHandset$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(result => result.matches), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.shareReplay)());
    }
    ngOnInit() {
        this.isLightTheme = localStorage.getItem('theme') === 'light' ? true : false;
    }
    changeTheme() {
        this.isLightTheme = !this.isLightTheme;
        localStorage.setItem('theme', this.isLightTheme ? 'light' : 'dark');
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_service__WEBPACK_IMPORTED_MODULE_0__.ServicesService)); };
NavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], ngContentSelectors: _c3, decls: 42, vars: 21, consts: [[1, "header-container"], ["color", "primary", 1, "toolbar", 3, "ngClass"], ["mat-button", "", "class", "menu_icon", 3, "click", 4, "ngIf"], ["style", "padding: 0.5em;", "class", "fw-300", 3, "routerLink", 4, "ngIf"], [2, "flex", "auto"], ["mat-icon-button", "", 3, "matTooltip", "click"], [4, "ngIf"], ["mat-button", "", "fxLayout", "row", "fxLayoutAlign", "center center", "href", "https://github.com/nikki9119/nikki9119.github.io", "target", "_blank", "matTooltip", "GitHub repo"], [1, "gitlogo", 3, "inlineSVG"], [2, "padding", "0 0 0 0.5em"], [1, "mat-app-background", 3, "ngClass"], [1, "sidenav", 3, "fixedInViewport", "mode", "opened"], ["drawer", ""], ["fxLayout", "column", "fxLayoutAlign", "space-evenly"], ["routerLink", "home", "routerLinkActive", "link-active", "mat-list-item", "", 3, "click"], [1, "link-icon"], [1, "fw-400", "text-small"], [2, "flex", "1 1 auto"], [1, "rectangle"], ["routerLink", "about", "routerLinkActive", "link-active", "mat-list-item", ""], ["routerLink", "certificates", "routerLinkActive", "link-active", "mat-list-item", ""], ["mat-button", "", 1, "menu_icon", 3, "click"], [1, "fw-300", 2, "padding", "0.5em", 3, "routerLink"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavComponent_button_2_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NavComponent_a_3_Template, 2, 2, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_Template_button_click_5_listener() { return ctx.changeTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NavComponent_mat_icon_6_Template, 2, 0, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NavComponent_mat_icon_7_Template, 2, 0, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-sidenav-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-sidenav", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-nav-list", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_Template_a_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14); return ctx.isHandset$ ? _r4.toggle() : ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Certifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](17, _c1, !ctx.isNotHome));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isNotHome);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isNotHome);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("matTooltip", "Change to ", ctx.isLightTheme ? "dark" : "light", " theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLightTheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLightTheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inlineSVG", "github-logo-1.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](19, _c2, ctx.isLightTheme));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixedInViewport", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 11, ctx.isHandset$))("mode", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 13, ctx.isHandset$) ? "over" : "side")("opened", ctx.isNotHome && !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 15, ctx.isHandset$));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbar, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatAnchor, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutAlignDirective, ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__.InlineSVGDirective, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenav, _angular_material_list__WEBPACK_IMPORTED_MODULE_13__.MatNavList, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_material_list__WEBPACK_IMPORTED_MODULE_13__.MatListItem, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavContent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe], styles: [".sidenav[_ngcontent-%COMP%] {\n  width: 280px;\n  top: 3.5em !important;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 3;\n  height: 2.5em;\n  transition: 0.5s;\n  padding: 0 1em 0 0;\n  background: linear-gradient(to right, #009fff, #ec2f4b);\n}\n\n.mat-drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.is-transparent[_ngcontent-%COMP%] {\n  background: transparent;\n  transition-delay: 0.2s;\n  transition: 0.5s;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: inherit;\n  color: inherit;\n  cursor: pointer;\n}\n\n.menu_icon[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.gitlogo[_ngcontent-%COMP%] {\n  fill: #ffffff;\n  position: relative;\n  bottom: -6px;\n}\n\n.header-container[_ngcontent-%COMP%] {\n  height: 100% !important;\n}\n\n.link-active[_ngcontent-%COMP%] {\n  color: #009fff !important;\n}\n\n.link-active[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%] {\n  width: 2%;\n  height: 100%;\n  background: #009fff !important;\n  margin-right: -16px;\n}\n\n.link-icon[_ngcontent-%COMP%] {\n  padding: 0 1em 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLHVEQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0FBQUo7O0FBR0E7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLHVCQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtBQUFKOztBQUVJO0VBQ0ksU0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQVI7O0FBUUE7RUFDSSxrQkFBQTtBQUxKIiwiZmlsZSI6Im5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2e1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgdG9wOiAzLjVlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG9vbGJhcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBoZWlnaHQ6IDIuNWVtO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIHBhZGRpbmc6IDAgMWVtIDAgMDtcclxuICAgIC8vIG9wYWNpdHk6IDAuOTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjMDA5ZmZmLCNlYzJmNGIpO1xyXG59XHJcblxyXG4ubWF0LWRyYXdlci1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5pcy10cmFuc3BhcmVudHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1lbnVfaWNvbntcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmdpdGxvZ297XHJcbiAgICBmaWxsOiAjZmZmZmZmOyBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogLTZweDtcclxufVxyXG5cclxuLmhlYWRlci1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxpbmstYWN0aXZle1xyXG4gICAgY29sb3I6ICMwMDlmZmYgIWltcG9ydGFudDtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDAgNTBweCA1MHB4IDA7XHJcbiAgICAucmVjdGFuZ2xle1xyXG4gICAgICAgIHdpZHRoOiAyJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwOWZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC5tYXQtbGlzdC1pdGVtOmhvdmVyLCAubWF0LXJpcHBsZXtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDAgNTBweCA1MHB4IDAgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLmxpbmstaWNvbntcclxuICAgIHBhZGRpbmc6IDAgMWVtIDAgMDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 7711:
/*!*************************************************************!*\
  !*** ./src/app/shared/profile-fab/profile-fab.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileFabComponent": () => (/* binding */ ProfileFabComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg */ 6777);



class ProfileFabComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileFabComponent.ɵfac = function ProfileFabComponent_Factory(t) { return new (t || ProfileFabComponent)(); };
ProfileFabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileFabComponent, selectors: [["app-profile-fab"]], inputs: { profileData: "profileData" }, decls: 2, vars: 4, consts: [["mat-mini-fab", "", "target", "_blank", 1, "fab", 3, "href"], [1, "image", 3, "inlineSVG"]], template: function ProfileFabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"]("background:linear-gradient(120deg," + ctx.profileData.gradient[0] + "," + ctx.profileData.gradient[1] + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.profileData.href, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inlineSVG", ctx.profileData.image_loc);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatAnchor, ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__.InlineSVGDirective], styles: [".image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  fill: #ffffff;\n}\n\n.fab[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  padding: 3px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtZmFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6InByb2ZpbGUtZmFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgZmlsbDogI2ZmZmZmZjtcclxufVxyXG5cclxuLmZhYntcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogM3B4IDA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 5808:
/*!********************************************!*\
  !*** ./src/app/shared/services.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesService": () => (/* binding */ ServicesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ 5072);


class ServicesService {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.IsHandset$ = this.breakpointObserver.observe('(max-width: 900px)');
    }
}
ServicesService.ɵfac = function ServicesService_Factory(t) { return new (t || ServicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.BreakpointObserver)); };
ServicesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServicesService, factory: ServicesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _profile_fab_profile_fab_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-fab/profile-fab.component */ 7711);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg */ 6777);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/nav.component */ 9273);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 1436);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _education_card_education_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./education-card/education-card.component */ 6343);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ 7746);
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./status/status.component */ 2330);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout */ 5830);
/* harmony import */ var _experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./experience-card/experience-card.component */ 3994);
/* harmony import */ var _skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skill-card/skill-card.component */ 5714);
/* harmony import */ var _certificate_card_certificate_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./certificate-card/certificate-card.component */ 1017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);






















class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltipModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDividerModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_18__.MatListModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__.FlexLayoutModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__.InlineSVGModule.forRoot({ baseUrl: 'assets/svg/' })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_profile_fab_profile_fab_component__WEBPACK_IMPORTED_MODULE_0__.ProfileFabComponent, _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent, _education_card_education_card_component__WEBPACK_IMPORTED_MODULE_3__.EducationCardComponent, _status_status_component__WEBPACK_IMPORTED_MODULE_4__.StatusComponent, _experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_5__.ExperienceCardComponent,
        _skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_6__.SkillCardComponent, _certificate_card_certificate_card_component__WEBPACK_IMPORTED_MODULE_7__.CertificateCardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltipModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDividerModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_18__.MatListModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__.FlexLayoutModule, ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__.InlineSVGModule], exports: [_profile_fab_profile_fab_component__WEBPACK_IMPORTED_MODULE_0__.ProfileFabComponent,
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent,
        _education_card_education_card_component__WEBPACK_IMPORTED_MODULE_3__.EducationCardComponent,
        _experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_5__.ExperienceCardComponent,
        _skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_6__.SkillCardComponent,
        _certificate_card_certificate_card_component__WEBPACK_IMPORTED_MODULE_7__.CertificateCardComponent] }); })();


/***/ }),

/***/ 5714:
/*!***********************************************************!*\
  !*** ./src/app/shared/skill-card/skill-card.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillCardComponent": () => (/* binding */ SkillCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);




function SkillCardComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
} }
function SkillCardComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
} }
class SkillCardComponent {
    constructor() { }
    ngOnInit() {
        // this.skill.score *= 10;
        this.whole = Math.floor(this.skill.score);
        this.part = Math.ceil(this.skill.score - this.whole);
        console.log(this.whole, this.part);
        this.arr = Array(this.whole).fill(1);
    }
}
SkillCardComponent.ɵfac = function SkillCardComponent_Factory(t) { return new (t || SkillCardComponent)(); };
SkillCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillCardComponent, selectors: [["app-skill-card"]], inputs: { skill: "skill" }, decls: 9, vars: 5, consts: [[1, "mat-elevation-z3", "card"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "1em"], [1, "skill-logo", 3, "src", "alt"], ["fxLayout", "column", "fxLayoutAlign", "space-evenly center"], [1, "text-medlarge", "fw-300"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "0.2em"], ["src", "assets/images/star.png", "alt", "star", "class", "star", 4, "ngFor", "ngForOf"], ["src", "assets/images/half-star.png", "alt", "half-star", "class", "star", 4, "ngIf"], ["src", "assets/images/star.png", "alt", "star", 1, "star"], ["src", "assets/images/half-star.png", "alt", "half-star", 1, "star"]], template: function SkillCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SkillCardComponent_img_7_Template, 1, 0, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SkillCardComponent_img_8_Template, 1, 0, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.skill.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.skill.alt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.skill.skill);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.part);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutGapDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".star[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n}\n\n.skill-logo[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxsLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJza2lsbC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXJ7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuLnNraWxsLWxvZ297XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 2330:
/*!***************************************************!*\
  !*** ./src/app/shared/status/status.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusComponent": () => (/* binding */ StatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);



function StatusComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StatusComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StatusComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ongoing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StatusComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dropped");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class StatusComponent {
    constructor() { }
    ngOnInit() {
    }
}
StatusComponent.ɵfac = function StatusComponent_Factory(t) { return new (t || StatusComponent)(); };
StatusComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatusComponent, selectors: [["app-status"]], inputs: { status: "status" }, decls: 4, vars: 4, consts: [["class", "status upcoming", "fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], ["class", "status completed", "fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], ["class", "status ongoing", "fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], ["class", "status dropped", "fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "status", "upcoming"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "status", "completed"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "status", "ongoing"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "status", "dropped"]], template: function StatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StatusComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StatusComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StatusComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StatusComponent_div_3_Template, 2, 0, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status == 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective], styles: [".status[_ngcontent-%COMP%] {\n  padding: 0.5em 0.6em;\n  border-radius: 15px;\n  font-size: 0.8em;\n  margin: 0 1em;\n  color: white;\n  height: 2.2em;\n}\n\n.completed[_ngcontent-%COMP%] {\n  background: #72c71e;\n}\n\n.ongoing[_ngcontent-%COMP%] {\n  background: #2d82b5;\n}\n\n.dropped[_ngcontent-%COMP%] {\n  background: #e53935;\n}\n\n.upcoming[_ngcontent-%COMP%] {\n  background: #a7bbc7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSiIsImZpbGUiOiJzdGF0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHVze1xyXG4gICAgcGFkZGluZzogMC41ZW0gMC42ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIG1hcmdpbjogMCAxZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDIuMmVtO1xyXG59XHJcblxyXG4uY29tcGxldGVke1xyXG4gICAgYmFja2dyb3VuZDogIzcyYzcxZTtcclxufVxyXG5cclxuLm9uZ29pbmd7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmQ4MmI1O1xyXG59XHJcblxyXG4uZHJvcHBlZHtcclxuICAgIGJhY2tncm91bmQ6ICNlNTM5MzU7XHJcbn1cclxuXHJcbi51cGNvbWluZ3tcclxuICAgIGJhY2tncm91bmQ6ICNhN2JiYzc7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 3981:
/*!**********************************************************!*\
  !*** ./src/app/views/about-page/about-page.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageComponent": () => (/* binding */ AboutPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _shared_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/experience-card/experience-card.component */ 3994);
/* harmony import */ var _shared_education_card_education_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/education-card/education-card.component */ 6343);
/* harmony import */ var _shared_skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/skill-card/skill-card.component */ 5714);







function AboutPageComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-experience-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cpy_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("company", cpy_r3);
} }
function AboutPageComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-education-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inst_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("institution", inst_r4);
} }
function AboutPageComponent_app_skill_card_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-skill-card", 13);
} if (rf & 2) {
    const sk_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("skill", sk_r5);
} }
class AboutPageComponent {
    constructor() {
        this.imageloc = "assets/images/";
        this.institutions = [
            {
                name: "College of Engineering Guindy",
                logo: this.imageloc + "ceg-logo.png",
                alt: 'ceg-logo',
                location: 'Chennai, India',
                education: 'Bachelor of Engineering - Computer Science',
                time: 'Expected July 2021',
                marks: 'CGPA - 8.29/10',
                status: 2
            },
            {
                name: "GKD Matriculation Higher Secondary School",
                logo: this.imageloc + "gkd-logo.png",
                alt: 'gkd-logo',
                location: 'Coimbatore, India',
                education: '12th Standard',
                time: '2016 - 2017',
                marks: 'Overall - 1167/1200 (97.25%)',
                status: 3
            },
            {
                name: "AVB Matriculation Higher Secondary School",
                logo: this.imageloc + "avb-logo.png",
                alt: "avb-logo",
                location: "Coimbatore, India",
                education: "10th Standard",
                time: "2014 - 2015",
                marks: "Overall - 493/500 (98.6%)",
                status: 3
            }
        ];
        this.companies = [
            // {
            //   name: "Barclays Global Services",
            //   location: "Pune, India",
            //   alt: "barclays-logo",
            //   logo: this.imageloc+"barclays-logo.png",
            //   designation: "Software Developer - BA3",
            //   time: "Starting July 2021",
            //   status: 4
            // },
            {
                name: "Cyces Innovation Labs LLP",
                location: "Chennai, India",
                alt: "cyces-logo",
                logo: this.imageloc + "cyces-logo.png",
                designation: "SDE Intern",
                time: "April - July 2020 (4 months)",
                status: 3,
                description: [
                    "Developed the front end of a data lake ingestion module.",
                    "Technologies used: Angular, Angular Material and Flex-Layout."
                ]
            },
            {
                name: "Logic Research Labs",
                location: "Kumbakonam, India",
                alt: "lrl-logo",
                logo: this.imageloc + "lrl-logo.png",
                designation: "Research Intern",
                time: "November - December 2019 (2 months)",
                status: 3,
                description: [
                    "Developed a library management module for Chinese Development Assistance Council (CDAC) to manage all their libraries in Singapore.",
                    "Technologies used: HTML, PHP, JavaScript, Ajax, SQL."
                ]
            }
        ];
        this.skills = [
            {
                skill: "Angular",
                logo: this.imageloc + "angular-logo.png",
                alt: "angular-logo",
                score: 4.5
            },
            {
                skill: "Python",
                logo: this.imageloc + "python-logo.png",
                alt: "python-logo",
                score: 4.5
            },
            {
                skill: "C++",
                logo: this.imageloc + "cpp-logo.png",
                alt: "cpp-logo",
                score: 4
            },
            {
                skill: "TypeScript",
                logo: this.imageloc + "ts-logo.png",
                alt: "ts-logo",
                score: 4
            },
            {
                skill: "SQL",
                logo: this.imageloc + "sql-logo.png",
                alt: "sql-logo",
                score: 4
            },
            {
                skill: "HTML",
                logo: this.imageloc + "html-logo.png",
                alt: "html-logo",
                score: 3.5
            },
            {
                skill: "Data Structures",
                logo: this.imageloc + "ds-logo.png",
                alt: "ds-logo",
                score: 3.5
            },
            {
                skill: "Flutter",
                logo: this.imageloc + "flutter-logo.png",
                alt: "flutter-logo",
                score: 1
            }
        ];
    }
    ngOnInit() {
    }
}
AboutPageComponent.ɵfac = function AboutPageComponent_Factory(t) { return new (t || AboutPageComponent)(); };
AboutPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AboutPageComponent, selectors: [["app-about-page"]], decls: 18, vars: 3, consts: [["fxLayout", "column", "fxLayoutAlign", "space-evenly", "fxLayoutGap", "1em", 1, "mt-custom"], ["id", "#experience", "fxLayout", "column", "fxLayoutAlign", "space-evenly", "fxLayoutGap", "0.3em", "fxFill", ""], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "0.2em"], [1, "text-large", "fw-300"], ["style", "padding: 10px 0;", 4, "ngFor", "ngForOf"], [1, "divider"], ["id", "education", "fxLayout", "column", "fxLayoutAlign", "space-evenly", "fxLayoutGap", "0.3em", "fxFill", ""], ["id", "skills", "fxLayout", "column", "fxLayoutAlign", "space-evenly", "fxLayoutGap", "0.3em", "fxFill", ""], ["fxLayout", "row wrap", "fxLayoutGap", "1em grid"], ["fxFlex", "", 3, "skill", 4, "ngFor", "ngForOf"], [2, "padding", "10px 0"], [3, "company"], [3, "institution"], ["fxFlex", "", 3, "skill"]], template: function AboutPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AboutPageComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "mat-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AboutPageComponent_div_11_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "mat-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Technical Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AboutPageComponent_app_skill_card_17_Template, 1, 1, "app-skill-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.companies);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.institutions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.skills);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.FlexFillDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider, _shared_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_0__.ExperienceCardComponent, _shared_education_card_education_card_component__WEBPACK_IMPORTED_MODULE_1__.EducationCardComponent, _shared_skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_2__.SkillCardComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective], styles: [".mt-custom[_ngcontent-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  padding: 5em 3em 2em;\n  max-width: 65em;\n  margin: 0px auto;\n}\n\n.divider[_ngcontent-%COMP%] {\n  border-top-width: 2px;\n}\n\n.title-line[_ngcontent-%COMP%] {\n  width: 45em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJhYm91dC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm10LWN1c3RvbXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBwYWRkaW5nOiA1ZW0gM2VtIDJlbTtcclxuICAgIG1heC13aWR0aDogNjVlbTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuXHJcbi5kaXZpZGVye1xyXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMnB4O1xyXG59XHJcblxyXG4udGl0bGUtbGluZXtcclxuICAgIHdpZHRoOiA0NWVtO1xyXG59Il19 */"] });


/***/ }),

/***/ 4159:
/*!**************************************************************!*\
  !*** ./src/app/views/certificates/certificates.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CertificatesComponent": () => (/* binding */ CertificatesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _shared_certificate_card_certificate_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/certificate-card/certificate-card.component */ 1017);





function CertificatesComponent_app_certificate_card_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-certificate-card", 7);
} if (rf & 2) {
    const course_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("certificate", course_r3);
} }
function CertificatesComponent_app_certificate_card_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-certificate-card", 7);
} if (rf & 2) {
    const course_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("certificate", course_r4);
} }
function CertificatesComponent_app_certificate_card_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-certificate-card", 7);
} if (rf & 2) {
    const course_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("certificate", course_r5);
} }
class CertificatesComponent {
    constructor() {
        this.imageloc = "assets/images/";
        this.courses = [
            {
                course: "The Modern Angular Bootcamp",
                providers: [
                    {
                        name: "Udemy",
                        image: this.imageloc + "udemy-logo.png"
                    },
                    {
                        name: "Stephen Grider",
                        image: this.imageloc + "stephen.jpg"
                    }
                ],
                doi: "August 2020",
                cred_id: "UC-471a35f6-fe1a-4542-8f07-8899a1a873e7",
                verify_link: "",
                view_link: "",
                status: 3
            },
            {
                course: "Extensive Python and PyTorch for AI",
                providers: [
                    {
                        name: "The School of AI",
                        image: this.imageloc + "tsai-logo.png"
                    }
                ],
                doi: "Not Issued Yet",
                cred_id: "",
                verify_link: "",
                view_link: "",
                status: 2
            }
        ];
        this.specializations = [
            {
                course: "Python for Everybody",
                providers: [
                    {
                        name: "Coursera",
                        image: this.imageloc + "coursera-logo.png"
                    },
                    {
                        name: "University of Michigan",
                        image: this.imageloc + "uom-logo.png"
                    }
                ],
                doi: "May 2020",
                cred_id: "UCHRKULLR7E6",
                verify_link: "",
                view_link: "",
                status: 3
            },
            {
                course: "Applied Data Science with Python",
                providers: [
                    {
                        name: "Coursera",
                        image: this.imageloc + "coursera-logo.png"
                    },
                    {
                        name: "University of Michigan",
                        image: this.imageloc + "uom-logo.png"
                    }
                ],
                doi: "September 2020",
                cred_id: "FNBC9P32UEFL",
                verify_link: "",
                view_link: "",
                status: 3
            }
        ];
        this.certifications = [
            {
                course: "Problem Solving (Intermediate)",
                providers: [
                    {
                        name: "HackerRank",
                        image: this.imageloc + "hackerrank-logo.png"
                    }
                ],
                doi: "June 2021",
                cred_id: "CB741D67BBB0",
                verify_link: "https://www.hackerrank.com/certificates/cb741d67bbb0",
                view_link: "",
                status: 3
            },
            {
                course: "Rest API (Intermediate)",
                providers: [
                    {
                        name: "HackerRank",
                        image: this.imageloc + "hackerrank-logo.png"
                    }
                ],
                doi: "October 2020",
                cred_id: "CA99F6226499",
                verify_link: "https://www.hackerrank.com/certificates/ca99f6226499",
                view_link: "",
                status: 3
            },
            {
                course: "Python (Basic)",
                providers: [
                    {
                        name: "HackerRank",
                        image: this.imageloc + "hackerrank-logo.png"
                    }
                ],
                doi: "September 2020",
                cred_id: "AC40FCEE0E6C",
                verify_link: "https://www.hackerrank.com/certificates/ac40fcee0e6c",
                view_link: "",
                status: 3
            }
        ];
    }
    ngOnInit() {
    }
}
CertificatesComponent.ɵfac = function CertificatesComponent_Factory(t) { return new (t || CertificatesComponent)(); };
CertificatesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CertificatesComponent, selectors: [["app-certificates"]], decls: 18, vars: 3, consts: [["fxLayout", "column", "fxLayoutAlign", "space-evenly", "fxLayoutGap", "1em", 1, "mt-custom"], [1, "text-large", "fw-300"], [1, "text-medlarge", "fw-300"], ["fxLayout", "row wrap", "fxLayoutGap", "1em grid"], ["fxFlex", "", 3, "certificate", 4, "ngFor", "ngForOf"], [1, "divider"], ["fxLayout", "row wrap", "fxLayoutGap", "1em grid", "fxFill", ""], ["fxFlex", "", 3, "certificate"]], template: function CertificatesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Licenses and Certifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Certifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CertificatesComponent_app_certificate_card_6_Template, 1, 1, "app-certificate-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mat-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Specializations");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CertificatesComponent_app_certificate_card_11_Template, 1, 1, "app-certificate-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "mat-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CertificatesComponent_app_certificate_card_16_Template, 1, 1, "app-certificate-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "mat-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.certifications);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.specializations);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.courses);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutGapDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexFillDirective, _shared_certificate_card_certificate_card_component__WEBPACK_IMPORTED_MODULE_0__.CertificateCardComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective], styles: [".mt-custom[_ngcontent-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  padding: 5em 3em 2em;\n  max-width: 80em;\n  margin: 0px auto;\n}\n\n.divider[_ngcontent-%COMP%] {\n  border-top-width: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlcnRpZmljYXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKIiwiZmlsZSI6ImNlcnRpZmljYXRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdC1jdXN0b217XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgcGFkZGluZzogNWVtIDNlbSAyZW07XHJcbiAgICBtYXgtd2lkdGg6IDgwZW07XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcblxyXG4uZGl2aWRlcntcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDJweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 7015:
/*!********************************************************!*\
  !*** ./src/app/views/home-page/home-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _sections_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sections/banner/banner.component */ 3997);


class HomePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 1, vars: 0, template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-banner");
    } }, directives: [_sections_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5778:
/*!******************************************************!*\
  !*** ./src/app/views/projects/projects.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsComponent": () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 2, vars: 0, template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "projects works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5397:
/*!***************************************!*\
  !*** ./src/app/views/views.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewsModule": () => (/* binding */ ViewsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page/home-page.component */ 7015);
/* harmony import */ var _sections_sections_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sections/sections.module */ 4065);
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-page/about-page.component */ 3981);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ 5830);
/* harmony import */ var _certificates_certificates_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./certificates/certificates.component */ 4159);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.component */ 5778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);














class ViewsModule {
}
ViewsModule.ɵfac = function ViewsModule_Factory(t) { return new (t || ViewsModule)(); };
ViewsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ViewsModule });
ViewsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _sections_sections_module__WEBPACK_IMPORTED_MODULE_1__.SectionsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDividerModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__.FlexLayoutModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ViewsModule, { declarations: [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent, _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_2__.AboutPageComponent, _certificates_certificates_component__WEBPACK_IMPORTED_MODULE_4__.CertificatesComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__.ProjectsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _sections_sections_module__WEBPACK_IMPORTED_MODULE_1__.SectionsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDividerModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__.FlexLayoutModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map