(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tab2/tab2.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tab2/tab2.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-title>\n      Nuevo Evento\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"crearPost()\"\n                  [disabled]=\"post.mensaje.length < 1 || cargandoGeo\"\n                  color=\"primary\">\n        Crear\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-list>\n    \n    <ion-item>\n      <ion-label position=\"floating\">Nombre</ion-label>\n      <ion-textarea [(ngModel)]=\"post.mensaje\"></ion-textarea>\n    </ion-item>\n    <!--<ion-list>\n      <ion-item>\n        <ion-label>Posición actual</ion-label>\n        <ion-spinner name=\"lines-small\" *ngIf=\"cargandoGeo\"></ion-spinner>\n        <ion-toggle slot=\"end\" [(ngModel)]=\"post.position\" (ionChange)=\"getGeo()\"></ion-toggle>\n      </ion-item>\n    </ion-list>-->\n  </ion-list>\n\n  <ion-row *ngIf=\"cellphone\">\n    <ion-col size=\"6\">\n      <ion-button expand=\"full\"\n                  shape=\"round\"\n                  (click)=\"camara()\">\n        <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\n        Cámara\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button expand=\"full\"\n                  shape=\"round\"\n                  (click)=\"libreria()\">\n        <ion-icon slot=\"start\" name=\"images\"></ion-icon>\n        Galería\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"!cellphone\">\n    <ion-col>\n        <ion-item class=\"remove_inner_bottom inputupload\">\n          <label class=\"item item-input\">\n            <input type=\"file\" class=\"inputfile \" id=\"file\" name=\"uploadfile\">\n            <ion-icon name=\"link\"></ion-icon>\n          </label>\n        </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item class=\"clblue remove_inner_bottom\">\n          <ion-icon name=\"cloud-upload\"></ion-icon>\n          <ion-button  (click)=\"getFile()\">Subir</ion-button>\n        </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"3\" *ngFor=\"let image of tempImages\">\n      <ion-card>\n        <img [src]=\"image\">\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tab2/tab2.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tab2/tab2.module.ts ***!
  \*******************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/pages/tab2/tab2.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/pages/tab2/tab2.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tab2/tab2.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: Segoe-UI;\n  src: url(\"/assets/fonts/segoe-ui-light-2.ttf\");\n  font-weight: 400;\n  font-style: normal;\n}\n* {\n  font-family: Segoe-UI;\n}\nion-header ion-toolbar {\n  background: #E5E5E5;\n  --background: $cGrey;\n}\nion-header ion-toolbar ion-title {\n  color: #2ad0a8;\n}\nion-header ion-toolbar ion-buttons ion-button {\n  color: #2ad0a8 !important;\n  --ion-color-base: $cGreen!important;\n  font-weight: 600;\n}\nion-content ion-list ion-item ion-label {\n  font-family: Segoe-UI;\n}\nion-content ion-list ion-item ion-textarea {\n  height: 25px;\n}\n@font-face {\n  font-family: Segoe-UI;\n  src: url(\"/assets/fonts/segoe-ui-light-2.ttf\");\n  font-weight: 400;\n  font-style: normal;\n}\n* {\n  font-family: Segoe-UI;\n}\n.clgreen {\n  text-transform: capitalize;\n  border-radius: 50px !important;\n  --border-radius: 50px!important;\n  box-shadow: 0px 2px 1px 0px rgba(3, 221, 43, 0.15);\n  --box-shadow: 0px 2px 1px 0px rgba(3,221,43,0.15);\n  background: #2ad0a8;\n  --background: $cGreen;\n}\n.clgreen:hover {\n  background: #2ad0a8;\n  --background: $cGreen;\n}\n.inputupload .item-input {\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  --border: 1px solid rgba($cBlack,0.15);\n  width: 100%;\n  padding: 7px;\n  border-radius: 10px;\n  position: relative;\n}\n.inputupload .item-input .inputfile {\n  color: rgba(0, 0, 0, 0.75);\n}\n.inputupload .item-input ion-icon {\n  background: #438DED;\n  --background: $cBlue;\n  color: rgba(255, 255, 255, 0.75);\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  padding: 9px;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.clblue {\n  text-transform: capitalize;\n  border-radius: 50px !important;\n  --border-radius: 50px!important;\n  box-shadow: 0px 2px 1px 0px rgba(3, 221, 43, 0.15);\n  --box-shadow: 0px 2px 1px 0px rgba(3,221,43,0.15);\n  background: #438DED;\n  --background: $cBlue;\n  box-shadow: 0px 2px 1px 0px rgba(67, 141, 237, 0.15);\n  --box-shadow: 0px 2px 1px 0px rgba($cBlue,0.15);\n  width: 100px;\n  text-transform: uppercase;\n  margin: 0 auto;\n  color: rgba(255, 255, 255, 0.75);\n}\n.clblue ion-button {\n  box-shadow: none !important;\n  --box-shadow: none!important;\n  background: #438DED;\n  --background: $cBlue;\n}\n.clblue ion-icon {\n  color: rgba(255, 255, 255, 0.75);\n}\n.clblue:hover {\n  background: #438DED;\n  --background: $cBlue;\n}\n.itemlin {\n  border: 0 !important;\n}\n.remove_inner_bottom {\n  --inner-border-width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFiMi9DOlxceGFtcHBcXGh0ZG9jc1xccHJveWVjdG9GaW5hbENQR1xcY3BnL3NyY1xcYXBwXFxwYWdlc1xcdGFiMlxcdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDSSxxQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ05KO0FEU0E7RUFDSSxxQkFBQTtBQ1BKO0FEV0k7RUFDSSxtQkFoQkE7RUFpQkEsb0JBQUE7QUNSUjtBRFNRO0VBQ0ksY0F0Qkg7QUNlVDtBRFVZO0VBQ0kseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FDUmhCO0FEaUJZO0VBQ0kscUJBQUE7QUNkaEI7QURnQlk7RUFDSSxZQUFBO0FDZGhCO0FEMEJBO0VBQ0kscUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUN2Qko7QUQwQkE7RUFDSSxxQkFBQTtBQ3hCSjtBRGtDQTtFQUNFLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQVBVLGtEQUFBO0VBQ0EsaURBQUE7RUFRVixtQkE1Qk87RUE2QlAscUJBQUE7QUM1QkY7QUQ2QkU7RUFDSSxtQkEvQkc7RUFnQ0gscUJBQUE7QUMzQk47QURnQ0U7RUFDRSxxQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDN0JKO0FEOEJJO0VBT0UsMEJBQUE7QUNsQ047QURvQ0k7RUFDRSxtQkF2REU7RUF3REYsb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FDbENOO0FEdUNBO0VBQ0UsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBckRVLGtEQUFBO0VBQ0EsaURBQUE7RUFzRFYsbUJBM0VNO0VBNEVOLG9CQUFBO0VBR0Esb0RBQUE7RUFDQSwrQ0FBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQ2xDRjtBRG1DRTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkF6Rkk7RUEwRk4sb0JBQUE7QUNqQ0Y7QURtQ0U7RUFDRSxnQ0FBQTtBQ2pDSjtBRG1DRTtFQUNJLG1CQWhHRTtFQWlHRixvQkFBQTtBQ2pDTjtBRHFDQTtFQUNFLG9CQUFBO0FDbENGO0FEcUNBO0VBQ0UsdUJBQUE7QUNsQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNCbHVlOiAjNDM4REVEO1xuJGNHcmVlbjogIzJhZDBhODtcbiRjQmxhY2s6ICMwMDA7XG4kY1doaXRlOiAjZmZmO1xuJGNHcmV5OiAjRTVFNUU1O1xuXG5cbkBmb250LWZhY2V7XG4gICAgZm9udC1mYW1pbHk6IFNlZ29lLVVJO1xuICAgIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9zZWdvZS11aS1saWdodC0yLnR0ZlwiKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuXG4qe1xuICAgIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcbn1cblxuaW9uLWhlYWRlcntcbiAgICBpb24tdG9vbGJhcntcbiAgICAgICAgYmFja2dyb3VuZDogJGNHcmV5O1xuICAgICAgICAtLWJhY2tncm91bmQ6ICRjR3JleTtcbiAgICAgICAgaW9uLXRpdGxle1xuICAgICAgICAgICAgY29sb3I6ICRjR3JlZW47XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWJ1dHRvbnN7XG4gICAgICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkY0dyZWVuIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLWlvbi1jb2xvci1iYXNlOiAkY0dyZWVuIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tY29udGVudHtcbiAgICBpb24tbGlzdHtcbiAgICAgICAgaW9uLWl0ZW17XG4gICAgICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFNlZ29lLVVJO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLXRleHRhcmVhe1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuJGNCbHVlOiAjNDM4REVEO1xuJGNHcmVlbjogIzJhZDBhODtcbiRjQmxhY2s6ICMwMDA7XG4kY1doaXRlOiAjZmZmO1xuXG5cbkBmb250LWZhY2V7XG4gICAgZm9udC1mYW1pbHk6IFNlZ29lLVVJO1xuICAgIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9zZWdvZS11aS1saWdodC0yLnR0ZlwiKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuXG4qe1xuICAgIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcbn1cblxuQG1peGluIHNoYWRvd3Nib3JkZXJlc3tcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDMsMjIxLDQzLDAuMTUpO1xuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDFweCAwcHggcmdiYSgzLDIyMSw0MywwLjE1KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDMsMjIxLDQzLDAuMTUpO1xuICAgICAgICAgICAgLS1ib3gtc2hhZG93OiAwcHggMnB4IDFweCAwcHggcmdiYSgzLDIyMSw0MywwLjE1KTtcbn1cblxuLmNsZ3JlZW57XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBib3JkZXItcmFkaXVzOiA1MHB4IWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4IWltcG9ydGFudDtcbiAgQGluY2x1ZGUgc2hhZG93c2JvcmRlcmVzO1xuICBiYWNrZ3JvdW5kOiAkY0dyZWVuO1xuICAtLWJhY2tncm91bmQ6ICRjR3JlZW47XG4gICY6aG92ZXJ7XG4gICAgICBiYWNrZ3JvdW5kOiAkY0dyZWVuO1xuICAgICAgLS1iYWNrZ3JvdW5kOiAkY0dyZWVuO1xuICB9XG59XG5cbi5pbnB1dHVwbG9hZCB7XG4gIC5pdGVtLWlucHV0e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJGNCbGFjaywwLjE1KTtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJGNCbGFjaywwLjE1KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmlucHV0ZmlsZSB7XG4gICAgICAvLyB3aWR0aDogMC4xcHg7XG4gICAgICAvLyBoZWlnaHQ6IDAuMXB4O1xuICAgICAgLy8gb3BhY2l0eTogMDtcbiAgICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAvLyB6LWluZGV4OiAtMTtcbiAgICAgIGNvbG9yOiByZ2JhKCRjQmxhY2ssMC43NSk7XG4gICAgICB9XG4gICAgaW9uLWljb257XG4gICAgICBiYWNrZ3JvdW5kOiAkY0JsdWU7XG4gICAgICAtLWJhY2tncm91bmQ6ICRjQmx1ZTtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC43NSk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgcGFkZGluZzogOXB4O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICB9XG4gIH1cbn1cblxuLmNsYmx1ZXtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHghaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwcHghaW1wb3J0YW50O1xuICBAaW5jbHVkZSBzaGFkb3dzYm9yZGVyZXM7XG4gIGJhY2tncm91bmQ6ICRjQmx1ZTtcbiAgLS1iYWNrZ3JvdW5kOiAkY0JsdWU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoJGNCbHVlLDAuMTUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKCRjQmx1ZSwwLjE1KTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoJGNCbHVlLDAuMTUpO1xuICAtLWJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKCRjQmx1ZSwwLjE1KTtcbiAgd2lkdGg6IDEwMHB4O1xuICAvLyBoZWlnaHQ6IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNzUpO1xuICBpb24tYnV0dG9ue1xuICAgIGJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xuICAgIC0tYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogJGNCbHVlO1xuICAtLWJhY2tncm91bmQ6ICRjQmx1ZTtcbiAgfVxuICBpb24taWNvbntcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNzUpO1xuICB9XG4gICY6aG92ZXJ7XG4gICAgICBiYWNrZ3JvdW5kOiAkY0JsdWU7XG4gICAgICAtLWJhY2tncm91bmQ6ICRjQmx1ZTtcbiAgfVxufVxuXG4uaXRlbWxpbntcbiAgYm9yZGVyOiAwIWltcG9ydGFudDtcbn1cblxuLnJlbW92ZV9pbm5lcl9ib3R0b217XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwOyAvLyB0aGlzIHJlbW92ZXMgdGhlIGlubmVyIGJvcmRlciB3aWR0aFxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogU2Vnb2UtVUk7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9zZWdvZS11aS1saWdodC0yLnR0ZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuKiB7XG4gIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6ICNFNUU1RTU7XG4gIC0tYmFja2dyb3VuZDogJGNHcmV5O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBjb2xvcjogIzJhZDBhODtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiAjMmFkMGE4ICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICRjR3JlZW4haW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LWZhbWlseTogU2Vnb2UtVUk7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24tdGV4dGFyZWEge1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogU2Vnb2UtVUk7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9zZWdvZS11aS1saWdodC0yLnR0ZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuKiB7XG4gIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcbn1cblxuLmNsZ3JlZW4ge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwcHghaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDMsIDIyMSwgNDMsIDAuMTUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDMsIDIyMSwgNDMsIDAuMTUpO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAwcHggcmdiYSgzLCAyMjEsIDQzLCAwLjE1KTtcbiAgLS1ib3gtc2hhZG93OiAwcHggMnB4IDFweCAwcHggcmdiYSgzLDIyMSw0MywwLjE1KTtcbiAgYmFja2dyb3VuZDogIzJhZDBhODtcbiAgLS1iYWNrZ3JvdW5kOiAkY0dyZWVuO1xufVxuLmNsZ3JlZW46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMmFkMGE4O1xuICAtLWJhY2tncm91bmQ6ICRjR3JlZW47XG59XG5cbi5pbnB1dHVwbG9hZCAuaXRlbS1pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIC0tYm9yZGVyOiAxcHggc29saWQgcmdiYSgkY0JsYWNrLDAuMTUpO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogN3B4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaW5wdXR1cGxvYWQgLml0ZW0taW5wdXQgLmlucHV0ZmlsZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuLmlucHV0dXBsb2FkIC5pdGVtLWlucHV0IGlvbi1pY29uIHtcbiAgYmFja2dyb3VuZDogIzQzOERFRDtcbiAgLS1iYWNrZ3JvdW5kOiAkY0JsdWU7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDlweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4uY2xibHVlIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4IWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDFweCAwcHggcmdiYSgzLCAyMjEsIDQzLCAwLjE1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDFweCAwcHggcmdiYSgzLCAyMjEsIDQzLCAwLjE1KTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoMywgMjIxLCA0MywgMC4xNSk7XG4gIC0tYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoMywyMjEsNDMsMC4xNSk7XG4gIGJhY2tncm91bmQ6ICM0MzhERUQ7XG4gIC0tYmFja2dyb3VuZDogJGNCbHVlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDY3LCAxNDEsIDIzNywgMC4xNSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoNjcsIDE0MSwgMjM3LCAwLjE1KTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoNjcsIDE0MSwgMjM3LCAwLjE1KTtcbiAgLS1ib3gtc2hhZG93OiAwcHggMnB4IDFweCAwcHggcmdiYSgkY0JsdWUsMC4xNSk7XG4gIHdpZHRoOiAxMDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xufVxuLmNsYmx1ZSBpb24tYnV0dG9uIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAtLWJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjNDM4REVEO1xuICAtLWJhY2tncm91bmQ6ICRjQmx1ZTtcbn1cbi5jbGJsdWUgaW9uLWljb24ge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbn1cbi5jbGJsdWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNDM4REVEO1xuICAtLWJhY2tncm91bmQ6ICRjQmx1ZTtcbn1cblxuLml0ZW1saW4ge1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cblxuLnJlbW92ZV9pbm5lcl9ib3R0b20ge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tab2/tab2.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tab2/tab2.page.ts ***!
  \*****************************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "./src/app/services/posts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_ui_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/ui-service.service */ "./src/app/services/ui-service.service.ts");








let Tab2Page = class Tab2Page {
    constructor(postService, router, geolocation, camera, platform, uiService, el) {
        this.postService = postService;
        this.router = router;
        this.geolocation = geolocation;
        this.camera = camera;
        this.platform = platform;
        this.uiService = uiService;
        this.el = el;
        this.tempImages = [];
        this.post = {
            mensaje: '',
            coords: null,
            position: false
        };
        this.cargandoGeo = false;
    }
    ngOnInit() {
        if (this.platform.is('mobile')) {
            this.cellphone = true;
        }
        else {
            this.cellphone = false;
        }
    }
    crearPost() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const creado = yield this.postService.createPost(this.post);
            this.post = {
                mensaje: '',
                coords: null,
                position: false
            };
            this.tempImages = [];
            this.router.navigateByUrl('/main/tabs/tab1');
        });
    }
    getGeo() {
        if (!this.post.position) {
            this.post.coords = null;
        }
        this.cargandoGeo = true;
        this.geolocation.getCurrentPosition().then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            this.cargandoGeo = false;
            const coords = `${resp.coords.latitude},${resp.coords.longitude}`;
            this.post.coords = coords;
        }).catch((error) => {
            this.cargandoGeo = false;
        });
    }
    camara() {
        const options = {
            quality: 60,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.CAMERA
        };
        this.procesarImagen(options);
    }
    libreria() {
        const options = {
            quality: 60,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.procesarImagen(options);
    }
    procesarImagen(options) {
        this.camera.getPicture(options).then((imageData) => {
            const img = window.Ionic.WebView.convertFileSrc(imageData);
            this.postService.subirImagen(imageData);
            this.tempImages.push(img);
        }, (err) => {
            // Handle error
        });
    }
    getFile() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const inputEl = this.el.nativeElement.querySelector('#file');
            const files = inputEl.files;
            /*const response = await this.asistenteService.uploadFile(files, this.post);
            if(response === false){
              this.uiService.alertaInformativa('Error al importar el excel');
            } else {
              this.uiService.alertaInformativa('Se importaron ' + response + ' asistentes.');
            }*/
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _services_ui_service_service__WEBPACK_IMPORTED_MODULE_7__["UiServiceService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tab2/tab2.page.html"),
        styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/pages/tab2/tab2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _services_ui_service_service__WEBPACK_IMPORTED_MODULE_7__["UiServiceService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], Tab2Page);



/***/ }),

