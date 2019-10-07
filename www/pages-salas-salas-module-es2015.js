(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-salas-salas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/modal-edit-sala/modal-edit-sala.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/modal-edit-sala/modal-edit-sala.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar>\n      <ion-title class=\"ion-text-capitalize\">Editar Sala</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>    \n    <form (ngSubmit)=\"updateSala(fSala)\" #fSala=\"ngForm\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"floating\">Código</ion-label>\n            <ion-input type=\"text\" name=\"codigo\" [(ngModel)]=\"sala.codigo\" disabled=\"true\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n            <ion-item>\n              <ion-label position=\"floating\">Nombre</ion-label>\n              <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"sala.name\" class=\"ion-text-capitalize\" required></ion-input>\n            </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"floating\">Tipo</ion-label>\n            <ion-select value=\"notifications\" interface=\"action-sheet\" name=\"tipo\" [(ngModel)]=\"sala.tipo\" cancelText=\"Cancelar\" required>\n              <ion-select-option value=\"Puerta\">Puerta</ion-select-option>\n              <ion-select-option value=\"Sala\">Sala</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n            <ion-item>\n                <ion-label position=\"floating\">Aforo</ion-label>\n                <ion-input type=\"number\" name=\"aforo\" [(ngModel)]=\"sala.aforo\"></ion-input>\n            </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n            <ion-col >\n                <ion-item>\n                  <ion-label position=\"floating\">Aforo superado</ion-label>\n                  <ion-input type=\"number\" name=\"aforosuperado\" [(ngModel)]=\"sala.aforosuperado\"></ion-input>\n              </ion-item>\n            </ion-col>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button type=\"submit\" [disabled]=\"fSala.form.invalid\" color=\"cgreen\" expand=\"full\" shape=\"round\">Guardar</ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button (click)=\"salirConArgumentos()\" color=\"cgreen\" expand=\"full\" shape=\"round\">Cerrar</ion-button>\n        </ion-col>\n      </ion-row>\n    </form> \n  </ion-content>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/salas/salas.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/salas/salas.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"><ion-back-button defaultHref=\"event\"></ion-back-button></ion-buttons>\n    <ion-title class=\"ion-text-capitalize\">{{titulo}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"recargar($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <ion-grid>\n        <ion-row>\n          <ion-col>\n              <ion-button class=\"clgreen\" [routerLink]=\"['/nsala']\">Crear sala</ion-button>\n              <!--<ion-button class=\"clblue\" [routerLink]=\"['/scancodigo']\"><ion-icon name=\"qr-scanner\"></ion-icon></ion-button>-->\n          </ion-col>\n        </ion-row>    \n        <ion-row>\n          <ion-col>\n            <table>\n              <thead>\n              <tr class=\"radiustr\">\n                <th class=\"radiusthleft\">Código</th>\n                <th>Nombre</th>\n                <th>Tipo</th>\n                <th>Aforo</th>\n                <th>Aforo Superado</th>\n                <th>Visualizar</th>\n                <th>Editar</th>\n                <th class=\"radiusthright\">Eliminar</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor=\"let sala of salas\">\n                <td>{{sala.codigo}}</td>\n                <td>{{sala.name}}</td>\n                <td>{{sala.tipo}}</td>\n                <td>{{sala.aforo}}</td>\n                <td>{{sala.aforosuperado}}</td>\n                <td><ion-button (click)=\"onWatch(sala)\"><ion-icon slot=\"icon-only\" name=\"eye\"></ion-icon></ion-button></td>\n                <td><ion-button (click)=\"onEdit(sala)\"><ion-icon slot=\"icon-only\" name=\"create\"></ion-icon></ion-button></td>\n                <td><ion-button (click)=\"onDelete(sala)\"><ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon></ion-button></td>\n              </tr>\n              </tbody>\n            </table>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/modal-edit-sala/modal-edit-sala.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/modal-edit-sala/modal-edit-sala.module.ts ***!
  \*****************************************************************/
/*! exports provided: ModalEditSalaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEditSalaPageModule", function() { return ModalEditSalaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_edit_sala_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-edit-sala.page */ "./src/app/pages/modal-edit-sala/modal-edit-sala.page.ts");






let ModalEditSalaPageModule = class ModalEditSalaPageModule {
};
ModalEditSalaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
        ],
        declarations: [_modal_edit_sala_page__WEBPACK_IMPORTED_MODULE_5__["ModalEditSalaPage"]]
    })
], ModalEditSalaPageModule);



