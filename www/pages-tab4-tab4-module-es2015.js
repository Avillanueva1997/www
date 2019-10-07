(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tab4-tab4-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tab4/tab4.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tab4/tab4.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-menu side=\"start\">\n    <ion-header>\n      <ion-toolbar translucent>\n        <ion-title>Configuraciones</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-item (click)=\"onRoot()\">\n          <ion-icon name=\"home\" slot=\"start\"></ion-icon>\n          <ion-label>Home</ion-label>\n        </ion-item>\n        <ion-item *ngFor=\"let c of componentes | async\"\n                  [routerLink]=\"c.redirectTo\">\n            <ion-icon slot=\"start\" [name]=\"c.icon\"></ion-icon>\n            <ion-label>{{ c.name }}</ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <div class=\"ion-page\" main>\n    <ion-header  no-border>\n      <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Evento</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class=\"ion-padding\">\n      <!--<ion-button expand=\"block\" onclick=\"openMenu()\">Open Menu</ion-button>-->\n    </ion-content>\n  </div>\n\n  \n"

/***/ }),

/***/ "./src/app/pages/tab4/tab4.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tab4/tab4.module.ts ***!
  \*******************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "./src/app/pages/tab4/tab4.page.ts");







const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]
    }
];
let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
    })
], Tab4PageModule);



/***/ }),