/***/ "./src/app/pipes/dom-sanitizer.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/dom-sanitizer.pipe.ts ***!
  \*********************************************/
/*! exports provided: DomSanitizerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomSanitizerPipe", function() { return DomSanitizerPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let DomSanitizerPipe = class DomSanitizerPipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(img) {
        const domImg = `background-image:url('${img}')`;
        return this.domSanitizer.bypassSecurityTrustStyle(domImg);
    }
};
DomSanitizerPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
DomSanitizerPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'domSanitizer'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], DomSanitizerPipe);



/***/ }),

/***/ "./src/app/pipes/image-sanitizer.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/pipes/image-sanitizer.pipe.ts ***!
  \***********************************************/
/*! exports provided: ImageSanitizerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSanitizerPipe", function() { return ImageSanitizerPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let ImageSanitizerPipe = class ImageSanitizerPipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(img) {
        return this.domSanitizer.bypassSecurityTrustUrl(img);
    }
};
ImageSanitizerPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
ImageSanitizerPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'imageSanitizer'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], ImageSanitizerPipe);



/***/ }),

/***/ "./src/app/pipes/imagen.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/imagen.pipe.ts ***!
  \**************************************/
/*! exports provided: ImagenPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagenPipe", function() { return ImagenPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



const URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url;
let ImagenPipe = class ImagenPipe {
    transform(img, userId) {
        return `${URL}/posts/imagen/${userId}/${img}`;
    }
};
ImagenPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'imagen'
    })
], ImagenPipe);



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dom_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-sanitizer.pipe */ "./src/app/pipes/dom-sanitizer.pipe.ts");
/* harmony import */ var _image_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-sanitizer.pipe */ "./src/app/pipes/image-sanitizer.pipe.ts");
/* harmony import */ var _imagen_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imagen.pipe */ "./src/app/pipes/imagen.pipe.ts");





let PipesModule = class PipesModule {
};
PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _dom_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_2__["DomSanitizerPipe"],
            _image_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_3__["ImageSanitizerPipe"],
            _imagen_pipe__WEBPACK_IMPORTED_MODULE_4__["ImagenPipe"]
        ],
        exports: [
            _dom_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_2__["DomSanitizerPipe"],
            _image_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_3__["ImageSanitizerPipe"],
            _imagen_pipe__WEBPACK_IMPORTED_MODULE_4__["ImagenPipe"]
        ]
    })
], PipesModule);



/***/ }),

/***/ "./src/app/services/ui-service.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/ui-service.service.ts ***!
  \************************************************/
/*! exports provided: UiServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiServiceService", function() { return UiServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let UiServiceService = class UiServiceService {
    constructor(alertController, toastController) {
        this.alertController = alertController;
        this.toastController = toastController;
    }
    alertaInformativa(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                position: 'top',
                duration: 1500
            });
            toast.present();
        });
    }
};
UiServiceService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
UiServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], UiServiceService);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map