/***/ }),

/***/ "./src/app/pages/modal-edit-sala/modal-edit-sala.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/modal-edit-sala/modal-edit-sala.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZGFsLWVkaXQtc2FsYS9tb2RhbC1lZGl0LXNhbGEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/modal-edit-sala/modal-edit-sala.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/modal-edit-sala/modal-edit-sala.page.ts ***!
  \***************************************************************/
/*! exports provided: ModalEditSalaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEditSalaPage", function() { return ModalEditSalaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_sala_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/sala.service */ "./src/app/services/sala.service.ts");
/* harmony import */ var src_app_services_ui_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ui-service.service */ "./src/app/services/ui-service.service.ts");





let ModalEditSalaPage = class ModalEditSalaPage {
    constructor(modalCtrl, toastController, salaService, uiService) {
        this.modalCtrl = modalCtrl;
        this.toastController = toastController;
        this.salaService = salaService;
        this.uiService = uiService;
    }
    ngOnInit() {
        console.log(this.sala);
    }
    salirConArgumentos() {
        this.modalCtrl.dismiss({
            ok: true,
        });
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Sala editada con éxito!',
                duration: 2000
            });
            toast.present();
        });
    }
    updateSala(fSala) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const name = (this.sala.name) ? this.sala.name : '';
            this.sala.name = this.capitalize(name);
            if (fSala.invalid) {
                return;
            }
            const valido = yield this.salaService.updateSalaComplete(this.sala);
            if (valido) {
                this.presentToast();
                this.salirConArgumentos();
            }
            else {
                this.uiService.alertaInformativa('Código ya existe en la BD!');
            }
        });
    }
    capitalize(value) {
        return value.replace(/(?:^|\s)\S/g, l => l.toUpperCase());
    }
};
ModalEditSalaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _services_sala_service__WEBPACK_IMPORTED_MODULE_3__["SalaService"] },
    { type: src_app_services_ui_service_service__WEBPACK_IMPORTED_MODULE_4__["UiServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ModalEditSalaPage.prototype, "sala", void 0);
ModalEditSalaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-edit-sala',
        template: __webpack_require__(/*! raw-loader!./modal-edit-sala.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/modal-edit-sala/modal-edit-sala.page.html"),
        styles: [__webpack_require__(/*! ./modal-edit-sala.page.scss */ "./src/app/pages/modal-edit-sala/modal-edit-sala.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _services_sala_service__WEBPACK_IMPORTED_MODULE_3__["SalaService"],
        src_app_services_ui_service_service__WEBPACK_IMPORTED_MODULE_4__["UiServiceService"]])
], ModalEditSalaPage);



/***/ }),

/***/ "./src/app/pages/salas/salas.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/salas/salas.module.ts ***!
  \*********************************************/
/*! exports provided: SalasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalasPageModule", function() { return SalasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _salas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./salas.page */ "./src/app/pages/salas/salas.page.ts");
/* harmony import */ var _modal_edit_sala_modal_edit_sala_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal-edit-sala/modal-edit-sala.module */ "./src/app/pages/modal-edit-sala/modal-edit-sala.module.ts");
/* harmony import */ var _modal_edit_sala_modal_edit_sala_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal-edit-sala/modal-edit-sala.page */ "./src/app/pages/modal-edit-sala/modal-edit-sala.page.ts");









const routes = [
    {
        path: '',
        component: _salas_page__WEBPACK_IMPORTED_MODULE_6__["SalasPage"]
    }
];
let SalasPageModule = class SalasPageModule {
};
SalasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _modal_edit_sala_modal_edit_sala_page__WEBPACK_IMPORTED_MODULE_8__["ModalEditSalaPage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _modal_edit_sala_modal_edit_sala_module__WEBPACK_IMPORTED_MODULE_7__["ModalEditSalaPageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_salas_page__WEBPACK_IMPORTED_MODULE_6__["SalasPage"]]
    })
], SalasPageModule);



