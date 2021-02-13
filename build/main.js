(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/1EB":
/*!*****************************************************************!*\
  !*** ./src/app/components/banner-home/banner-home.component.ts ***!
  \*****************************************************************/
/*! exports provided: BannerHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerHomeComponent", function() { return BannerHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon/icon.component */ "WaCx");
/* harmony import */ var _icon_spinner_icon_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon-spinner/icon-spinner.component */ "B2jP");







function BannerHomeComponent_app_icon_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-icon-spinner");
} }
function BannerHomeComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "TCP Link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BannerHomeComponent {
    constructor() {
        this.isLoading = true;
        this.timerLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"];
    }
    ngOnInit() {
        this.timerLoading = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(3000);
        this.changeLoading();
    }
    changeLoading() {
        this.timerLoading.subscribe(() => {
            this.isLoading = false;
        });
    }
}
BannerHomeComponent.ɵfac = function BannerHomeComponent_Factory(t) { return new (t || BannerHomeComponent)(); };
BannerHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerHomeComponent, selectors: [["app-banner-home"]], decls: 20, vars: 2, consts: [[1, "item__banner"], [4, "ngIf"], ["class", "item__banner__title animate", 4, "ngIf"], ["color", "primary", "mat-button", ""], ["iconRoute", "../../../assets/icons/wifi.svg"], [1, "item__banner", "animate"], ["iconRoute", "../../../assets/icons/notification.svg"], ["iconRoute", "../../../assets/icons/heat.svg"], ["iconRoute", "../../../assets/icons/lighting.svg"], ["iconRoute", "../../../assets/icons/settings.svg"], ["iconRoute", "../../../assets/icons/power-button.svg"], [1, "item__banner__title", "animate"]], template: function BannerHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BannerHomeComponent_app_icon_spinner_1_Template, 1, 0, "app-icon-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BannerHomeComponent_p_2_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "article", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "article", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "article", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "article", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "article", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"], _icon_spinner_icon_spinner_component__WEBPACK_IMPORTED_MODULE_5__["IconSpinnerComponent"]], styles: [".item__banner[_ngcontent-%COMP%]{\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    margin:8px 1px;\n    height: 70px;\n}\n\n.item__banner__title[_ngcontent-%COMP%]{\n    font-family: helvetica;\n    font-weight: 550;\n    font-size:15.2px;\n}\n\nbutton[_ngcontent-%COMP%]{\n    padding-bottom: -12px !important;\n    width:28px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJiYW5uZXItaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW1fX2Jhbm5lcntcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjo4cHggMXB4O1xuICAgIGhlaWdodDogNzBweDtcbn1cblxuLml0ZW1fX2Jhbm5lcl9fdGl0bGV7XG4gICAgZm9udC1mYW1pbHk6IGhlbHZldGljYTtcbiAgICBmb250LXdlaWdodDogNTUwO1xuICAgIGZvbnQtc2l6ZToxNS4ycHg7XG59XG5idXR0b257XG4gICAgcGFkZGluZy1ib3R0b206IC0xMnB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6MjhweCAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner-home',
                templateUrl: './banner-home.component.html',
                styleUrls: ['./banner-home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jeremias/Desktop/iot-ng/src/main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_banner_home_banner_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/banner-home/banner-home.component */ "/1EB");
/* harmony import */ var _components_tv_tv_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/tv/tv.component */ "SDYC");




class HomePage {
    constructor() { }
    ngOnInit() {
    }
}
HomePage.ɵfac = function HomePage_Factory(t) { return new (t || HomePage)(); };
HomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePage, selectors: [["app-home"]], decls: 9, vars: 5, consts: [[1, "container__banner"], [1, "container__cards"], ["classColors", "first", "title", "Home TV", "routeImage", "../../../assets/images/television.svg"], ["classColors", "second", "title", "Fan", "routeImage", "../../../assets/images/ac.svg", 3, "isFan"], ["classColors", "fourth", "title", "Light", "routeImage", "../../../assets/images/lightbulb-off.svg", 3, "isFan"], ["classColors", "third-1", "title", "Vigilance", "routeImage", "../../../assets/images/security-camera.svg", 3, "isFan"], ["classColors", "third", "title", "Air ..", "routeImage", "../../../assets/images/air-conditioner.svg", 3, "isFan"], ["classColors", "fith", "title", "Router", "routeImage", "../../../assets/images/wifi-router.svg", 3, "isFan"]], template: function HomePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-tv", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-tv", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-tv", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-tv", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-tv", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-tv", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFan", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFan", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFan", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFan", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFan", false);
    } }, directives: [_components_banner_home_banner_home_component__WEBPACK_IMPORTED_MODULE_1__["BannerHomeComponent"], _components_tv_tv_component__WEBPACK_IMPORTED_MODULE_2__["TvComponent"]], styles: [".container__cards[_ngcontent-%COMP%]{\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap:wrap;\n    padding: 0 30px;\n}\n\n\n.container__banner[_ngcontent-%COMP%]{\n    display:flex;\n    background-color: #F6F1F8;\n    justify-content: flex-end;\n    height: 75px;\n    flex-direction: row;\n    border-bottom-left-radius: 7px;\n    border-bottom-right-radius: 7px;\n    align-items: center;\n    margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxlQUFlO0FBQ25COzs7QUFHQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJfX2NhcmRze1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDp3cmFwO1xuICAgIHBhZGRpbmc6IDAgMzBweDtcbn1cblxuXG4uY29udGFpbmVyX19iYW5uZXJ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkYxRjg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "6sG5":
/*!************************************************!*\
  !*** ./src/app/pages/start/start.component.ts ***!
  \************************************************/
/*! exports provided: StartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPage", function() { return StartPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_logo_start_logo_start_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/logo-start/logo-start.component */ "hfte");



