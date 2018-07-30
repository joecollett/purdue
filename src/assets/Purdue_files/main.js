(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations/fade-in.animation.ts":
/*!*************************************************!*\
  !*** ./src/app/animations/fade-in.animation.ts ***!
  \*************************************************/
/*! exports provided: fadeInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInAnimation", function() { return fadeInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        backgroundColor: '#eee',
        opacity: 0
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        backgroundColor: '#cfd8dc',
        opacity: 1
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-in')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-out'))
]);


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\" [hasBackdrop]=\"false\">\n    <mat-drawer #sidenav [mode]=\"'side'\" class=\"sidenav\">\n        <app-nav-items></app-nav-items>   \n    </mat-drawer>\n    <mat-drawer-content>\n        <div class=\"hideNav\" *ngIf=\"navOpen\" (click)=\"toggleNav()\"></div>\n        <div class=\"right\" (window:resize)=\"onResize($event)\" [ngClass]=\"{'first': navOpen == true}\" #mainContent [style.width.px]=\"mainWidth\" >\n            <app-header></app-header>\n            <app-navigation (openNav)=\"openNav($event)\"></app-navigation>\n            <div class=\"content d-flex-md d-flex-direction-column d-flex-justify-content-center d-flex-align-items-center\">\n                <router-outlet></router-outlet>\n            </div>\n            <app-footer></app-footer>\n        </div>    \n    </mat-drawer-content>    \n</mat-drawer-container>\n\n      \n      "

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hideNav {\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  top: 0px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.navOpen = false;
    }
    AppComponent.prototype.openNav = function (event) {
        this.navOpen = !this.navOpen;
        this.mainWidth = this.mainContent.nativeElement.offsetWidth;
        this.sidenav.toggle();
    };
    AppComponent.prototype.toggleNav = function () {
        this.sidenav.toggle();
        this.navOpen = !this.navOpen;
    };
    AppComponent.prototype.onResize = function (event) {
        this.mainWidth = event.target.innerWidth;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mainContent'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "mainContent", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _shared_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/navigation/navigation.component */ "./src/app/shared/navigation/navigation.component.ts");
/* harmony import */ var _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/not-found/not-found.component */ "./src/app/shared/not-found/not-found.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _pages_home_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home/login/login.component */ "./src/app/pages/home/login/login.component.ts");
/* harmony import */ var _pages_home_title_title_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/home/title/title.component */ "./src/app/pages/home/title/title.component.ts");
/* harmony import */ var _pages_home_categories_categories_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/home/categories/categories.component */ "./src/app/pages/home/categories/categories.component.ts");
/* harmony import */ var _pages_home_highlighted_alumni_highlighted_alumni_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/home/highlighted-alumni/highlighted-alumni.component */ "./src/app/pages/home/highlighted-alumni/highlighted-alumni.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _pages_home_highlighted_alumni_featured_featured_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/home/highlighted-alumni/featured/featured.component */ "./src/app/pages/home/highlighted-alumni/featured/featured.component.ts");
/* harmony import */ var _shared_navigation_nav_items_nav_items_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/navigation/nav-items/nav-items.component */ "./src/app/shared/navigation/nav-items/nav-items.component.ts");
/* harmony import */ var _pages_edit_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/edit/edit.component */ "./src/app/pages/edit/edit.component.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _pages_edit_main_text_main_text_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/edit/main-text/main-text.component */ "./src/app/pages/edit/main-text/main-text.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_edit_edit_categories_edit_categories_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/edit/edit-categories/edit-categories.component */ "./src/app/pages/edit/edit-categories/edit-categories.component.ts");
/* harmony import */ var _shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/confirmation-modal/confirmation-modal.component */ "./src/app/shared/confirmation-modal/confirmation-modal.component.ts");
/* harmony import */ var _pages_edit_edit_stories_edit_stories_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/edit/edit-stories/edit-stories.component */ "./src/app/pages/edit/edit-stories/edit-stories.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/admin/admin.component */ "./src/app/pages/admin/admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var appRoutes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'login', component: _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_27__["AdminComponent"] },
    { path: 'edit', component: _pages_edit_edit_component__WEBPACK_IMPORTED_MODULE_19__["EditComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AlwaysAuthGuard"]] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _shared_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
                _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _pages_home_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _pages_home_title_title_component__WEBPACK_IMPORTED_MODULE_10__["TitleComponent"],
                _pages_home_categories_categories_component__WEBPACK_IMPORTED_MODULE_11__["CategoriesComponent"],
                _pages_home_highlighted_alumni_highlighted_alumni_component__WEBPACK_IMPORTED_MODULE_12__["HighlightedAlumniComponent"],
                _pages_home_highlighted_alumni_featured_featured_component__WEBPACK_IMPORTED_MODULE_17__["FeaturedComponent"],
                _shared_navigation_nav_items_nav_items_component__WEBPACK_IMPORTED_MODULE_18__["NavItemsComponent"],
                _pages_edit_edit_component__WEBPACK_IMPORTED_MODULE_19__["EditComponent"],
                _pages_edit_main_text_main_text_component__WEBPACK_IMPORTED_MODULE_21__["MainTextComponent"],
                _pages_edit_edit_categories_edit_categories_component__WEBPACK_IMPORTED_MODULE_23__["EditCategoriesComponent"],
                _shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_24__["ConfirmationModalComponent"],
                _pages_edit_edit_stories_edit_stories_component__WEBPACK_IMPORTED_MODULE_25__["EditStoriesComponent"],
                _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_27__["AdminComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"]
            ],
            providers: [_service_api_service__WEBPACK_IMPORTED_MODULE_20__["ApiService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AlwaysAuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            entryComponents: [_shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_24__["ConfirmationModalComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AlwaysAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlwaysAuthGuard", function() { return AlwaysAuthGuard; });
var AlwaysAuthGuard = /** @class */ (function () {
    function AlwaysAuthGuard() {
    }
    AlwaysAuthGuard.prototype.canActivate = function () {
        return true;
    };
    return AlwaysAuthGuard;
}());



/***/ }),

/***/ "./src/app/models/adminLogin.ts":
/*!**************************************!*\
  !*** ./src/app/models/adminLogin.ts ***!
  \**************************************/
/*! exports provided: AdminLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLog", function() { return AdminLog; });
var AdminLog = /** @class */ (function () {
    function AdminLog(un, pw, uid, url) {
        this.un = un;
        this.pw = pw;
        this.uid = uid;
        this.url = url;
    }
    return AdminLog;
}());



/***/ }),

/***/ "./src/app/models/cat.ts":
/*!***********************************!*\
  !*** ./src/app/models/cat.ts ***!
  \***********************************/