/***/ }),

/***/ "./src/app/pages/salas/salas.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/salas/salas.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n@font-face {\n  font-family: Segoe-UI;\n  src: url(\"/assets/fonts/segoe-ui-light-2.ttf\");\n  font-weight: 400;\n  font-style: normal;\n}\n* {\n  font-family: Segoe-UI;\n}\nion-header {\n  background: #438DED !important;\n  --background:$cBlue!important;\n}\nion-header ion-toolbar {\n  background: #438DED !important;\n  --background:$cBlue!important;\n}\nion-header ion-buttons {\n  color: #fff;\n}\nion-header ion-title {\n  color: #fff;\n  font-size: 18px;\n  padding: 0 !important;\n}\n.clgreen {\n  text-transform: capitalize;\n  border-radius: 50px !important;\n  --border-radius: 50px!important;\n  box-shadow: 0px 2px 1px 0px rgba(3, 221, 43, 0.15);\n  --box-shadow: 0px 2px 1px 0px rgba(3,221,43,0.15);\n  background: #2ad0a8;\n  --background: $cGreen;\n}\n.clgreen:hover {\n  background: #2ad0a8;\n  --background: $cGreen;\n}\n.radiusthleft {\n  border-top-left-radius: 10px;\n}\n.radiusthright {\n  border-top-right-radius: 10px;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n/* Zebra striping */\ntr:nth-of-type(odd) {\n  background: #fff;\n}\nth {\n  background: #438DED;\n  color: white;\n  font-weight: 400;\n}\ntd, th {\n  padding: 8px;\n  border: 0;\n  text-align: left;\n  font-family: Segoe-UI;\n  font-size: 14px;\n}\n/*\nMax width before this PARTICULAR table gets nasty\nThis query will take effect for any screen smaller than 760px\nand also iPads specifically.\n*/\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n  /* Force table to not be like tables anymore */\n  table, thead, tbody, th, td, tr {\n    display: block;\n  }\n\n  /* Hide table headers (but not display: none;, for accessibility) */\n  thead tr {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n\n  tr {\n    border: 1px solid #ccc;\n  }\n\n  td {\n    /* Behave  like a \"row\" */\n    border: none;\n    border-bottom: 1px solid #eee;\n    position: relative;\n  }\n\n  td:before {\n    /* Now like a table header */\n    position: relative;\n    /* Top/left values mimic padding */\n    top: 0px;\n    left: 6px;\n    width: 45%;\n    padding-right: 10px;\n    white-space: nowrap;\n  }\n\n  /*\n  Label the data\n  */\n  td:nth-of-type(1) {\n    background: #2ad0a8;\n    color: #fff !important;\n    --color: #fff!important;\n  }\n\n  td:nth-of-type(1):before {\n    content: \"Código:\";\n    color: #fff;\n    --color: #ffffff;\n  }\n\n  td:nth-of-type(2):before {\n    content: \"Nombre:\";\n    color: #2ad0a8;\n    --color: #2ad0a8;\n  }\n\n  td:nth-of-type(3):before {\n    content: \"Tipo:\";\n    color: #2ad0a8;\n    --color: #2ad0a8;\n  }\n\n  td:nth-of-type(4):before {\n    content: \"Aforo:\";\n    color: #2ad0a8;\n    --color: #2ad0a8;\n  }\n\n  td:nth-of-type(5):before {\n    content: \"Aforo Superado:\";\n    color: #2ad0a8;\n    --color: #2ad0a8;\n  }\n\n  td:nth-of-type(6):before {\n    content: \"Visualizar:\";\n    color: #2ad0a8;\n    --color: #2ad0a8;\n  }\n\n  td:nth-of-type(7):before {\n    content: \"Editar:\";\n    color: #2ad0a8;\n    --color: #2ad0a8;\n  }\n\n  td:nth-of-type(8):before {\n    content: \"Eliminar:\";\n    color: #2ad0a8;\n    --color: #2ad0a8;\n  }\n}\n/* Smartphones (portrait and landscape) ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  body {\n    padding: 0;\n    margin: 0;\n    width: 320px;\n  }\n}\n/* iPads (portrait and landscape) ----------- */\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n  body {\n    width: 495px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2FsYXMvc2FsYXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zYWxhcy9DOlxceGFtcHBcXGh0ZG9jc1xccHJveWVjdG9GaW5hbENQR1xcY3BnL3NyY1xcYXBwXFxwYWdlc1xcc2FsYXNcXHNhbGFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNNaEI7RUFDSSxxQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBREpKO0FDT0E7RUFDSSxxQkFBQTtBRExKO0FDZUE7RUFDSSw4QkFBQTtFQUNBLDZCQUFBO0FEWko7QUNhSTtFQUNJLDhCQUFBO0VBQ0EsNkJBQUE7QURYUjtBQ2FJO0VBQ0UsV0E3Qkc7QURrQlQ7QUNhSTtFQUNFLFdBaENHO0VBaUNILGVBQUE7RUFDQSxxQkFBQTtBRFhOO0FDZUE7RUFDSSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUF4QkEsa0RBQUE7RUFDQSxpREFBQTtFQXlCQSxtQkE3Q0s7RUE4Q0wscUJBQUE7QURUSjtBQ1VJO0VBQ0ksbUJBaERDO0VBaURELHFCQUFBO0FEUlI7QUNZQTtFQUNJLDRCQUFBO0FEVEo7QUNXQTtFQUNJLDZCQUFBO0FEUko7QUNXQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBRFJKO0FDVUEsbUJBQUE7QUFDQTtFQUNJLGdCQUFBO0FEUEo7QUNTQTtFQUNJLG1CQXRFSTtFQXVFSixZQUFBO0VBQ0EsZ0JBQUE7QUROSjtBQ1FBO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRExKO0FDU0E7Ozs7Q0FBQTtBQUtBO0VBSUksOENBQUE7RUFDQTtJQUNJLGNBQUE7RURUTjs7RUNZRSxtRUFBQTtFQUNBO0lBQ0ksa0JBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFRFROOztFQ1lFO0lBQUssc0JBQUE7RURSUDs7RUNVRTtJQUNJLHlCQUFBO0lBQ0EsWUFBQTtJQUNBLDZCQUFBO0lBQ0Esa0JBQUE7RURQTjs7RUNVRTtJQUNJLDRCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQ0FBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RURQTjs7RUNTRTs7R0FBQTtFQUdBO0lBQW9CLG1CQTdIZjtJQTZIb0Msc0JBQUE7SUFBMEIsdUJBQUE7RURIckU7O0VDSUU7SUFBMkIsa0JBQUE7SUFBb0IsV0E1SDFDO0lBNEgwRCxnQkFBQTtFREVqRTs7RUNERTtJQUEyQixrQkFBQTtJQUFvQixjQS9IMUM7SUErSDBELGdCQUFBO0VET2pFOztFQ05FO0lBQTJCLGdCQUFBO0lBQWtCLGNBaEl4QztJQWdJd0QsZ0JBQUE7RURZL0Q7O0VDWEU7SUFBMkIsaUJBQUE7SUFBbUIsY0FqSXpDO0lBaUl5RCxnQkFBQTtFRGlCaEU7O0VDaEJFO0lBQTJCLDBCQUFBO0lBQTRCLGNBbElsRDtJQWtJa0UsZ0JBQUE7RURzQnpFOztFQ3JCRTtJQUEyQixzQkFBQTtJQUF3QixjQW5JOUM7SUFtSThELGdCQUFBO0VEMkJyRTs7RUMxQkU7SUFBMkIsa0JBQUE7SUFBb0IsY0FwSTFDO0lBb0kwRCxnQkFBQTtFRGdDakU7O0VDL0JFO0lBQTJCLG9CQUFBO0lBQXNCLGNBckk1QztJQXFJNEQsZ0JBQUE7RURxQ25FO0FBQ0Y7QUNsQ0EscURBQUE7QUFDQTtFQUdJO0lBQ0ksVUFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0VEa0NOO0FBQ0Y7QUNoQ0EsK0NBQUE7QUFDQTtFQUNJO0lBQ0ksWUFBQTtFRGtDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2FsYXMvc2FsYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL3NlZ29lLXVpLWxpZ2h0LTIudHRmXCIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4qIHtcbiAgZm9udC1mYW1pbHk6IFNlZ29lLVVJO1xufVxuXG5pb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzQzOERFRCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6JGNCbHVlIWltcG9ydGFudDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjNDM4REVEICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDokY0JsdWUhaW1wb3J0YW50O1xufVxuaW9uLWhlYWRlciBpb24tYnV0dG9ucyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuaW9uLWhlYWRlciBpb24tdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5jbGdyZWVuIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4IWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDFweCAwcHggcmdiYSgzLCAyMjEsIDQzLCAwLjE1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDFweCAwcHggcmdiYSgzLCAyMjEsIDQzLCAwLjE1KTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoMywgMjIxLCA0MywgMC4xNSk7XG4gIC0tYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoMywyMjEsNDMsMC4xNSk7XG4gIGJhY2tncm91bmQ6ICMyYWQwYTg7XG4gIC0tYmFja2dyb3VuZDogJGNHcmVlbjtcbn1cbi5jbGdyZWVuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzJhZDBhODtcbiAgLS1iYWNrZ3JvdW5kOiAkY0dyZWVuO1xufVxuXG4ucmFkaXVzdGhsZWZ0IHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbn1cblxuLnJhZGl1c3RocmlnaHQge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLyogWmVicmEgc3RyaXBpbmcgKi9cbnRyOm50aC1vZi10eXBlKG9kZCkge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG50aCB7XG4gIGJhY2tncm91bmQ6ICM0MzhERUQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxudGQsIHRoIHtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXI6IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4vKlxuTWF4IHdpZHRoIGJlZm9yZSB0aGlzIFBBUlRJQ1VMQVIgdGFibGUgZ2V0cyBuYXN0eVxuVGhpcyBxdWVyeSB3aWxsIHRha2UgZWZmZWN0IGZvciBhbnkgc2NyZWVuIHNtYWxsZXIgdGhhbiA3NjBweFxuYW5kIGFsc28gaVBhZHMgc3BlY2lmaWNhbGx5LlxuKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpLCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSB7XG4gIC8qIEZvcmNlIHRhYmxlIHRvIG5vdCBiZSBsaWtlIHRhYmxlcyBhbnltb3JlICovXG4gIHRhYmxlLCB0aGVhZCwgdGJvZHksIHRoLCB0ZCwgdHIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLyogSGlkZSB0YWJsZSBoZWFkZXJzIChidXQgbm90IGRpc3BsYXk6IG5vbmU7LCBmb3IgYWNjZXNzaWJpbGl0eSkgKi9cbiAgdGhlYWQgdHIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC05OTk5cHg7XG4gICAgbGVmdDogLTk5OTlweDtcbiAgfVxuXG4gIHRyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB9XG5cbiAgdGQge1xuICAgIC8qIEJlaGF2ZSAgbGlrZSBhIFwicm93XCIgKi9cbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgdGQ6YmVmb3JlIHtcbiAgICAvKiBOb3cgbGlrZSBhIHRhYmxlIGhlYWRlciAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiBUb3AvbGVmdCB2YWx1ZXMgbWltaWMgcGFkZGluZyAqL1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDZweDtcbiAgICB3aWR0aDogNDUlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuXG4gIC8qXG4gIExhYmVsIHRoZSBkYXRhXG4gICovXG4gIHRkOm50aC1vZi10eXBlKDEpIHtcbiAgICBiYWNrZ3JvdW5kOiAjMmFkMGE4O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XG4gIH1cblxuICB0ZDpudGgtb2YtdHlwZSgxKTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiQ8OzZGlnbzpcIjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgdGQ6bnRoLW9mLXR5cGUoMik6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIk5vbWJyZTpcIjtcbiAgICBjb2xvcjogIzJhZDBhODtcbiAgICAtLWNvbG9yOiAjMmFkMGE4O1xuICB9XG5cbiAgdGQ6bnRoLW9mLXR5cGUoMyk6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlRpcG86XCI7XG4gICAgY29sb3I6ICMyYWQwYTg7XG4gICAgLS1jb2xvcjogIzJhZDBhODtcbiAgfVxuXG4gIHRkOm50aC1vZi10eXBlKDQpOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJBZm9ybzpcIjtcbiAgICBjb2xvcjogIzJhZDBhODtcbiAgICAtLWNvbG9yOiAjMmFkMGE4O1xuICB9XG5cbiAgdGQ6bnRoLW9mLXR5cGUoNSk6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIkFmb3JvIFN1cGVyYWRvOlwiO1xuICAgIGNvbG9yOiAjMmFkMGE4O1xuICAgIC0tY29sb3I6ICMyYWQwYTg7XG4gIH1cblxuICB0ZDpudGgtb2YtdHlwZSg2KTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiVmlzdWFsaXphcjpcIjtcbiAgICBjb2xvcjogIzJhZDBhODtcbiAgICAtLWNvbG9yOiAjMmFkMGE4O1xuICB9XG5cbiAgdGQ6bnRoLW9mLXR5cGUoNyk6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIkVkaXRhcjpcIjtcbiAgICBjb2xvcjogIzJhZDBhODtcbiAgICAtLWNvbG9yOiAjMmFkMGE4O1xuICB9XG5cbiAgdGQ6bnRoLW9mLXR5cGUoOCk6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIkVsaW1pbmFyOlwiO1xuICAgIGNvbG9yOiAjMmFkMGE4O1xuICAgIC0tY29sb3I6ICMyYWQwYTg7XG4gIH1cbn1cbi8qIFNtYXJ0cGhvbmVzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgwcHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDMyMHB4O1xuICB9XG59XG4vKiBpUGFkcyAocG9ydHJhaXQgYW5kIGxhbmRzY2FwZSkgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkge1xuICBib2R5IHtcbiAgICB3aWR0aDogNDk1cHg7XG4gIH1cbn0iLCIkY0JsdWU6ICM0MzhERUQ7XHJcbiRjR3JlZW46ICMyYWQwYTg7XHJcbiRjQmxhY2s6ICMwMDA7XHJcbiRjV2hpdGU6ICNmZmY7XHJcblxyXG5cclxuQGZvbnQtZmFjZXtcclxuICAgIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcclxuICAgIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9zZWdvZS11aS1saWdodC0yLnR0ZlwiKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgfVxyXG5cclxuKntcclxuICAgIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcclxufVxyXG5cclxuQG1peGluIHNoYWRvd3Nib3JkZXJlc3tcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoMywyMjEsNDMsMC4xNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDMsMjIxLDQzLDAuMTUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoMywyMjEsNDMsMC4xNSk7XHJcbiAgICAtLWJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDMsMjIxLDQzLDAuMTUpO1xyXG59XHJcblxyXG5pb24taGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDokY0JsdWUhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiRjQmx1ZSFpbXBvcnRhbnQ7XHJcbiAgICBpb24tdG9vbGJhcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiRjQmx1ZSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiRjQmx1ZSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9uc3tcclxuICAgICAgY29sb3I6ICRjV2hpdGU7XHJcbiAgICB9XHJcbiAgICBpb24tdGl0bGV7XHJcbiAgICAgIGNvbG9yOiAkY1doaXRlO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIHBhZGRpbmc6IDAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2xncmVlbntcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCFpbXBvcnRhbnQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHghaW1wb3J0YW50O1xyXG4gICAgQGluY2x1ZGUgc2hhZG93c2JvcmRlcmVzO1xyXG4gICAgYmFja2dyb3VuZDogJGNHcmVlbjtcclxuICAgIC0tYmFja2dyb3VuZDogJGNHcmVlbjtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGNHcmVlbjtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICRjR3JlZW47XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yYWRpdXN0aGxlZnQge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxufVxyXG4ucmFkaXVzdGhyaWdodCB7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxufVxyXG5cclxudGFibGUgeyBcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IFxyXG59XHJcbi8qIFplYnJhIHN0cmlwaW5nICovXHJcbnRyOm50aC1vZi10eXBlKG9kZCkgeyBcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7IFxyXG59XHJcbnRoIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiAkY0JsdWU7IFxyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxudGQsIHRoIHsgXHJcbiAgICBwYWRkaW5nOiA4cHg7IFxyXG4gICAgYm9yZGVyOiAwOyBcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LWZhbWlseTogU2Vnb2UtVUk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcblxyXG4vKlxyXG5NYXggd2lkdGggYmVmb3JlIHRoaXMgUEFSVElDVUxBUiB0YWJsZSBnZXRzIG5hc3R5XHJcblRoaXMgcXVlcnkgd2lsbCB0YWtlIGVmZmVjdCBmb3IgYW55IHNjcmVlbiBzbWFsbGVyIHRoYW4gNzYwcHhcclxuYW5kIGFsc28gaVBhZHMgc3BlY2lmaWNhbGx5LlxyXG4qL1xyXG5AbWVkaWFcclxub25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSxcclxuKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkgIHtcclxuXHJcbiAgICAvKiBGb3JjZSB0YWJsZSB0byBub3QgYmUgbGlrZSB0YWJsZXMgYW55bW9yZSAqL1xyXG4gICAgdGFibGUsIHRoZWFkLCB0Ym9keSwgdGgsIHRkLCB0ciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLyogSGlkZSB0YWJsZSBoZWFkZXJzIChidXQgbm90IGRpc3BsYXk6IG5vbmU7LCBmb3IgYWNjZXNzaWJpbGl0eSkgKi9cclxuICAgIHRoZWFkIHRyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtOTk5OXB4O1xyXG4gICAgICAgIGxlZnQ6IC05OTk5cHg7XHJcbiAgICB9XHJcblxyXG4gICAgdHIgeyBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyB9XHJcblxyXG4gICAgdGQge1xyXG4gICAgICAgIC8qIEJlaGF2ZSAgbGlrZSBhIFwicm93XCIgKi9cclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIHRkOmJlZm9yZSB7XHJcbiAgICAgICAgLyogTm93IGxpa2UgYSB0YWJsZSBoZWFkZXIgKi9cclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLyogVG9wL2xlZnQgdmFsdWVzIG1pbWljIHBhZGRpbmcgKi9cclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBsZWZ0OiA2cHg7XHJcbiAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB9XHJcbiAgICAvKlxyXG4gICAgTGFiZWwgdGhlIGRhdGFcclxuICAgICovXHJcbiAgICB0ZDpudGgtb2YtdHlwZSgxKSB7IGJhY2tncm91bmQ6ICRjR3JlZW47IGNvbG9yOiAkY1doaXRlIWltcG9ydGFudDsgLS1jb2xvcjogI2ZmZiFpbXBvcnRhbnQ7IH1cclxuICAgIHRkOm50aC1vZi10eXBlKDEpOmJlZm9yZSB7IGNvbnRlbnQ6IFwiQ8OzZGlnbzpcIjsgY29sb3I6ICRjV2hpdGU7IC0tY29sb3I6ICNmZmZmZmY7ICB9XHJcbiAgICB0ZDpudGgtb2YtdHlwZSgyKTpiZWZvcmUgeyBjb250ZW50OiBcIk5vbWJyZTpcIjsgY29sb3I6ICRjR3JlZW47IC0tY29sb3I6ICMyYWQwYTg7IH1cclxuICAgIHRkOm50aC1vZi10eXBlKDMpOmJlZm9yZSB7IGNvbnRlbnQ6IFwiVGlwbzpcIjsgY29sb3I6ICRjR3JlZW47IC0tY29sb3I6ICMyYWQwYTg7IH1cclxuICAgIHRkOm50aC1vZi10eXBlKDQpOmJlZm9yZSB7IGNvbnRlbnQ6IFwiQWZvcm86XCI7IGNvbG9yOiAkY0dyZWVuOyAtLWNvbG9yOiAjMmFkMGE4OyB9XHJcbiAgICB0ZDpudGgtb2YtdHlwZSg1KTpiZWZvcmUgeyBjb250ZW50OiBcIkFmb3JvIFN1cGVyYWRvOlwiOyBjb2xvcjogJGNHcmVlbjsgLS1jb2xvcjogIzJhZDBhODsgfVxyXG4gICAgdGQ6bnRoLW9mLXR5cGUoNik6YmVmb3JlIHsgY29udGVudDogXCJWaXN1YWxpemFyOlwiOyBjb2xvcjogJGNHcmVlbjsgLS1jb2xvcjogIzJhZDBhODsgfVxyXG4gICAgdGQ6bnRoLW9mLXR5cGUoNyk6YmVmb3JlIHsgY29udGVudDogXCJFZGl0YXI6XCI7IGNvbG9yOiAkY0dyZWVuOyAtLWNvbG9yOiAjMmFkMGE4OyB9XHJcbiAgICB0ZDpudGgtb2YtdHlwZSg4KTpiZWZvcmUgeyBjb250ZW50OiBcIkVsaW1pbmFyOlwiOyBjb2xvcjogJGNHcmVlbjsgLS1jb2xvcjogIzJhZDBhODsgfVxyXG4gICAgXHJcbn1cclxuXHJcbi8qIFNtYXJ0cGhvbmVzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW5cclxuYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpXHJcbmFuZCAobWF4LWRldmljZS13aWR0aCA6IDQ4MHB4KSB7XHJcbiAgICBib2R5IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB3aWR0aDogMzIwcHg7IH1cclxuICAgIH1cclxuXHJcbi8qIGlQYWRzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIGJvZHkge1xyXG4gICAgICAgIHdpZHRoOiA0OTVweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/salas/salas.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/salas/salas.page.ts ***!
  \*******************************************/
