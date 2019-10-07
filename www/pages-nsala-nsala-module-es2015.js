(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-nsala-nsala-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/nsala/nsala.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/nsala/nsala.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"><ion-back-button defaultHref=\"salas\"></ion-back-button></ion-buttons>\n    <ion-title class=\"ion-text-capitalize\">{{titulo}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n    <form (ngSubmit)=\"nuevaSala(fSala)\" #fSala=\"ngForm\">\n        <ion-row>\n          <ion-col>\n            <ion-list>    \n              <ion-item>\n                  <ion-label position=\"floating\">Código</ion-label>\n                  <ion-input type=\"number\" name=\"codigo\" [(ngModel)]=\"sala.codigo\" required></ion-input>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label position=\"floating\">Nombre</ion-label>\n                  <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"sala.name\" required class=\"ion-text-capitalize\" ></ion-input>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label position=\"floating\">Tipo</ion-label>\n                  <ion-select value=\"notifications\" interface=\"action-sheet\" name=\"tipo\" [(ngModel)]=\"sala.tipo\" cancelText=\"Cancelar\" required>\n                    <ion-select-option value=\"Puerta\">Puerta</ion-select-option>\n                    <ion-select-option value=\"Sala\">Sala</ion-select-option>\n                  </ion-select>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label position=\"floating\">Aforo</ion-label>\n                  <ion-input type=\"number\" name=\"aforo\" [(ngModel)]=\"sala.aforo\"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label position=\"floating\">Aforo superado</ion-label>\n                  <ion-input type=\"number\" name=\"aforosuperado\" [(ngModel)]=\"sala.aforosuperado\"></ion-input>\n              </ion-item>\n\n            </ion-list>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n              <ion-button type=\"submit\"\n                          class=\"clgreen\"\n                          expand=\"block\"\n                          [disabled]=\"fSala.form.invalid\">\n              Guardar\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/nsala/nsala.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/nsala/nsala.module.ts ***!
  \*********************************************/
/*! exports provided: NsalaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NsalaPageModule", function() { return NsalaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nsala_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nsala.page */ "./src/app/pages/nsala/nsala.page.ts");







const routes = [
    {
        path: '',
        component: _nsala_page__WEBPACK_IMPORTED_MODULE_6__["NsalaPage"]
    }
];
let NsalaPageModule = class NsalaPageModule {
};
NsalaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_nsala_page__WEBPACK_IMPORTED_MODULE_6__["NsalaPage"]]
    })
], NsalaPageModule);



/***/ }),