/*! exports provided: cat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cat", function() { return cat; });
var cat = /** @class */ (function () {
    function cat(name, desc, img, color, ID) {
        this.name = name;
        this.desc = desc;
        this.img = img;
        this.color = color;
        this.ID = ID;
    }
    return cat;
}());



/***/ }),

/***/ "./src/app/models/title.ts":
/*!************************************!*\
  !*** ./src/app/models/title.ts ***!
  \************************************/
/*! exports provided: title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
var title = /** @class */ (function () {
    function title(heading, details, buttonText, buttonLink, ID, buttonStyle) {
        this.heading = heading;
        this.details = details;
        this.buttonText = buttonText;
        this.buttonLink = buttonLink;
        this.ID = ID;
        this.buttonStyle = buttonStyle;
    }
    return title;
}());



/***/ }),

/***/ "./src/app/models/Story.ts":
/*!*************************************!*\
  !*** ./src/app/models/Story.ts ***!
  \*************************************/
/*! exports provided: Story */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Story", function() { return Story; });
var Story = /** @class */ (function () {
    function Story(title, Name, image, URL, ID) {
        this.title = title;
        this.Name = Name;
        this.image = image;
        this.URL = URL;
        this.ID = ID;
    }
    return Story;
}());



/***/ }),

/***/ "./src/app/pages/admin/admin.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/admin/admin.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login margin-left-md-md  margin-right-md\" *ngIf=\"data\">\n  <h2 class=\"padding-bottom-md padding-top-md\">Admin Login</h2>\n  <form (ngSubmit)=\"login(form)\" #adminLogin=\"ngForm\">\n    <div class=\"input-group margin-top-md\">\n        <label for=\"un\">Username</label>\n        <input type=\"text\" id=\"username\" [(ngModel)]=\"form.un\" name=\"un\">\n    </div>\n    <div class=\"input-group margin-top-md\">\n        <label for=\"pw\">Password</label>\n        <input type=\"password\" id=\"password\" [(ngModel)]=\"form.pw\" name=\"pw\">\n    </div>\n    <button class=\"button-primary\">Login</button>\n  </form>\n</div>\n\n<pre>\n  {{form | json}}\n</pre>"

/***/ }),

/***/ "./src/app/pages/admin/admin.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/admin/admin.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin/admin.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _models_adminLogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/adminLogin */ "./src/app/models/adminLogin.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(api) {
        this.api = api;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getConfig().subscribe(function (response) {
            _this.data = response;
            _this.form = new _models_adminLogin__WEBPACK_IMPORTED_MODULE_2__["AdminLog"]('', '', _this.data.uid, _this.data.url);
        });
    };
    AdminComponent.prototype.login = function () {
        this.api.isLoggedIn(this.form).subscribe(function (response) { return console.log(response); }, function (err) { return console.log(err); });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/pages/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/pages/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/edit/edit-categories/edit-categories.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/edit/edit-categories/edit-categories.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n\n  <div class=\"d-flex margin-top-md margin-bottom-md d-justify-content-space-between\">\n      <h2>Categories</h2>\n      <button mat-raised-button color=\"submit\" (click)=\"toggleAddView()\">Add New</button>\n  </div>\n\n  <form *ngIf=\"toggle == true;\" action=\"\">\n    <h3>Add new category</h3>\n    <mat-card>\n      <form (ngSubmit)=\"addCat(i)\" #addCatForm=\"ngForm\">\n        <div *ngIf=\"addCatForm.form.controls.addName?.invalid && (addCatForm.form.controls.addName?.dirty || addCatForm.form.controls.addName?.touched)\">\n          <p *ngIf=\"addCatForm.controls.addName?.errors.required\" class=\"bg-danger margin-bottom-sm padding-sm\">Name is required</p>\n        </div>             \n        <mat-form-field>\n          <input matInput placeholder=\"Name\" required [(ngModel)]=\"add.name\" name=\"addName\" #addName=\"ngModel\" required>\n        </mat-form-field>\n        <div *ngIf=\"addCatForm.form.controls.addDesc?.invalid && (addCatForm.form.controls.addDesc?.dirty || addCatForm.form.controls.addDesc?.touched)\">\n          <p *ngIf=\"addCatForm.controls.addDesc?.errors.required\" class=\"bg-danger margin-bottom-sm padding-sm\">Description is required</p>\n        </div>          \n        <mat-form-field>\n          <input matInput placeholder=\"Description\" required [(ngModel)]=\"add.desc\" name=\"addDesc\">\n        </mat-form-field>   \n        <div *ngIf=\"addCatForm.form.controls.addImg?.invalid && (addCatForm.form.controls.addImg?.dirty || addCatForm.form.controls.addImg?.touched)\">\n          <p *ngIf=\"addCatForm.controls.addImg?.errors.required\" class=\"bg-danger margin-bottom-sm padding-sm\">Image is required</p>\n        </div>            \n        <mat-form-field>\n          <input matInput placeholder=\"Image\" required [(ngModel)]=\"add.img\" name=\"addImg\">\n        </mat-form-field>   \n        <div *ngIf=\"addCatForm.form.controls.addColor?.invalid && (addCatForm.form.controls.addColor?.dirty || addCatForm.form.controls.addColor?.touched)\">\n          <p *ngIf=\"addCatForm.controls.addColor?.errors.required\" class=\"bg-danger margin-bottom-sm padding-sm\">Colour is required</p>\n        </div>            \n        <mat-form-field>\n          <input matInput placeholder=\"Colour\" required [(ngModel)]=\"add.color\" name=\"addColor\">\n        </mat-form-field>\n        <div class=\"d-flex d-flex-direction-row-reverse margin-top-md\">\n          <button mat-raised-button color=\"submit\" class=\"margin-left-md\" type=\"submit\" [disabled]=\"!addCatForm.valid\">Save Changes</button>\n          <button mat-raised-button type=\"button\" (click)=\"cancel(i)\">Cancel</button>\n        </div>\n      </form>         \n    </mat-card>\n  </form>\n  \n  <mat-accordion *ngIf=\"categories\">\n    <h3>Edit categories</h3>\n    <mat-expansion-panel *ngFor=\"let cat of categories.categories; let i = index;\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <strong>{{cat?.name}}</strong>\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <form (ngSubmit)=\"onSubmit(i)\" #editCatForm=\"ngForm\">\n        <div *ngIf=\"editCatForm.form.controls.name?.invalid && (editCatForm.form.controls.name?.dirty || editCatForm.form.controls.name?.touched)\">\n          <p *ngIf=\"editCatForm.controls.name?.errors.required\" class=\"bg-danger margin-bottom-sm padding-sm\">Name is required</p>\n        </div>           \n        <mat-form-field>\n          <input matInput placeholder=\"Name\" required [(ngModel)]=\"model[i].name\" name=\"name\">\n        </mat-form-field>\n        <div *ngIf=\"editCatForm.form.controls.desc?.invalid && (editCatForm.form.controls.desc?.dirty || editCatForm.form.controls.desc?.touched)\">\n          <p *ngIf=\"editCatForm.controls.desc?.errors.required\" class=\"bg-danger margin-bottom-sm padding-sm\">Description is required</p>\n        </div>           \n        <mat-form-field>\n          <input matInput placeholder=\"Description\" required [(ngModel)]=\"model[i].desc\" name=\"desc\">\n        </mat-form-field>   \n        <div *ngIf=\"editCatForm.form.controls.image?.invalid && (editCatForm.form.controls.image?.dirty || editCatForm.form.controls.image?.touched)\">\n          <p *ngIf=\"editCatForm.controls.image?.errors.required\" class=\"bg-danger margin-bottom-sm padding-sm\">Image is required</p>\n        </div>           \n        <mat-form-field>\n          <input matInput placeholder=\"Image\" required [(ngModel)]=\"model[i].img\" name=\"image\">\n        </mat-form-field>  \n        <div *ngIf=\"editCatForm.form.controls.color?.invalid && (editCatForm.form.controls.color?.dirty || editCatForm.form.controls.color?.touched)\">\n          <p *ngIf=\"editCatForm.controls.color?.errors.required\" class=\"bg-danger margin-bottom-sm padding-sm\">Colour is required</p>\n        </div>          \n        <mat-form-field>\n          <input matInput placeholder=\"Colour\" required [(ngModel)]=\"model[i].color\" name=\"color\">\n        </mat-form-field>\n        <div class=\"d-flex d-flex-direction-row-reverse margin-top-md\">\n          <button mat-raised-button color=\"submit\" class=\"margin-left-md\" type=\"submit\" [disabled]=\"!editCatForm.valid\">Save Changes</button>\n          <button mat-raised-button color=\"warn\" type=\"button\" (click)=\"remove(model[i].ID)\">Remove</button>\n          <button mat-raised-button type=\"button\" class=\"margin-right-md\" (click)=\"reset(i)\">Reset</button>\n        </div>  \n      </form>      \n    </mat-expansion-panel> \n  </mat-accordion>\n\n</mat-card>\n  \n  "

/***/ }),