/*! exports provided: SalasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalasPage", function() { return SalasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_sala_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/sala.service */ "./src/app/services/sala.service.ts");
/* harmony import */ var _modal_edit_sala_modal_edit_sala_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal-edit-sala/modal-edit-sala.page */ "./src/app/pages/modal-edit-sala/modal-edit-sala.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let SalasPage = class SalasPage {
    constructor(storage, salaService, modalCtrl, navCtrl) {
        this.storage = storage;
        this.salaService = salaService;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.titulo = 'Salas';
        this.salas = [];
    }
    ionViewWillEnter() {
        this.cargarPost();
    }
    cargarPost() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.post = yield this.storage.get('post');
            this.cargarSalas(this.post);
        });
    }
    cargarSalas(post, event) {
        this.salaService.getSalas(post).subscribe(response => {
            if (response['ok']) {
                this.salas = response['salas'];
                if (event) {
                    event.target.complete();
                }
            }
        });
    }
    recargar(event) {
        this.cargarSalas(this.post, event);
    }
    onEdit(sala) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_edit_sala_modal_edit_sala_page__WEBPACK_IMPORTED_MODULE_4__["ModalEditSalaPage"],
                componentProps: {
                    sala
                }
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            console.log('Retorno del modal', data);
            this.recargar(sala.post);
        });
    }
    onDelete(sala) {
        const codigo = sala.codigo;
        this.salaService.deleteSala(codigo).subscribe(response => {
            if (response['ok']) {
                this.salas = response['salas'];
                this.recargar(sala.post);
            }
        });
    }
    onWatch(sala) {
        this.navCtrl.navigateRoot('/vsala', { animated: true });
        this.storage.set('sala', sala._id);
    }
};
SalasPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_sala_service__WEBPACK_IMPORTED_MODULE_3__["SalaService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
SalasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-salas',
        template: __webpack_require__(/*! raw-loader!./salas.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/salas/salas.page.html"),
        styles: [__webpack_require__(/*! ./salas.page.scss */ "./src/app/pages/salas/salas.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
        _services_sala_service__WEBPACK_IMPORTED_MODULE_3__["SalaService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], SalasPage);



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
//# sourceMappingURL=pages-salas-salas-module-es2015.js.map