class StartPage {
    constructor() { }
    ngOnInit() {
    }
}
StartPage.ɵfac = function StartPage_Factory(t) { return new (t || StartPage)(); };
StartPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartPage, selectors: [["app-start"]], decls: 1, vars: 0, template: function StartPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-logo-start");
    } }, directives: [_components_logo_start_logo_start_component__WEBPACK_IMPORTED_MODULE_1__["LogoStartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFydC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-start',
                templateUrl: './start.component.html',
                styleUrls: ['./start.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B2jP":
/*!*******************************************************************!*\
  !*** ./src/app/components/icon-spinner/icon-spinner.component.ts ***!
  \*******************************************************************/
/*! exports provided: IconSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconSpinnerComponent", function() { return IconSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class IconSpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
IconSpinnerComponent.ɵfac = function IconSpinnerComponent_Factory(t) { return new (t || IconSpinnerComponent)(); };
IconSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconSpinnerComponent, selectors: [["app-icon-spinner"]], decls: 1, vars: 0, consts: [["src", "../../../assets/icons/loading.svg", "alt", "loading"]], template: function IconSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } }, styles: ["img[_ngcontent-%COMP%]{\n    width:23px;\n    height:23px;\n    animation: load 1s infinite linear;\n    transition:1s;\n}\n\n@keyframes load{\n    from{\n        transition:1s;\n        transform: rotate(-360deg);\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljb24tc3Bpbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxrQ0FBa0M7SUFDbEMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLDBCQUEwQjtJQUM5QjtBQUNKIiwiZmlsZSI6Imljb24tc3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xuICAgIHdpZHRoOjIzcHg7XG4gICAgaGVpZ2h0OjIzcHg7XG4gICAgYW5pbWF0aW9uOiBsb2FkIDFzIGluZmluaXRlIGxpbmVhcjtcbiAgICB0cmFuc2l0aW9uOjFzO1xufVxuXG5Aa2V5ZnJhbWVzIGxvYWR7XG4gICAgZnJvbXtcbiAgICAgICAgdHJhbnNpdGlvbjoxcztcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-icon-spinner',
                templateUrl: './icon-spinner.component.html',
                styleUrls: ['./icon-spinner.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "OESS":
/*!**********************************************!*\
  !*** ./src/app/pages/pages-module.module.ts ***!
  \**********************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_components_module_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/module-component.module */ "bRaL");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "1LmZ");
/* harmony import */ var _routes_app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes/app.routing */ "yoKO");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start/start.component */ "6sG5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