/***/ "./src/app/pages/edit/edit-categories/edit-categories.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/edit/edit-categories/edit-categories.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/edit/edit-categories/edit-categories.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/edit/edit-categories/edit-categories.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoriesComponent", function() { return EditCategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _models_editCat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/cat */ "./src/app/models/cat.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/confirmation-modal/confirmation-modal.component */ "./src/app/shared/confirmation-modal/confirmation-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditCategoriesComponent = /** @class */ (function () {
    function EditCategoriesComponent(apiService, dialog) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.toggle = false;
    }
    EditCategoriesComponent.prototype.openDialog = function (data, type, text) {
        var _this = this;
        this.dialogRef = this.dialog.open(_shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationModalComponent"], {
            width: '500px',
            data: { text: text }
        });
        this.dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (type == 'add') {
                    _this.toggle = !_this.toggle;
                    _this.apiService.addCategory(data).subscribe(function (response) {
                        _this.add = new _models_editCat__WEBPACK_IMPORTED_MODULE_2__["cat"]('', '', '', '', null);
                    }, function (err) { return console.log(err); });
                }
                if (type == 'edit') {
                    var cat = _this.model[data];
                    _this.categories.categories[data] = cat;
                    _this.apiService.updateCategory(_this.model[data]).subscribe(function (response) { return console.log(response); }, function (err) { return console.log(err); });
                }
                if (type == 'remove') {
                    _this.apiService.deleteCategory(data).subscribe(function (response) { return console.log(response); }, function (err) { return console.log(err); });
                }
                if (type == 'cancel') {
                    _this.add = new _models_editCat__WEBPACK_IMPORTED_MODULE_2__["cat"]('', '', '', '', null);
                    _this.toggle = !_this.toggle;
                }
                if (type == 'reset') {
                    _this.model[data] = _this.categories.categories[data];
                }
            }
            setTimeout(function () {
                _this.getData();
            }, 200);
        });
    };
    EditCategoriesComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    EditCategoriesComponent.prototype.onSubmit = function (index) {
        this.openDialog(index, 'edit', 'Are you sure you wish to edit this category?');
    };
    EditCategoriesComponent.prototype.remove = function (index) {
        this.openDialog(index, 'remove', 'Are you sure you wish to remove this category?');
    };
    EditCategoriesComponent.prototype.addCat = function () {
        this.openDialog(this.add, 'add', 'Are you sure you wish to add this category?');
    };
    EditCategoriesComponent.prototype.toggleAddView = function () {
        this.toggle = !this.toggle;
    };
    EditCategoriesComponent.prototype.cancel = function (i) {
        this.openDialog(i, 'cancel', 'Are you sure you wish to cancel adding this category? Once confirmed these details will be lost.');
    };
    EditCategoriesComponent.prototype.reset = function (i) {
        this.openDialog(i, 'reset', 'Are you sure you want to reset your changes?');
    };
    EditCategoriesComponent.prototype.getData = function () {
        var _this = this;
        this.add = new _models_editCat__WEBPACK_IMPORTED_MODULE_2__["cat"]('', '', '', '', null);
        this.apiService.getConfig().subscribe(function (data) {
            _this.categories = data;
            var model = [];
            lodash__WEBPACK_IMPORTED_MODULE_4__["forEach"](_this.categories.categories, function (value, index) {
                var row = new _models_editCat__WEBPACK_IMPORTED_MODULE_2__["cat"](value.name, value.desc, value.img, value.color, value.ID);
                model.push(row);
            });
            _this.model = model;
        });
    };
    EditCategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-categories',
            template: __webpack_require__(/*! ./edit-categories.component.html */ "./src/app/pages/edit/edit-categories/edit-categories.component.html"),
            styles: [__webpack_require__(/*! ./edit-categories.component.scss */ "./src/app/pages/edit/edit-categories/edit-categories.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], EditCategoriesComponent);
    return EditCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/pages/edit/edit-stories/edit-stories.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/edit/edit-stories/edit-stories.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <div class=\"d-flex margin-top-md margin-bottom-md d-justify-content-space-between\">\n    <h2>Stories</h2>\n    <button mat-raised-button color=\"submit\" (click)=\"toggleAddView()\">Add New</button>\n  </div>\n  <form *ngIf=\"toggle == true;\" #editMainForm=\"ngForm\">\n    <h3>Add new story</h3>\n    <mat-card>\n      <form (ngSubmit)=\"addCat(i)\" #addCatForm=\"ngForm\">\n        <div *ngIf=\"addCatForm.form.controls.addName?.invalid && (addCatForm.form.controls.addName?.dirty || addCatForm.form.controls.addName?.touched)\">\n          <p *ngIf=\"addCatForm.controls.addName?.errors.required\" class=\"bg-danger margin-bottom-sm padding-sm\">Name is required</p>\n        </div>             \n        <mat-form-field>\n          <input matInput placeholder=\"Name\" required [(ngModel)]=\"add.Name\" name=\"addName\">\n        </mat-form-field>\n        <div *ngIf=\"addCatForm.form.controls.addTitle?.invalid && (addCatForm.form.controls.addTitle?.dirty || addCatForm.form.controls.addTitle?.touched)\">\n          <p *ngIf=\"addCatForm.controls.addTitle?.errors.required\" class=\"bg-danger margin-bottom-sm padding-sm\">Title is required</p>\n        </div>                   \n        <mat-form-field>\n          <input matInput placeholder=\"Title\" required  [(ngModel)]=\"add.title\" name=\"addTitle\">\n        </mat-form-field>    \n        <div *ngIf=\"addCatForm.form.controls.addImg?.invalid && (addCatForm.form.controls.addImg?.dirty || addCatForm.form.controls.addImg?.touched)\">\n          <p *ngIf=\"addCatForm.controls.addImg?.errors.required\" class=\"bg-danger margin-bottom-sm padding-sm\">Image is required</p>\n        </div>            \n        <mat-form-field>\n          <input matInput placeholder=\"Image\" required [(ngModel)]=\"add.image\" name=\"addImg\">\n        </mat-form-field>   \n        <div *ngIf=\"addCatForm.form.controls.addURL?.invalid && (addCatForm.form.controls.addURL?.dirty || addCatForm.form.controls.addURL?.touched)\">\n          <p *ngIf=\"addCatForm.controls.addURL?.errors.required\" class=\"bg-danger margin-bottom-sm padding-sm\">URL is required</p>\n        </div>              \n        <mat-form-field>\n          <input matInput placeholder=\"URL\" required [(ngModel)]=\"add.URL\" name=\"addURL\">\n        </mat-form-field>\n        <div class=\"d-flex d-flex-direction-row-reverse margin-top-md\">\n          <button mat-raised-button color=\"submit\" class=\"margin-left-md\" type=\"submit\" [disabled]=\"!addCatForm.valid\">Save Changes</button>\n          <button mat-raised-button type=\"button\" (click)=\"remove(i)\">Cancel</button>\n        </div>\n      </form>      \n    </mat-card>\n  </form>\n  <mat-accordion *ngIf=\"categories\">\n    <h3>Edit Stories</h3>\n    <mat-expansion-panel *ngFor=\"let story of categories.stories; let i = index;\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <strong>{{story.Name}}</strong>\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <form (ngSubmit)=\"onSubmit(i)\" #editCatForm=\"ngForm\">\n        <div *ngIf=\"editCatForm.form.controls.name?.invalid && (editCatForm.form.controls.name?.dirty || editCatForm.form.controls.name?.touched)\">\n          <p *ngIf=\"editCatForm.controls.name?.errors.required\" class=\"bg-danger margin-bottom-sm padding-sm\">Name is required</p>\n        </div>          \n        <mat-form-field>\n          <input matInput placeholder=\"Name\" required [(ngModel)]=\"model[i].Name\" name=\"name\">\n        </mat-form-field>\n        <div *ngIf=\"editCatForm.form.controls.title?.invalid && (editCatForm.form.controls.title?.dirty || editCatForm.form.controls.title?.touched)\">\n          <p *ngIf=\"editCatForm.controls.title?.errors.required\" class=\"bg-danger margin-bottom-sm padding-sm\">Title is required</p>\n        </div>            \n        <mat-form-field>\n          <input matInput placeholder=\"Title\" required [(ngModel)]=\"model[i].title\" name=\"title\">\n        </mat-form-field>    \n        <div *ngIf=\"editCatForm.form.controls.img?.invalid && (editCatForm.form.controls.img?.dirty || editCatForm.form.controls.img?.touched)\">\n          <p *ngIf=\"editCatForm.controls.img?.errors.required\" class=\"bg-danger margin-bottom-sm padding-sm\">Image is required</p>\n        </div>         \n        <mat-form-field>\n          <input matInput placeholder=\"Image\" required [(ngModel)]=\"model[i].image\" name=\"img\">\n        </mat-form-field>  \n        <div *ngIf=\"editCatForm.form.controls.url?.invalid && (editCatForm.form.controls.url?.dirty || editCatForm.form.controls.url?.touched)\">\n            <p *ngIf=\"editCatForm.controls.url?.errors.required\" class=\"bg-danger margin-bottom-sm padding-sm\">URL is required</p>\n          </div>            \n        <mat-form-field>\n          <input matInput placeholder=\"URL\" required [(ngModel)]=\"model[i].URL\" name=\"url\">\n        </mat-form-field>\n        <div class=\"d-flex d-flex-direction-row-reverse margin-top-md\">\n          <button mat-raised-button color=\"submit\" class=\"margin-left-md\" type=\"submit\" [disabled]=\"!editCatForm.valid\">Save Changes</button>\n          <button mat-raised-button color=\"warn\" type=\"button\" (click)=\"remove(model[i].ID)\">Remove</button>\n          <button mat-raised-button type=\"button\" class=\"margin-right-md\" (click)=\"reset(i)\">Reset</button>\n        </div>\n      </form>     \n    </mat-expansion-panel> \n  </mat-accordion>\n</mat-card>\n  \n  "

/***/ }),