/***/ "./src/app/pages/nsala/nsala.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/nsala/nsala.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: Segoe-UI;\n  src: url(\"/assets/fonts/segoe-ui-light-2.ttf\");\n  font-weight: 400;\n  font-style: normal;\n}\n* {\n  font-family: Segoe-UI;\n}\n.clgreen {\n  text-transform: capitalize;\n  border-radius: 50px !important;\n  --border-radius: 50px!important;\n  box-shadow: 0px 2px 1px 0px rgba(3, 221, 43, 0.15);\n  --box-shadow: 0px 2px 1px 0px rgba(3,221,43,0.15);\n  background: #2ad0a8;\n  --background: $cGreen;\n}\n.clgreen:hover {\n  background: #2ad0a8;\n  --background: $cGreen;\n}\nion-header {\n  background: #438DED !important;\n  --background:$cBlue!important;\n}\nion-header ion-toolbar {\n  background: #438DED !important;\n  --background:$cBlue!important;\n}\nion-header ion-buttons {\n  color: #fff;\n}\nion-header ion-title {\n  color: #fff;\n  font-size: 18px;\n  padding: 0;\n}\nform ion-item {\n  width: 50%;\n  display: inline-block;\n}\nform ion-item ion-label {\n  font-family: Segoe-UI;\n}\nform ion-item ion-input {\n  font-family: Segoe-UI;\n}\nform ion-item ion-select-option {\n  font-family: Segoe-UI;\n}\n.action-sheet-button.sc-ion-action-sheet-md {\n  font-family: Segoe-UI !important;\n}\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n  form ion-item {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbnNhbGEvQzpcXHhhbXBwXFxodGRvY3NcXHByb3llY3RvRmluYWxDUEdcXGNwZy9zcmNcXGFwcFxccGFnZXNcXG5zYWxhXFxuc2FsYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25zYWxhL25zYWxhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNJLHFCQUFBO0VBQ0EsOENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTEo7QURRQTtFQUNJLHFCQUFBO0FDTko7QURnQkE7RUFDRSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFQVSxrREFBQTtFQUNBLGlEQUFBO0VBUVYsbUJBNUJPO0VBNkJQLHFCQUFBO0FDVkY7QURXRTtFQUNJLG1CQS9CRztFQWdDSCxxQkFBQTtBQ1ROO0FEYUE7RUFDSSw4QkFBQTtFQUNBLDZCQUFBO0FDVko7QURXSTtFQUNJLDhCQUFBO0VBQ0EsNkJBQUE7QUNUUjtBRFdJO0VBQ0UsV0ExQ0c7QUNpQ1Q7QURXSTtFQUNFLFdBN0NHO0VBOENILGVBQUE7RUFDRixVQUFBO0FDVEo7QURjRTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtBQ1hKO0FEWUk7RUFDRSxxQkFBQTtBQ1ZOO0FEWUk7RUFDRSxxQkFBQTtBQ1ZOO0FEWUk7RUFDRSxxQkFBQTtBQ1ZOO0FEZUE7RUFDRSxnQ0FBQTtBQ1pGO0FEZ0JBO0VBSU07SUFDRSxzQkFBQTtFQ2hCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbnNhbGEvbnNhbGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNCbHVlOiAjNDM4REVEO1xyXG4kY0dyZWVuOiAjMmFkMGE4O1xyXG4kY0JsYWNrOiAjMDAwO1xyXG4kY1doaXRlOiAjZmZmO1xyXG5cclxuXHJcbkBmb250LWZhY2V7XHJcbiAgICBmb250LWZhbWlseTogU2Vnb2UtVUk7XHJcbiAgICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvc2Vnb2UtdWktbGlnaHQtMi50dGZcIik7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIH1cclxuXHJcbip7XHJcbiAgICBmb250LWZhbWlseTogU2Vnb2UtVUk7XHJcbn1cclxuXHJcbkBtaXhpbiBzaGFkb3dzYm9yZGVyZXN7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDMsMjIxLDQzLDAuMTUpO1xyXG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDMsMjIxLDQzLDAuMTUpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAwcHggcmdiYSgzLDIyMSw0MywwLjE1KTtcclxuICAgICAgICAgICAgLS1ib3gtc2hhZG93OiAwcHggMnB4IDFweCAwcHggcmdiYSgzLDIyMSw0MywwLjE1KTtcclxufVxyXG5cclxuLmNsZ3JlZW57XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweCFpbXBvcnRhbnQ7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4IWltcG9ydGFudDtcclxuICBAaW5jbHVkZSBzaGFkb3dzYm9yZGVyZXM7XHJcbiAgYmFja2dyb3VuZDogJGNHcmVlbjtcclxuICAtLWJhY2tncm91bmQ6ICRjR3JlZW47XHJcbiAgJjpob3ZlcntcclxuICAgICAgYmFja2dyb3VuZDogJGNHcmVlbjtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAkY0dyZWVuO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQ6JGNCbHVlIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDokY0JsdWUhaW1wb3J0YW50O1xyXG4gICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDokY0JsdWUhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDokY0JsdWUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgaW9uLWJ1dHRvbnN7XHJcbiAgICAgIGNvbG9yOiAkY1doaXRlO1xyXG4gICAgfVxyXG4gICAgaW9uLXRpdGxle1xyXG4gICAgICBjb2xvcjogJGNXaGl0ZTtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIH1cclxufVxyXG5cclxuZm9ybXtcclxuICBpb24taXRlbXtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcclxuICAgIH1cclxuICAgIGlvbi1pbnB1dHtcclxuICAgICAgZm9udC1mYW1pbHk6IFNlZ29lLVVJO1xyXG4gICAgfVxyXG4gICAgaW9uLXNlbGVjdC1vcHRpb257XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7XHJcbiAgZm9udC1mYW1pbHk6IFNlZ29lLVVJIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbkBtZWRpYVxyXG5vbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpLFxyXG4obWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KXtcclxuICBmb3Jte1xyXG4gICAgICBpb24taXRlbXtcclxuICAgICAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL3NlZ29lLXVpLWxpZ2h0LTIudHRmXCIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4qIHtcbiAgZm9udC1mYW1pbHk6IFNlZ29lLVVJO1xufVxuXG4uY2xncmVlbiB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweCFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoMywgMjIxLCA0MywgMC4xNSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoMywgMjIxLCA0MywgMC4xNSk7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDMsIDIyMSwgNDMsIDAuMTUpO1xuICAtLWJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDMsMjIxLDQzLDAuMTUpO1xuICBiYWNrZ3JvdW5kOiAjMmFkMGE4O1xuICAtLWJhY2tncm91bmQ6ICRjR3JlZW47XG59XG4uY2xncmVlbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyYWQwYTg7XG4gIC0tYmFja2dyb3VuZDogJGNHcmVlbjtcbn1cblxuaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICM0MzhERUQgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiRjQmx1ZSFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogIzQzOERFRCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6JGNCbHVlIWltcG9ydGFudDtcbn1cbmlvbi1oZWFkZXIgaW9uLWJ1dHRvbnMge1xuICBjb2xvcjogI2ZmZjtcbn1cbmlvbi1oZWFkZXIgaW9uLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMDtcbn1cblxuZm9ybSBpb24taXRlbSB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbmZvcm0gaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFNlZ29lLVVJO1xufVxuZm9ybSBpb24taXRlbSBpb24taW5wdXQge1xuICBmb250LWZhbWlseTogU2Vnb2UtVUk7XG59XG5mb3JtIGlvbi1pdGVtIGlvbi1zZWxlY3Qtb3B0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFNlZ29lLVVJO1xufVxuXG4uYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LW1kIHtcbiAgZm9udC1mYW1pbHk6IFNlZ29lLVVJICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpLCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSB7XG4gIGZvcm0gaW9uLWl0ZW0ge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/nsala/nsala.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/nsala/nsala.page.ts ***!
  \*******************************************/