class PagesModule {
}
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _routes_app_routing__WEBPACK_IMPORTED_MODULE_4__["ROUTES"],
            src_app_components_module_component_module__WEBPACK_IMPORTED_MODULE_2__["ModuleComponent"]
        ], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], src_app_components_module_component_module__WEBPACK_IMPORTED_MODULE_2__["ModuleComponent"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
        _start_start_component__WEBPACK_IMPORTED_MODULE_5__["StartPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], src_app_components_module_component_module__WEBPACK_IMPORTED_MODULE_2__["ModuleComponent"]], exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
        _start_start_component__WEBPACK_IMPORTED_MODULE_5__["StartPage"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], src_app_components_module_component_module__WEBPACK_IMPORTED_MODULE_2__["ModuleComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
                    _start_start_component__WEBPACK_IMPORTED_MODULE_5__["StartPage"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _routes_app_routing__WEBPACK_IMPORTED_MODULE_4__["ROUTES"],
                    src_app_components_module_component_module__WEBPACK_IMPORTED_MODULE_2__["ModuleComponent"]
                ],
                exports: [
                    _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
                    _start_start_component__WEBPACK_IMPORTED_MODULE_5__["StartPage"],
                    _routes_app_routing__WEBPACK_IMPORTED_MODULE_4__["ROUTES"],
                    src_app_components_module_component_module__WEBPACK_IMPORTED_MODULE_2__["ModuleComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "SDYC":
/*!***********************************************!*\
  !*** ./src/app/components/tv/tv.component.ts ***!
  \***********************************************/
/*! exports provided: TvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvComponent", function() { return TvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/icon.component */ "WaCx");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");






function TvComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.routeImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TvComponent_article_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Device information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TvComponent_article_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Power");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-slider", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r2.formatLabel);
} }
const _c0 = function (a0) { return [a0]; };
class TvComponent {
    constructor() {
        this.title = '';
        this.routeImage = '';
        this.isFan = false;
        this.classColors = '';
    }
    ngOnInit() {
    }
    formatLabel(value) {
        if (value >= 1) {
            return value + '°';
        }
        return value;
    }
}
TvComponent.ɵfac = function TvComponent_Factory(t) { return new (t || TvComponent)(); };
TvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TvComponent, selectors: [["app-tv"]], inputs: { title: "title", routeImage: "routeImage", isFan: "isFan", classColors: "classColors" }, decls: 20, vars: 7, consts: [[1, "tv", "animate__card", 3, "ngClass"], [1, "banner__tv"], [1, "title"], [1, "container__more"], ["iconRoute", "../../../assets/icons/more.svg"], [1, "container__poster"], [1, "poster"], ["alt", "tv", 3, "src", 4, "ngIf"], [1, "controls"], ["color", "tertiary"], ["class", "controls", 4, "ngIf"], ["alt", "tv", 3, "src"], ["iconRoute", "../../../assets/icons/next.png"], ["thumbLabel", "", "tickInterval", "1000", "min", "0", "max", "32", 3, "displayWith"]], template: function TvComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "article", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TvComponent_img_8_Template, 1, 1, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "article", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "On");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-slide-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "article", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Thermal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "32 C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TvComponent_article_18_Template, 4, 0, "article", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TvComponent_article_19_Template, 4, 1, "article", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.classColors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.routeImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFan);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFan);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_2__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggle"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSlider"]], styles: [".tv[_ngcontent-%COMP%]{\n    width: 310px;\n    height: 430px;\n    border-radius: 7px;\n    margin:0px 2px;\n    transform: scale(.9);\n    border:none;\n    \n   \n}\n\n.banner__tv[_ngcontent-%COMP%]{\n    display:flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.title[_ngcontent-%COMP%]{\n    background-color: rgb(32, 32, 34);\n    padding:8px 15px;\n    font-family: monospace;\n    color: white; \n    font-size:16.8px;\n    text-align:center;\n    width:80px;\n    border-top-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n    font-weight: 550;\n}\n\n.poster[_ngcontent-%COMP%]{\n    border-radius: 50%;\n    width:152px;\n    height:152px;\n    box-shadow: -2px 5px 15px rgb(175, 174, 174);\n    padding: 3px;\n    background-color:white;\n}\n\n.poster[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    transform: scale(.7);\n    width:150px;\n    \n}\n\n.container__poster[_ngcontent-%COMP%]{\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 20px;\n    height:200px;\n\n}\n\n.controls[_ngcontent-%COMP%]{\n    padding: 6px;\n    display:flex;\n    height: 40px;\n    cursor:pointer;\n    margin-bottom:6px;\n    \n    align-items:center;\n    justify-content: space-between;\n}\n\n.controls[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{\n    letter-spacing: .1px;\n    color:white;\n    font-family:helvetica;\n    font-weight: 500;\n    font-size:18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gscUdBQXFHOztBQUV6Rzs7QUFFQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osNENBQTRDO0lBQzVDLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZOztBQUVoQjs7QUFHQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsMERBQTBEO0lBQzFELGtCQUFrQjtJQUNsQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQiIsImZpbGUiOiJ0di5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udHZ7XG4gICAgd2lkdGg6IDMxMHB4O1xuICAgIGhlaWdodDogNDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIG1hcmdpbjowcHggMnB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjkpO1xuICAgIGJvcmRlcjpub25lO1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMzEsIDk3LCAxOSwgMC45NjYpLHJnYmEoMjI2LCAxNTAsIDY0LCAwLjk2NikpOyAqL1xuICAgXG59XG5cbi5iYW5uZXJfX3R2e1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRpdGxle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMzIsIDM0KTtcbiAgICBwYWRkaW5nOjhweCAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgY29sb3I6IHdoaXRlOyBcbiAgICBmb250LXNpemU6MTYuOHB4O1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIHdpZHRoOjgwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcbn1cbi5wb3N0ZXJ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOjE1MnB4O1xuICAgIGhlaWdodDoxNTJweDtcbiAgICBib3gtc2hhZG93OiAtMnB4IDVweCAxNXB4IHJnYigxNzUsIDE3NCwgMTc0KTtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbn1cbi5wb3N0ZXIgaW1ne1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjcpO1xuICAgIHdpZHRoOjE1MHB4O1xuICAgIFxufVxuIFxuLmNvbnRhaW5lcl9fcG9zdGVye1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgaGVpZ2h0OjIwMHB4O1xuXG59XG5cblxuLmNvbnRyb2xze1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGN1cnNvcjpwb2ludGVyO1xuICAgIG1hcmdpbi1ib3R0b206NnB4O1xuICAgIC8qIGJvcmRlci1ib3R0b206MS41cHggc29saWQgcmdiYSgxNjEsIDE2MSwgMTYxLCAwLjg5Nyk7ICovXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiBcbi5jb250cm9scyBoMSxwe1xuICAgIGxldHRlci1zcGFjaW5nOiAuMXB4O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtZmFtaWx5OmhlbHZldGljYTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZToxOHB4O1xufVxuICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TvComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tv',
                templateUrl: './tv.component.html',
                styleUrls: ['./tv.component.css']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], routeImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isFan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classColors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'iot-ng';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "WaCx":
/*!***************************************************!*\
  !*** ./src/app/components/icon/icon.component.ts ***!
  \***************************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class IconComponent {
    constructor() {
        this.iconRoute = '';
    }
    ngOnInit() {
    }
}
IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(); };
IconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconComponent, selectors: [["app-icon"]], inputs: { iconRoute: "iconRoute" }, decls: 1, vars: 1, consts: [["alt", "icon :)", 3, "src"]], template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.iconRoute, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["img[_ngcontent-%COMP%]{\n    width: 23px;\n    margin: 0px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xuICAgIHdpZHRoOiAyM3B4O1xuICAgIG1hcmdpbjogMHB4IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-icon',
                templateUrl: './icon.component.html',
                styleUrls: ['./icon.component.css']
            }]
    }], function () { return []; }, { iconRoute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_pages_module_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pages-module.module */ "OESS");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _pages_pages_module_module__WEBPACK_IMPORTED_MODULE_3__["PagesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _pages_pages_module_module__WEBPACK_IMPORTED_MODULE_3__["PagesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _pages_pages_module_module__WEBPACK_IMPORTED_MODULE_3__["PagesModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bRaL":
/*!*******************************************************!*\
  !*** ./src/app/components/module-component.module.ts ***!
  \*******************************************************/
/*! exports provided: ModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleComponent", function() { return ModuleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _tv_tv_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tv/tv.component */ "SDYC");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon/icon.component */ "WaCx");
/* harmony import */ var _icon_spinner_icon_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon-spinner/icon-spinner.component */ "B2jP");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _banner_home_banner_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./banner-home/banner-home.component */ "/1EB");
/* harmony import */ var _logo_start_logo_start_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logo-start/logo-start.component */ "hfte");