/***/ "./src/app/pages/edit/edit-stories/edit-stories.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/edit/edit-stories/edit-stories.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/edit/edit-stories/edit-stories.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/edit/edit-stories/edit-stories.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditStoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStoriesComponent", function() { return EditStoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _models_editStory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/Story */ "./src/app/models/Story.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/confirmation-modal/confirmation-modal.component */ "./src/app/shared/confirmation-modal/confirmation-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditStoriesComponent = /** @class */ (function () {
    function EditStoriesComponent(apiService, dialog) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.toggle = false;
    }
    EditStoriesComponent.prototype.openDialog = function (data, type, text) {
        var _this = this;
        this.dialogRef = this.dialog.open(_shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationModalComponent"], {
            width: '500px',
            data: { text: text }
        });
        this.dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (type == 'add') {
                    _this.toggle = !_this.toggle;
                    console.log(data);
                    _this.apiService.addStory(data).subscribe(function (response) {
                        _this.add = new _models_editStory__WEBPACK_IMPORTED_MODULE_2__["Story"]('', '', '', '', null);
                    }, function (err) { return console.log(err); });
                }
                if (type == 'edit') {
                    _this.apiService.updateStory(_this.model[data]).subscribe(function (response) { return console.log(response); }, function (err) { return console.log(err); });
                }
                if (type == 'reset') {
                    _this.model[data] = _this.categories.stories[data];
                }
                if (type == 'remove') {
                    _this.apiService.deleteStory(data).subscribe(function (response) { return console.log(response); }, function (err) { return console.log(err); });
                }
            }
            setTimeout(function () {
                _this.getData();
            }, 200);
        });
    };
    EditStoriesComponent.prototype.ngOnInit = function () {
        this.add = new _models_editStory__WEBPACK_IMPORTED_MODULE_2__["Story"]('', '', '', '', null);
        this.getData();
    };
    EditStoriesComponent.prototype.onSubmit = function (index) {
        this.openDialog(index, 'edit', 'Are you sure you wish to edit this story?');
    };
    EditStoriesComponent.prototype.remove = function (index) {
        this.openDialog(index, 'remove', 'Are you sure you wish to remove this story?');
    };
    EditStoriesComponent.prototype.addCat = function () {
        this.openDialog(this.add, 'add', 'Are you sure you wish to remove this story?');
    };
    EditStoriesComponent.prototype.toggleAddView = function () {
        this.toggle = !this.toggle;
    };
    EditStoriesComponent.prototype.reset = function (i) {
        this.openDialog(i, 'reset', 'Are you sure you want to reset your changes?');
    };
    EditStoriesComponent.prototype.getData = function () {
        var _this = this;
        this.apiService.getConfig().subscribe(function (data) {
            _this.categories = data;
            var model = [];
            lodash__WEBPACK_IMPORTED_MODULE_4__["forEach"](_this.categories.stories, function (value, index) {
                var row = new _models_editStory__WEBPACK_IMPORTED_MODULE_2__["Story"](value.title, value.Name, value.image, value.URL, value.ID);
                model.push(row);
            });
            _this.model = model;
        });
    };
    EditStoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-stories',
            template: __webpack_require__(/*! ./edit-stories.component.html */ "./src/app/pages/edit/edit-stories/edit-stories.component.html"),
            styles: [__webpack_require__(/*! ./edit-stories.component.scss */ "./src/app/pages/edit/edit-stories/edit-stories.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], EditStoriesComponent);
    return EditStoriesComponent;
}());