/***/ "./src/app/pages/tab4/tab4.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tab4/tab4.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: Segoe-UI;\n  src: url(\"/assets/fonts/segoe-ui-light-2.ttf\");\n  font-weight: 400;\n  font-style: normal;\n}\n* {\n  font-family: Segoe-UI;\n}\nion-menu ion-list ion-item ion-label {\n  font-family: Segoe-UI;\n  color: #757575;\n}\nion-menu ion-list ion-item:hover {\n  background: #2ad0a8;\n}\n.ion-page {\n  background: #438DED !important;\n  --background:$cBlue!important;\n}\n.ion-page ion-toolbar {\n  background: #438DED !important;\n  --background:$cBlue!important;\n}\n.ion-page ion-buttons {\n  color: #fff;\n}\n.ion-page ion-title {\n  color: #fff;\n  font-size: 18px;\n  padding: 0;\n}\nion-menu ion-header {\n  background: #2ad0a8 !important;\n  --background:$cGreen!important;\n}\nion-menu ion-header ion-toolbar {\n  background: #2ad0a8 !important;\n  --background:$cGreen!important;\n}\nion-menu ion-header ion-buttons {\n  color: #fff;\n}\nion-menu ion-header ion-title {\n  color: #fff;\n  font-size: 18px;\n}\nion-menu ion-content ion-content ion-item {\n  color: #438DED;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFiNC9DOlxceGFtcHBcXGh0ZG9jc1xccHJveWVjdG9GaW5hbENQR1xcY3BnL3NyY1xcYXBwXFxwYWdlc1xcdGFiNFxcdGFiNC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhYjQvdGFiNC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxxQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0xKO0FEUUE7RUFDSSxxQkFBQTtBQ05KO0FEWU07RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUNUUjtBRFdNO0VBQ0UsbUJBeEJDO0FDZVQ7QURlQTtFQUNJLDhCQUFBO0VBQ0EsNkJBQUE7QUNaSjtBRGFFO0VBQ0UsOEJBQUE7RUFDQSw2QkFBQTtBQ1hKO0FEYUU7RUFDRSxXQXBDSztBQ3lCVDtBRGFFO0VBQ0UsV0F2Q0s7RUF3Q0wsZUFBQTtFQUNBLFVBQUE7QUNYSjtBRGdCRTtFQUNFLDhCQUFBO0VBQ0EsOEJBQUE7QUNiSjtBRGNJO0VBQ0UsOEJBQUE7RUFDQSw4QkFBQTtBQ1pOO0FEY0k7RUFDRSxXQXRERztBQzBDVDtBRGNJO0VBQ0UsV0F6REc7RUEwREgsZUFBQTtBQ1pOO0FEa0JNO0VBQ0UsY0FwRUE7QUNvRFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWI0L3RhYjQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNCbHVlOiAjNDM4REVEO1xyXG4kY0dyZWVuOiAjMmFkMGE4O1xyXG4kY0JsYWNrOiAjMDAwO1xyXG4kY1doaXRlOiAjZmZmO1xyXG5cclxuXHJcbkBmb250LWZhY2V7XHJcbiAgICBmb250LWZhbWlseTogU2Vnb2UtVUk7XHJcbiAgICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvc2Vnb2UtdWktbGlnaHQtMi50dGZcIik7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIH1cclxuXHJcbip7XHJcbiAgICBmb250LWZhbWlseTogU2Vnb2UtVUk7XHJcbn1cclxuXHJcbmlvbi1tZW51e1xyXG4gIGlvbi1saXN0e1xyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICBmb250LWZhbWlseTogU2Vnb2UtVUk7XHJcbiAgICAgICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICAgIH1cclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkY0dyZWVuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaW9uLXBhZ2V7XHJcbiAgICBiYWNrZ3JvdW5kOiRjQmx1ZSFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6JGNCbHVlIWltcG9ydGFudDtcclxuICBpb24tdG9vbGJhcntcclxuICAgIGJhY2tncm91bmQ6JGNCbHVlIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDokY0JsdWUhaW1wb3J0YW50O1xyXG4gIH1cclxuICBpb24tYnV0dG9uc3tcclxuICAgIGNvbG9yOiAkY1doaXRlO1xyXG4gIH1cclxuICBpb24tdGl0bGV7XHJcbiAgICBjb2xvcjogJGNXaGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tbWVudXtcclxuICBpb24taGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDokY0dyZWVuIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDokY0dyZWVuIWltcG9ydGFudDtcclxuICAgIGlvbi10b29sYmFye1xyXG4gICAgICBiYWNrZ3JvdW5kOiRjR3JlZW4haW1wb3J0YW50O1xyXG4gICAgICAtLWJhY2tncm91bmQ6JGNHcmVlbiFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9uc3tcclxuICAgICAgY29sb3I6ICRjV2hpdGU7XHJcbiAgICB9XHJcbiAgICBpb24tdGl0bGV7XHJcbiAgICAgIGNvbG9yOiAkY1doaXRlO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIC8vIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1jb250ZW50e1xyXG4gICAgaW9uLWNvbnRlbnR7XHJcbiAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgIGNvbG9yOiAkY0JsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFNlZ29lLVVJO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvc2Vnb2UtdWktbGlnaHQtMi50dGZcIik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbioge1xuICBmb250LWZhbWlseTogU2Vnb2UtVUk7XG59XG5cbmlvbi1tZW51IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcbiAgY29sb3I6ICM3NTc1NzU7XG59XG5pb24tbWVudSBpb24tbGlzdCBpb24taXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyYWQwYTg7XG59XG5cbi5pb24tcGFnZSB7XG4gIGJhY2tncm91bmQ6ICM0MzhERUQgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiRjQmx1ZSFpbXBvcnRhbnQ7XG59XG4uaW9uLXBhZ2UgaW9uLXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjNDM4REVEICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDokY0JsdWUhaW1wb3J0YW50O1xufVxuLmlvbi1wYWdlIGlvbi1idXR0b25zIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uaW9uLXBhZ2UgaW9uLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMDtcbn1cblxuaW9uLW1lbnUgaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICMyYWQwYTggIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiRjR3JlZW4haW1wb3J0YW50O1xufVxuaW9uLW1lbnUgaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6ICMyYWQwYTggIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiRjR3JlZW4haW1wb3J0YW50O1xufVxuaW9uLW1lbnUgaW9uLWhlYWRlciBpb24tYnV0dG9ucyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuaW9uLW1lbnUgaW9uLWhlYWRlciBpb24tdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuaW9uLW1lbnUgaW9uLWNvbnRlbnQgaW9uLWNvbnRlbnQgaW9uLWl0ZW0ge1xuICBjb2xvcjogIzQzOERFRDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tab4/tab4.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tab4/tab4.page.ts ***!
  \*****************************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dashboard.service */ "./src/app/services/dashboard.service.ts");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/posts.service */ "./src/app/services/posts.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let Tab4Page = class Tab4Page {
    constructor(menuCtrl, dashBoardService, navCtrl, postService) {
        this.menuCtrl = menuCtrl;
        this.dashBoardService = dashBoardService;
        this.navCtrl = navCtrl;
        this.postService = postService;
    }
    ngOnInit() {
        this.componentes = this.dashBoardService.getMenuOpts();
    }
    /*redirect(vista: string){
      this.navCtrl.navigateRoot('/main/tabs' + vista, {animated: true});
    }*/
    toggleMenu() {
        this.menuCtrl.toggle();
    }
    onRoot() {
        this.postService.paginaPosts = 0;
        this.navCtrl.navigateRoot('/', { animated: true });
    }
};
Tab4Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] }
];
Tab4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab4',
        template: __webpack_require__(/*! raw-loader!./tab4.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tab4/tab4.page.html"),
        styles: [__webpack_require__(/*! ./tab4.page.scss */ "./src/app/pages/tab4/tab4.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]])
], Tab4Page);



/***/ }),

/***/ "./src/app/services/dashboard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/dashboard.service.ts ***!
  \***********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DashboardService = class DashboardService {
    constructor(http) {
        this.http = http;
    }
    getMenuOpts() {
        return this.http.get('/assets/data/menu.json');
    }
};
DashboardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DashboardService);



/***/ })

}]);
//# sourceMappingURL=pages-tab4-tab4-module-es2015.js.map