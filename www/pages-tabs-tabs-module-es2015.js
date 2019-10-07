(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tabs/tabs.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tabs/tabs.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs class=\"tabfooter\">\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"person\"></ion-icon>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/pages/tabs/tabs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/pages/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: Segoe-UI;\n  src: url(\"/assets/fonts/segoe-ui-light-2.ttf\");\n  font-weight: 400;\n  font-style: normal;\n}\n* {\n  font-family: Segoe-UI;\n}\n.tabfooter ion-tab-bar {\n  background: #2ad0a8;\n  --background: $cGreen;\n}\n.tabfooter ion-tab-bar ion-tab-button {\n  background: #2ad0a8;\n  --background: $cGreen;\n}\n.tabfooter ion-tab-bar ion-tab-button ion-icon {\n  color: #fff;\n}\n.tabfooter ion-tab-bar .tab-selected {\n  background: #438DED;\n  --background: $cBlue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFicy9DOlxceGFtcHBcXGh0ZG9jc1xccHJveWVjdG9GaW5hbENQR1xcY3BnL3NyY1xcYXBwXFxwYWdlc1xcdGFic1xcdGFicy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhYnMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxxQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0xKO0FEUUE7RUFDSSxxQkFBQTtBQ05KO0FEVUk7RUFDSSxtQkFsQkM7RUFtQkcscUJBQUE7QUNQWjtBRFFRO0VBQ0ksbUJBckJIO0VBc0JHLHFCQUFBO0FDTlo7QURPWTtFQUNJLFdBdEJQO0FDaUJUO0FEUVE7RUFDSSxtQkE3Qko7RUE4Qkksb0JBQUE7QUNOWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY0JsdWU6ICM0MzhERUQ7XG4kY0dyZWVuOiAjMmFkMGE4O1xuJGNCbGFjazogIzAwMDtcbiRjV2hpdGU6ICNmZmY7XG5cblxuQGZvbnQtZmFjZXtcbiAgICBmb250LWZhbWlseTogU2Vnb2UtVUk7XG4gICAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL3NlZ29lLXVpLWxpZ2h0LTIudHRmXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG5cbip7XG4gICAgZm9udC1mYW1pbHk6IFNlZ29lLVVJO1xufVxuXG4udGFiZm9vdGVye1xuICAgIGlvbi10YWItYmFye1xuICAgICAgICBiYWNrZ3JvdW5kOiAkY0dyZWVuO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAkY0dyZWVuO1xuICAgICAgICBpb24tdGFiLWJ1dHRvbntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjR3JlZW47XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICRjR3JlZW47XG4gICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNXaGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudGFiLXNlbGVjdGVke1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJGNCbHVlO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAkY0JsdWU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL3NlZ29lLXVpLWxpZ2h0LTIudHRmXCIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4qIHtcbiAgZm9udC1mYW1pbHk6IFNlZ29lLVVJO1xufVxuXG4udGFiZm9vdGVyIGlvbi10YWItYmFyIHtcbiAgYmFja2dyb3VuZDogIzJhZDBhODtcbiAgLS1iYWNrZ3JvdW5kOiAkY0dyZWVuO1xufVxuLnRhYmZvb3RlciBpb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMyYWQwYTg7XG4gIC0tYmFja2dyb3VuZDogJGNHcmVlbjtcbn1cbi50YWJmb290ZXIgaW9uLXRhYi1iYXIgaW9uLXRhYi1idXR0b24gaW9uLWljb24ge1xuICBjb2xvcjogI2ZmZjtcbn1cbi50YWJmb290ZXIgaW9uLXRhYi1iYXIgLnRhYi1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICM0MzhERUQ7XG4gIC0tYmFja2dyb3VuZDogJGNCbHVlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tabs/tabs.page.html"),
        styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/pages/tabs/tabs.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TabsPage);



/***/ }),

/***/ "./src/app/pages/tabs/tabs.router.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/tabs.router.module.ts ***!
  \**************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | tab1-tab1-module */[__webpack_require__.e("default~pages-login-login-module~tab1-tab1-module~tab3-tab3-module"), __webpack_require__.e("common"), __webpack_require__.e("tab1-tab1-module")]).then(__webpack_require__.bind(null, /*! ../tab1/tab1.module */ "./src/app/pages/tab1/tab1.module.ts")).then(m => m.Tab1PageModule)
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | tab2-tab2-module */[__webpack_require__.e("common"), __webpack_require__.e("tab2-tab2-module")]).then(__webpack_require__.bind(null, /*! ../tab2/tab2.module */ "./src/app/pages/tab2/tab2.module.ts")).then(m => m.Tab2PageModule)
                    }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | tab3-tab3-module */[__webpack_require__.e("default~pages-login-login-module~tab1-tab1-module~tab3-tab3-module"), __webpack_require__.e("common"), __webpack_require__.e("tab3-tab3-module")]).then(__webpack_require__.bind(null, /*! ../tab3/tab3.module */ "./src/app/pages/tab3/tab3.module.ts")).then(m => m.Tab3PageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-tabs-tabs-module-es2015.js.map