/***/ }),

/***/ "./src/app/pages/edit/edit.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/edit/edit.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin: 0 auto;\">\n  <h1 class=\"margin-top-xl\" style=\"width:100% !important;\">Edit Homepage</h1>\n  <mat-tab-group mat-stretch-tabs class=\"margin-top-xl\" style=\"width:100% !important;\">\n    <mat-tab label=\"Title\">\n      <app-main-text></app-main-text>\n    </mat-tab>\n    <mat-tab label=\"Categories\"> \n      <app-edit-categories></app-edit-categories> \n    </mat-tab>\n    <mat-tab label=\"Stories\">\n      <app-edit-stories></app-edit-stories>\n    </mat-tab>\n  </mat-tab-group>  \n</div>"

/***/ }),

/***/ "./src/app/pages/edit/edit.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/edit/edit.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/edit/edit.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/edit/edit.component.ts ***!
  \**********************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditComponent = /** @class */ (function () {
    function EditComponent() {
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/pages/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/edit/edit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/edit/main-text/main-text.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/edit/main-text/main-text.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <h2 class=\"margin-top-md margin-bottom-lg\">Title</h2>\n  <h3>Edit Title</h3>\n  <form *ngIf=\"main\" class=\"example-form\" (ngSubmit)=\"onSubmit()\" #editMainForm=\"ngForm\" novalidate>\n    <div *ngIf=\"editMainForm.form.controls.heading?.invalid && (editMainForm.form.controls.heading?.dirty || editMainForm.form.controls.heading?.touched)\" class=\"alert alert-danger\">\n      <p *ngIf=\"editMainForm.controls.heading?.errors.required\" class=\"bg-danger margin-bottom-sm padding-sm\">Heading is required</p>\n    </div>        \n    <mat-form-field>\n      <input matInput placeholder=\"Main Heading\" required id=\"heading\" [(ngModel)]=\"edit.heading\" name=\"heading\" #heading=\"ngModel\">\n    </mat-form-field>\n    <div *ngIf=\"editMainForm.form.controls.details?.invalid && (editMainForm.form.controls.details?.dirty || editMainForm.form.controls.details?.touched)\" class=\"alert alert-danger\">\n      <p *ngIf=\"editMainForm.controls.details?.errors.required\" class=\"bg-danger margin-bottom-sm padding-sm\">Details is required</p>\n    </div>         \n    <mat-form-field>\n      <textarea matInput placeholder=\"Main details\" required [(ngModel)]=\"edit.details\" name=\"details\"></textarea>\n    </mat-form-field>\n    <div *ngIf=\"editMainForm.form.controls.buttonText?.invalid && (editMainForm.form.controls.buttonText?.dirty || editMainForm.form.controls.buttonText?.touched)\" class=\"alert alert-danger\">\n      <p *ngIf=\"editMainForm.controls.buttonText?.errors.required\" class=\"bg-danger margin-bottom-sm padding-sm\">Button text is required</p>\n    </div>         \n    <mat-form-field>\n      <input matInput placeholder=\"Main button\" required [(ngModel)]=\"edit.buttonText\" name=\"buttonText\">\n    </mat-form-field>  \n    <div *ngIf=\"editMainForm.form.controls.buttonLink?.invalid && (editMainForm.form.controls.buttonLink?.dirty || editMainForm.form.controls.buttonLink?.touched)\" class=\"alert alert-danger\">\n        <p *ngIf=\"editMainForm.controls.buttonLink?.errors.required\" class=\"bg-danger margin-bottom-sm padding-sm\">Button text is required</p>\n      </div>       \n    <mat-form-field>\n      <input matInput placeholder=\"Main button link\" required [(ngModel)]=\"edit.buttonLink\" name=\"buttonLink\">\n    </mat-form-field> \n    <div class=\"d-flex d-flex-direction-row-reverse margin-top-md\">\n      <button mat-raised-button color=\"submit\" class=\"margin-left-md\" [disabled]=\"!editMainForm.valid\">Save Changes</button>\n      <button mat-raised-button type=\"button\" (click)=\"reset()\">Reset</button>\n    </div>  \n  </form>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/pages/edit/main-text/main-text.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/edit/main-text/main-text.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/edit/main-text/main-text.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/edit/main-text/main-text.component.ts ***!
  \*************************************************************/
/*! exports provided: MainTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTextComponent", function() { return MainTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _models_editMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/title */ "./src/app/models/title.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/confirmation-modal/confirmation-modal.component */ "./src/app/shared/confirmation-modal/confirmation-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainTextComponent = /** @class */ (function () {
    function MainTextComponent(apiService, dialog) {
        this.apiService = apiService;
        this.dialog = dialog;
    }
    MainTextComponent.prototype.openDialog = function (data, type, text) {
        var _this = this;
        this.dialogRef = this.dialog.open(_shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationModalComponent"], {
            width: '500px',
            data: { text: text }
        });
        this.dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (type == 'submit') {
                    _this.main.title = _this.edit;
                    _this.apiService.updateTitle(_this.main['title']).subscribe(function (response) { return console.log(response); }, function (err) { return console.log(err); });
                }
                if (type == 'reset') {
                    _this.edit = new _models_editMain__WEBPACK_IMPORTED_MODULE_2__["title"](_this.main.title['heading'], _this.main.title['details'], _this.main.title['buttonText'], _this.main.title['heading'], _this.main.title['ID'], _this.main.title['buttonStyle']);
                }
            }
            setTimeout(function () {
                _this.getData();
            }, 200);
        });
    };
    MainTextComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    MainTextComponent.prototype.onSubmit = function (index) {
        this.openDialog(index, 'submit', 'Are you sure you wish to these changes?');
    };
    MainTextComponent.prototype.reset = function () {
        this.openDialog(0, 'reset', 'Are you sure you wish to reset these changes?');
    };
    MainTextComponent.prototype.getData = function () {
        var _this = this;
        this.apiService.getConfig().subscribe(function (data) {
            _this.main = data;
            _this.edit = new _models_editMain__WEBPACK_IMPORTED_MODULE_2__["title"](_this.main.title['heading'], _this.main.title['details'], _this.main.title['buttonText'], _this.main.title['heading'], _this.main.title['ID'], _this.main.title['buttonStyle']);
        });
    };
    MainTextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-text',
            template: __webpack_require__(/*! ./main-text.component.html */ "./src/app/pages/edit/main-text/main-text.component.html"),
            styles: [__webpack_require__(/*! ./main-text.component.scss */ "./src/app/pages/edit/main-text/main-text.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], MainTextComponent);
    return MainTextComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/categories/categories.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/home/categories/categories.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"categories\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" class=\"margin-top-xl\">\n  <div class=\"text-white padding-md card-cat d-flex-1\" *ngFor=\"let category of categories?.categories\" [style.background-image]=\"'url(' + category?.img + ')'\">\n      <h3 class=\"margin-bottom-none\">{{category?.name}}</h3>\n      <p>{{category?.desc}}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/home/categories/categories.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/home/categories/categories.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/categories/categories.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/home/categories/categories.component.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/api.service */ "./src/app/service/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(apiService) {
        this.apiService = apiService;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getConfig()
            .subscribe(function (data) { return _this.categories = data; });
    };
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/pages/home/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.scss */ "./src/app/pages/home/categories/categories.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/highlighted-alumni/featured/featured.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/home/highlighted-alumni/featured/featured.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [style.background-image]=\"'url(' + featured?.image + ')'\" class=\"featured-container\">\n    <a [href]=\"featured?.url\">\n        <h2 class=\"margin-xl text-white d-flex-wrap\">\n            <span class=\"margin-right-md\">Meet </span> {{featured?.Name}}\n            <i class=\"fas fa-arrow-right margin-top-sm\"></i>\n        </h2>\n    </a>\n</div>"

/***/ }),

/***/ "./src/app/pages/home/highlighted-alumni/featured/featured.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/home/highlighted-alumni/featured/featured.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/highlighted-alumni/featured/featured.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/home/highlighted-alumni/featured/featured.component.ts ***!
  \******************************************************************************/
/*! exports provided: FeaturedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedComponent", function() { return FeaturedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_fade_in_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../animations/fade-in.animation */ "./src/app/animations/fade-in.animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeaturedComponent = /** @class */ (function () {
    function FeaturedComponent() {
    }
    FeaturedComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FeaturedComponent.prototype, "featured", void 0);
    FeaturedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-featured',
            template: __webpack_require__(/*! ./featured.component.html */ "./src/app/pages/home/highlighted-alumni/featured/featured.component.html"),
            styles: [__webpack_require__(/*! ./featured.component.scss */ "./src/app/pages/home/highlighted-alumni/featured/featured.component.scss")],
            animations: [_animations_fade_in_animation__WEBPACK_IMPORTED_MODULE_1__["fadeInAnimation"]],
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [])
    ], FeaturedComponent);
    return FeaturedComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/highlighted-alumni/highlighted-alumni.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/home/highlighted-alumni/highlighted-alumni.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"margin-top-xl\" fxLayout=\"row\" fxLayout.sm=\"column-reverse\" fxLayout.xs=\"column-reverse\" >\n    <div fxFlex=\"40\" class=\"bg-grey d-flex d-flex-direction-column\" style=\"position:relative;\">\n        <div *ngFor=\"let story of stories; let i = index\" style=\"position:relative\" [class.active]=\"story?.title==featured.title\" (click)=\"updateCount(i)\" class=\"d-flex-1 padding-left-lg padding-right-lg d-flex d-flex-direction-column d-justify-content-center pointer\">\n          <div>\n              <h3>{{story?.title}}</h3>\n              <p>{{story?.Ctime | date:'mediumDate'}}</p> \n          </div>\n           <div class=\"triangle\">\n              <div></div>\n              <div></div>\n              <div></div>\n           </div>\n        </div>\n    </div>\n    <app-featured [featured]=\"featured\" [@fadeInAnimation]=\"state\" fxFlex=\"60\"></app-featured>\n</div>"