/*! exports provided: NsalaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NsalaPage", function() { return NsalaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_sala_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/sala.service */ "./src/app/services/sala.service.ts");
/* harmony import */ var _services_ui_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ui-service.service */ "./src/app/services/ui-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let NsalaPage = class NsalaPage {
    constructor(storage, salaService, uiService, navCtrl) {
        this.storage = storage;
        this.salaService = salaService;
        this.uiService = uiService;
        this.navCtrl = navCtrl;
        this.titulo = 'Crear sala';
        this.sala = {};
    }
    ngOnInit() {
        this.cargarPost();
    }
    nuevaSala(fSala) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const name = this.sala.name;
            this.sala.name = this.capitalize(name);
            this.sala.post = this.post;
            if (fSala.invalid) {
                return;
            }
            const valido = yield this.salaService.createSala(this.sala);
            if (valido) {
                this.uiService.presentToast('Sala creada!');
                this.navCtrl.navigateRoot('/salas', { animated: true });
            }
            else {
                this.uiService.alertaInformativa('Datos duplicados!');
            }
        });
    }
    cargarPost() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.post = yield this.storage.get('post');
        });
    }
    capitalize(value) {
        return value.replace(/(?:^|\s)\S/g, l => l.toUpperCase());
    }
};
NsalaPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_sala_service__WEBPACK_IMPORTED_MODULE_3__["SalaService"] },
    { type: _services_ui_service_service__WEBPACK_IMPORTED_MODULE_4__["UiServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
NsalaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nsala',
        template: __webpack_require__(/*! raw-loader!./nsala.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/nsala/nsala.page.html"),
        styles: [__webpack_require__(/*! ./nsala.page.scss */ "./src/app/pages/nsala/nsala.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
        _services_sala_service__WEBPACK_IMPORTED_MODULE_3__["SalaService"],
        _services_ui_service_service__WEBPACK_IMPORTED_MODULE_4__["UiServiceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], NsalaPage);



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
//# sourceMappingURL=pages-nsala-nsala-module-es2015.js.map