class ModuleComponent {
}
ModuleComponent.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ModuleComponent });
ModuleComponent.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ModuleComponent_Factory(t) { return new (t || ModuleComponent)(); }, imports: [[
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"]
        ], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModuleComponent, { declarations: [_tv_tv_component__WEBPACK_IMPORTED_MODULE_3__["TvComponent"],
        _icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"],
        _icon_spinner_icon_spinner_component__WEBPACK_IMPORTED_MODULE_5__["IconSpinnerComponent"],
        _banner_home_banner_home_component__WEBPACK_IMPORTED_MODULE_8__["BannerHomeComponent"],
        _logo_start_logo_start_component__WEBPACK_IMPORTED_MODULE_9__["LogoStartComponent"]], imports: [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"]], exports: [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
        _tv_tv_component__WEBPACK_IMPORTED_MODULE_3__["TvComponent"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
        _icon_spinner_icon_spinner_component__WEBPACK_IMPORTED_MODULE_5__["IconSpinnerComponent"],
        _banner_home_banner_home_component__WEBPACK_IMPORTED_MODULE_8__["BannerHomeComponent"],
        _logo_start_logo_start_component__WEBPACK_IMPORTED_MODULE_9__["LogoStartComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _tv_tv_component__WEBPACK_IMPORTED_MODULE_3__["TvComponent"],
                    _icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"],
                    _icon_spinner_icon_spinner_component__WEBPACK_IMPORTED_MODULE_5__["IconSpinnerComponent"],
                    _banner_home_banner_home_component__WEBPACK_IMPORTED_MODULE_8__["BannerHomeComponent"],
                    _logo_start_logo_start_component__WEBPACK_IMPORTED_MODULE_9__["LogoStartComponent"]
                ],
                imports: [
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"]
                ],
                exports: [
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                    _tv_tv_component__WEBPACK_IMPORTED_MODULE_3__["TvComponent"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
                    _icon_spinner_icon_spinner_component__WEBPACK_IMPORTED_MODULE_5__["IconSpinnerComponent"],
                    _banner_home_banner_home_component__WEBPACK_IMPORTED_MODULE_8__["BannerHomeComponent"],
                    _logo_start_logo_start_component__WEBPACK_IMPORTED_MODULE_9__["LogoStartComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "hfte":
/*!***************************************************************!*\
  !*** ./src/app/components/logo-start/logo-start.component.ts ***!
  \***************************************************************/
/*! exports provided: LogoStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoStartComponent", function() { return LogoStartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _icon_spinner_icon_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon-spinner/icon-spinner.component */ "B2jP");





class LogoStartComponent {
    constructor(routing) {
        this.routing = routing;
        this.routeTime = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(3000);
    }
    ngOnInit() {
        this.routeTime.subscribe(() => {
            this.routing.navigate(["/home"]);
        });
    }
}
LogoStartComponent.ɵfac = function LogoStartComponent_Factory(t) { return new (t || LogoStartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LogoStartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoStartComponent, selectors: [["app-logo-start"]], decls: 5, vars: 0, consts: [[1, "logo"], [1, "logo__start", "animate__card"], ["src", "../../../assets/icons/cloud-storage.svg", "alt", "cloud svg"], [1, "container__spinner", "animate"]], template: function LogoStartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "article", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-icon-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_icon_spinner_icon_spinner_component__WEBPACK_IMPORTED_MODULE_3__["IconSpinnerComponent"]], styles: ["body[_ngcontent-%COMP%]{\n    height: 500px;\n}\n.logo[_ngcontent-%COMP%]{\n    display:flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    margin-top: 15vh; \n    \n}\n.logo__start[_ngcontent-%COMP%]{\n    width:190px;\n    height:190px;\n    padding: 20px;\n    box-shadow: 1px 1px 12px #ddd;\n    border-radius: 50%;\n   \n}\n.logo__start[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: inherit;\n    transform:scale(.9)\n}\n.container__spinner[_ngcontent-%COMP%]{\n    margin-top: 1.7em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ28tc3RhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0Isa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksY0FBYztJQUNkO0FBQ0o7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJsb2dvLXN0YXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuICAgIGhlaWdodDogNTAwcHg7XG59XG4ubG9nb3tcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDE1dmg7IFxuICAgIFxufVxuLmxvZ29fX3N0YXJ0e1xuICAgIHdpZHRoOjE5MHB4O1xuICAgIGhlaWdodDoxOTBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTJweCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIFxufVxuLmxvZ29fX3N0YXJ0IGltZ3tcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICB0cmFuc2Zvcm06c2NhbGUoLjkpXG59XG4uY29udGFpbmVyX19zcGlubmVye1xuICAgIG1hcmdpbi10b3A6IDEuN2VtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoStartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logo-start',
                templateUrl: './logo-start.component.html',
                styleUrls: ['./logo-start.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "yoKO":
/*!***************************************!*\
  !*** ./src/app/routes/app.routing.ts ***!
  \***************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_start_start_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/start/start.component */ "6sG5");



const routes = [
    { path: "home", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomePage"] },
    { path: "", component: _pages_start_start_component__WEBPACK_IMPORTED_MODULE_2__["StartPage"] },
    { path: "**", component: _pages_start_start_component__WEBPACK_IMPORTED_MODULE_2__["StartPage"] }
];
const ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map