/***/ }),

/***/ "./src/app/pages/home/highlighted-alumni/highlighted-alumni.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/home/highlighted-alumni/highlighted-alumni.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/highlighted-alumni/highlighted-alumni.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/home/highlighted-alumni/highlighted-alumni.component.ts ***!
  \*******************************************************************************/
/*! exports provided: HighlightedAlumniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightedAlumniComponent", function() { return HighlightedAlumniComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_fade_in_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../animations/fade-in.animation */ "./src/app/animations/fade-in.animation.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/api.service */ "./src/app/service/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HighlightedAlumniComponent = /** @class */ (function () {
    function HighlightedAlumniComponent(apiService) {
        this.apiService = apiService;
    }
    HighlightedAlumniComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getConfig().subscribe(function (data) {
            _this.count = 0;
            _this.stories = data['stories'];
            _this.featured = _this.stories[_this.count];
            _this.state = 'inactive';
            setTimeout(function () {
                _this.state = 'active';
            }, 700);
            _this.timer = setInterval(function () {
                _this.autoCount(_this.count);
            }, 8000);
        });
    };
    HighlightedAlumniComponent.prototype.updateCount = function (index) {
        var _this = this;
        this.state = 'inactive';
        clearInterval(this.timer);
        this.timer = setInterval(function () {
            _this.autoCount(_this.count);
        }, 8000);
        setTimeout(function () {
            _this.state = 'active';
            _this.count = index;
            _this.featured = _this.stories[index];
        }, 600);
    };
    HighlightedAlumniComponent.prototype.autoCount = function (index) {
        var _this = this;
        this.count = this.count + 1;
        if (this.count == this.stories.length) {
            this.count = 0;
        }
        this.state = 'inactive';
        setTimeout(function () {
            _this.state = 'active';
            _this.featured = _this.stories[_this.count];
        }, 600);
    };
    HighlightedAlumniComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-highlighted-alumni',
            template: __webpack_require__(/*! ./highlighted-alumni.component.html */ "./src/app/pages/home/highlighted-alumni/highlighted-alumni.component.html"),
            styles: [__webpack_require__(/*! ./highlighted-alumni.component.scss */ "./src/app/pages/home/highlighted-alumni/highlighted-alumni.component.scss")],
            animations: [_animations_fade_in_animation__WEBPACK_IMPORTED_MODULE_1__["fadeInAnimation"]]
        }),
        __metadata("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], HighlightedAlumniComponent);
    return HighlightedAlumniComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container d-flex d-flex-direction-column\">\n    <div class=\"margin-top-xl-md margin-top-md\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"0.5%\">\n        <app-title fxFlex=\"67%\"></app-title>\n        <app-login fxFlex=\"33%\"></app-login>\n    </div>\n    <app-categories></app-categories>  \n    <app-highlighted-alumni></app-highlighted-alumni>\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/home/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login margin-left-md-md  margin-right-md\" *ngIf=\"data\">\n  <h2 class=\"padding-bottom-md padding-top-md\">Login</h2>\n  <form (ngSubmit)=\"login(form)\" #userLogin=\"ngForm\">\n    <div class=\"input-group margin-top-md\">\n        <label for=\"un\">Username</label>\n        <input type=\"text\" id=\"username\" [(ngModel)]=\"form.un\" name=\"un\">\n    </div>\n    <div class=\"input-group margin-top-md\">\n        <label for=\"pw\">Password</label>\n        <input type=\"password\" id=\"password\" [(ngModel)]=\"form.pw\" name=\"pw\">\n    </div>\n    <div class=\"d-flex d-justify-content\">\n      <a href=\"\">Forgotten Password</a>\n      <button class=\"button-primary\">Login</button>\n    </div>    \n  </form>\n  <hr class=\"margin-top-md margin-bottom-md\">\n  <div class=\"d-flex d-justify-content\">\n    <p class=\"margin-top-none margin-bottom-md\">Or login with</p>\n    <a href=\"\">Create account</a>\n  </div>\n  <div class=\"d-flex\">\n      <i class=\"fab fa-linkedin fa-2x margin-right-sm\" style=\"color:#3176b0\"></i>\n      <i class=\"fab fa-facebook fa-2x\" style=\"color:#4267b2\"></i>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/home/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/home/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/home/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_adminLogin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/adminLogin */ "./src/app/models/adminLogin.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/api.service */ "./src/app/service/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(api) {
        this.api = api;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getConfig().subscribe(function (response) {
            _this.data = response;
            _this.form = new _models_adminLogin__WEBPACK_IMPORTED_MODULE_1__["AdminLog"]('', '', _this.data.uid, _this.data.url);
        });
    };
    LoginComponent.prototype.login = function () {
        this.api.isLoggedIn(this.form).subscribe(function (response) { return console.log(response); }, function (err) { return console.log(err); });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/home/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/home/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/title/title.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/home/title/title.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  <h1 class=\"big-heading\">{{title?.title?.heading}}</h1>\n  <div class=\"d-flex-md\">\n      <p>{{title?.title?.details}}</p>\n      <button class=\"button-secondary margin-top-md margin-right-md-md margin-left-md-md margin-bottom-md margin-bottom-none-md\" (click)=\"show()\">{{title?.title?.buttonText}} <i class=\"fas fa-arrow-right margin-left-md\"></i></button>\n      <hr class=\"hidden-md\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home/title/title.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/home/title/title.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/title/title.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/home/title/title.component.ts ***!
  \*****************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/api.service */ "./src/app/service/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TitleComponent = /** @class */ (function () {
    function TitleComponent(apiService) {
        this.apiService = apiService;
    }
    TitleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getConfig()
            .subscribe(function (data) { return _this.title = data; });
    };
    TitleComponent.prototype.show = function () {
        this.apiService.getConfig()
            .subscribe(function (data) {
            console.log(data);
        });
    };
    TitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-title',
            template: __webpack_require__(/*! ./title.component.html */ "./src/app/pages/home/title/title.component.html"),
            styles: [__webpack_require__(/*! ./title.component.scss */ "./src/app/pages/home/title/title.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], TitleComponent);
    return TitleComponent;
}());



