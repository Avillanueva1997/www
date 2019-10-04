(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tab1/tab1.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tab1/tab1.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"headerevent\">\n  <ion-toolbar class=\"eventtool\">\n    <ion-buttons slot=\"start\">\n      <img class=\"logotype\" src=\"/assets/cgp-logo-10.svg\" width=\"70\">\n    </ion-buttons>\n    <ion-title>\n        <!-- title -->\n    </ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"recargar($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <app-posts [posts]=\"posts\"></app-posts>\n  <ion-infinite-scroll [disabled]=\"!habilitado\" threshold=\"150px\" (ionInfinite)=\"siguientes($event)\">\n    <ion-infinite-scroll-content>\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tab1/tab1.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tab1/tab1.module.ts ***!
  \*******************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/pages/tab1/tab1.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/pages/tab1/tab1.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: Segoe-UI;\n  src: url(\"/assets/fonts/segoe-ui-light-2.ttf\");\n  font-weight: 400;\n  font-style: normal;\n}\n* {\n  font-family: Segoe-UI;\n}\n.welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n.headerevent ion-toolbar {\n  background: url(\"/assets/bg-cpg.jpg\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  --background: url(\"/assets/bg-cpg.jpg\");\n  border: 0 !important;\n}\n.headerevent ion-buttons {\n  color: #fff;\n}\n.headerevent ion-buttons img {\n  margin-left: 25px;\n}\n.headerevent ion-title {\n  color: #fff;\n  font-size: 18px;\n  background: #2ad0a8;\n  --background: $cGreen;\n  width: 100%;\n  margin-top: -28px;\n  height: 81px;\n  padding: 10px;\n  padding-left: 20px;\n  padding-top: 35px;\n  text-transform: capitalize;\n  font-weight: 400;\n  margin-left: 15%;\n  letter-spacing: 2px;\n  border-top-right-radius: 30px;\n  border-bottom-left-radius: 30px;\n}\n.eventtool {\n  background: #438DED !important;\n}\n.toolbar-background {\n  display: none !important;\n}\n.toolbar-container {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFiMS9DOlxceGFtcHBcXGh0ZG9jc1xccHJveWVjdG9GaW5hbENQR1xcY3BnL3NyY1xcYXBwXFxwYWdlc1xcdGFiMVxcdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxxQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0xKO0FEUUE7RUFDSSxxQkFBQTtBQ05KO0FEVUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDUEY7QURZRTtFQUNFLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUNBQUE7RUFDQSxvQkFBQTtBQ1RKO0FEV0U7RUFDRSxXQS9CSztBQ3NCVDtBRFVJO0VBQ0UsaUJBQUE7QUNSTjtBRFdFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0FDVEo7QURhQTtFQUNFLDhCQUFBO0FDVkY7QURhQTtFQUNFLHdCQUFBO0FDVkY7QURZQTtFQUNFLHdCQUFBO0FDVEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNCbHVlOiAjNDM4REVEO1xuJGNHcmVlbjogIzJhZDBhODtcbiRjQmxhY2s6ICMwMDA7XG4kY1doaXRlOiAjZmZmO1xuXG5cbkBmb250LWZhY2V7XG4gICAgZm9udC1mYW1pbHk6IFNlZ29lLVVJO1xuICAgIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9zZWdvZS11aS1saWdodC0yLnR0ZlwiKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuXG4qe1xuICAgIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcbn1cblxuXG4ud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5oZWFkZXJldmVudHtcbiAgLy8gLS1iYWNrZ3JvdW5kOiRjV2hpdGUhaW1wb3J0YW50O1xuICBpb24tdG9vbGJhcntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvYmctY3BnLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvYmctY3BnLmpwZycpO1xuICAgIGJvcmRlcjogMCFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWJ1dHRvbnN7XG4gICAgY29sb3I6ICRjV2hpdGU7XG4gICAgaW1ne1xuICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgfVxuICB9XG4gIGlvbi10aXRsZXtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYmFja2dyb3VuZDogIzJhZDBhODtcbiAgICAtLWJhY2tncm91bmQ6ICRjR3JlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogLTI4cHg7XG4gICAgaGVpZ2h0OiA4MXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAzNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMwcHg7XG4gIH1cbn1cblxuLmV2ZW50dG9vbHtcbiAgYmFja2dyb3VuZDokY0JsdWUhaW1wb3J0YW50O1xufVxuXG4udG9vbGJhci1iYWNrZ3JvdW5ke1xuICBkaXNwbGF5OiBub25lIWltcG9ydGFudDtcbn1cbi50b29sYmFyLWNvbnRhaW5lcntcbiAgZGlzcGxheTogbm9uZSFpbXBvcnRhbnQ7XG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL3NlZ29lLXVpLWxpZ2h0LTIudHRmXCIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4qIHtcbiAgZm9udC1mYW1pbHk6IFNlZ29lLVVJO1xufVxuXG4ud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5oZWFkZXJldmVudCBpb24tdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYmctY3BnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYmctY3BnLmpwZ1wiKTtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG4uaGVhZGVyZXZlbnQgaW9uLWJ1dHRvbnMge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5oZWFkZXJldmVudCBpb24tYnV0dG9ucyBpbWcge1xuICBtYXJnaW4tbGVmdDogMjVweDtcbn1cbi5oZWFkZXJldmVudCBpb24tdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBiYWNrZ3JvdW5kOiAjMmFkMGE4O1xuICAtLWJhY2tncm91bmQ6ICRjR3JlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAtMjhweDtcbiAgaGVpZ2h0OiA4MXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAzNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMwcHg7XG59XG5cbi5ldmVudHRvb2wge1xuICBiYWNrZ3JvdW5kOiAjNDM4REVEICFpbXBvcnRhbnQ7XG59XG5cbi50b29sYmFyLWJhY2tncm91bmQge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi50b29sYmFyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tab1/tab1.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.ts ***!
  \*****************************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/posts.service */ "./src/app/services/posts.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");




let Tab1Page = class Tab1Page {
    constructor(postService, storage) {
        this.postService = postService;
        this.storage = storage;
        this.posts = [];
        this.habilitado = true;
    }
    ngOnInit() {
        this.siguientes();
        this.postService.nuevoPost.subscribe(post => {
            this.posts.unshift(post);
        });
        if (this.storage.get('post')) {
            this.storage.remove('post');
        }
    }
    recargar(event) {
        this.siguientes(event, true);
        this.habilitado = true;
        this.posts = [];
    }
    siguientes(event, pull = false) {
        this.postService.getPosts(pull).subscribe(response => {
            this.posts.push(...response.posts);
            if (event) {
                event.target.complete();
                if (response.posts.length === 0) {
                    this.habilitado = false;
                }
            }
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tab1/tab1.page.html"),
        styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/pages/tab1/tab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map