/***/ }),

/***/ "./src/app/service/api.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.configUrl = 'https://jerry.vineup.com/MVC/public/PurdueHome/home';
    }
    ApiService.prototype.getConfig = function () {
        return this.http.get(this.configUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // https://jerry.vineup.com/MVC/public/PurdueHome/isAdmin
    ApiService.prototype.isLoggedIn = function (form) {
        console.log(form);
        return this.http.post('https://jerry.vineup.com/do/login', form, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.updateTitle = function (update) {
        console.log(update, httpOptions);
        return this.http.post('https://jerry.vineup.com/MVC/public/Purduesettings/UPDATE', update, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.addStory = function (story) {
        return this.http.post('https://jerry.vineup.com/MVC/public/PurdueStories/add', story, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.updateStory = function (story) {
        return this.http.post('https://jerry.vineup.com/MVC/public/PurdueStories/UPDATE', story, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteStory = function (story) {
        console.log('https://jerry.vineup.com/MVC/public/PurdueStories/Delete/' + story);
        return this.http.get('https://jerry.vineup.com/MVC/public/PurdueStories/Delete/' + story, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.addCategory = function (category) {
        console.log(category);
        return this.http.post('https://jerry.vineup.com/MVC/public/PurdueCats/add', category, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.updateCategory = function (category) {
        console.log(category);
        return this.http.post('https://jerry.vineup.com/MVC/public/PurdueCats/UPDATE', category, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteCategory = function (category) {
        console.log(category);
        return this.http.get('https://jerry.vineup.com/MVC/public/PurdueCats/Delete/' + category, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/shared/confirmation-modal/confirmation-modal.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/confirmation-modal/confirmation-modal.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"mat-dialog-title\" mat-dialog-title=\"\" id=\"mat-dialog-title-1\">Confirmation</h1>\n<p>{{data.text}}</p>\n<div class=\"d-flex d-flex-direction-row-reverse margin-top-lg\">\n    <button mat-raised-button color=\"submit\" class=\"margin-left-md\" mat-primary (click)=\"dialogRef.close(true)\">Confirm</button>\n    <button mat-raised-button (click)=\"dialogRef.close(false)\">Cancel</button>\n</div>"

/***/ }),

/***/ "./src/app/shared/confirmation-modal/confirmation-modal.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/confirmation-modal/confirmation-modal.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/confirmation-modal/confirmation-modal.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/confirmation-modal/confirmation-modal.component.ts ***!
  \***************************************************************************/
/*! exports provided: ConfirmationModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationModalComponent", function() { return ConfirmationModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ConfirmationModalComponent = /** @class */ (function () {
    function ConfirmationModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ConfirmationModalComponent.prototype.ngOnInit = function () {
    };
    ConfirmationModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close(false);
    };
    ConfirmationModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation-modal',
            template: __webpack_require__(/*! ./confirmation-modal.component.html */ "./src/app/shared/confirmation-modal/confirmation-modal.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-modal.component.scss */ "./src/app/shared/confirmation-modal/confirmation-modal.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ConfirmationModalComponent);
    return ConfirmationModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"d-flex d-justify-content-center\">\n  <div class=\"container\">\n       Dauch Alumni Center | 403 W. Wood Street West Lafayette, IN 47907 | 800-414-1541 | purduealumni@purdue.edu | Terms of Use | Privacy Statement | Purdue Alumni Association, All Rights Reserved\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header d-flex d-align-items-center\">\n    <div class=\"container\">\n        <img src=\"./assets/logo.png\" alt=\"Purdue Logo\" [routerLink]=\"['/home']\" style=\"cursor:pointer\">\n    </div>\n</header>\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/navigation/nav-items/nav-items.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shared/navigation/nav-items/nav-items.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"#\" mat-button class=\"d-flex-1 text-left \">People</a>\n<a href=\"#\" mat-button class=\"d-flex-1 text-left \">Events</a>\n<a href=\"#\" mat-button class=\"d-flex-1 text-left \">Communities</a>\n<a href=\"#\" mat-button class=\"d-flex-1 text-left \">Jobs</a>\n<a href=\"#\" mat-button class=\"d-flex-1 text-left \">Resources</a>\n<a href=\"#\" mat-button class=\"d-flex-1 text-left \">Contact</a>\n<ul class=\"social-media d-flex\" fxShow fxHide.md fxHide.xl fxHide.lg>\n    <li>\n        <a href=\"https://www.facebook.com/PurdueAlumniAssociation\" target=\"_blank\">\n            <i class=\"fab fa-facebook text-4x margin-right-md\"></i>\n        </a>\n    </li>\n    <li>\n        <a href=\"https://twitter.com/PurdueAlumni\" target=\"_blank\">\n            <i class=\"fab fa-twitter text-4x margin-right-md\"></i>        \n        </a>\n    </li>\n    <li>\n        <a href=\"https://www.linkedin.com/company/purdue-alumni-association\" target=\"_blank\">\n            <i class=\"fab fa-linkedin text-4x margin-right-md\"></i> \n        </a>\n    </li>\n    <li>\n        <a href=\"https://www.pinterest.com/purduealumni/\" target=\"_blank\">\n            <i class=\"fab fa-pinterest text-4x margin-right-md\"></i>\n        </a>\n    </li>\n    <li>\n        <a href=\"https://instagram.com/purduealumni/\" target=\"_blank\">\n            <i class=\"fab fa-instagram text-4x margin-right-md\"></i>\n        </a>\n    </li>\n</ul>"

/***/ }),

/***/ "./src/app/shared/navigation/nav-items/nav-items.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/navigation/nav-items/nav-items.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/navigation/nav-items/nav-items.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/navigation/nav-items/nav-items.component.ts ***!
  \********************************************************************/
/*! exports provided: NavItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItemsComponent", function() { return NavItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavItemsComponent = /** @class */ (function () {
    function NavItemsComponent() {
    }
    NavItemsComponent.prototype.ngOnInit = function () {
    };
    NavItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-items',
            template: __webpack_require__(/*! ./nav-items.component.html */ "./src/app/shared/navigation/nav-items/nav-items.component.html"),
            styles: [__webpack_require__(/*! ./nav-items.component.scss */ "./src/app/shared/navigation/nav-items/nav-items.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavItemsComponent);
    return NavItemsComponent;
}());



/***/ }),

/***/ "./src/app/shared/navigation/navigation.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/navigation/navigation.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <mat-toolbar color=\"primary\" class=\"d-flex d-justify-content-center\">\n    <span class=\"example-spacer\"></span>\n    <div fxShow=\"true\" fxHide.lt-md=\"true\" class=\"navigation container\">\n      <app-nav-items></app-nav-items>\n    </div>\n    <div fxShow=\"true\" fxHide.gt-sm=\"true\">\n      <a (click)=\"toggle()\" class=\"toggle-menu\">\n        <i class=\"fas fa-bars margin-right-xs smaller-text-1x font-weight-800\"></i>\n        <span class=\"text-white smaller-text-1x text-uppercase font-weight-800\">Site Menu</span>\n      </a>\n    </div>\n  </mat-toolbar>\n"

/***/ }),

/***/ "./src/app/shared/navigation/navigation.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/navigation/navigation.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/navigation/navigation.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/navigation/navigation.component.ts ***!
  \***********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
        this.openNav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.toggle = function () {
        this.openNav.emit(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NavigationComponent.prototype, "openNav", void 0);
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/shared/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/shared/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/shared/not-found/not-found.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/not-found/not-found.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/not-found/not-found.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/shared/not-found/not-found.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/not-found/not-found.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/not-found/not-found.component.ts ***!
  \*********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/shared/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/shared/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/joecollett/Documents/Purdue/purdue/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! /Users/joecollett/Documents/Purdue/purdue/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map