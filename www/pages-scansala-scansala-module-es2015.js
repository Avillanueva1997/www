(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-scansala-scansala-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/scansala/scansala.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/scansala/scansala.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\"><ion-back-button defaultHref=\"asistentes\"></ion-back-button></ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-slides [options]=\"slideOptions\">\n      <ion-slide>\n        <ion-button expand=\"full\" fill=\"outline\" (click)=\"scan()\" size=\"large\">Scanear Código</ion-button>\n      </ion-slide>\n    </ion-slides>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/scansala/scansala.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/scansala/scansala.module.ts ***!
  \***************************************************/
/*! exports provided: ScansalaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScansalaPageModule", function() { return ScansalaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _scansala_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scansala.page */ "./src/app/pages/scansala/scansala.page.ts");







const routes = [
    {
        path: '',
        component: _scansala_page__WEBPACK_IMPORTED_MODULE_6__["ScansalaPage"]
    }
];
let ScansalaPageModule = class ScansalaPageModule {
};
ScansalaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_scansala_page__WEBPACK_IMPORTED_MODULE_6__["ScansalaPage"]]
    })
], ScansalaPageModule);



/***/ }),

/***/ "./src/app/pages/scansala/scansala.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/scansala/scansala.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NjYW5zYWxhL3NjYW5zYWxhLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/scansala/scansala.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/scansala/scansala.page.ts ***!
  \*************************************************/
/*! exports provided: ScansalaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScansalaPage", function() { return ScansalaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_ui_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ui-service.service */ "./src/app/services/ui-service.service.ts");
/* harmony import */ var _services_sala_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/sala.service */ "./src/app/services/sala.service.ts");
/* harmony import */ var _services_asistente_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/asistente.service */ "./src/app/services/asistente.service.ts");







let ScansalaPage = class ScansalaPage {
    constructor(barCodeScanner, storage, asistenteService, salaService, uiService) {
        this.barCodeScanner = barCodeScanner;
        this.storage = storage;
        this.asistenteService = asistenteService;
        this.salaService = salaService;
        this.uiService = uiService;
        this.slideOptions = {
            allowSlidePrev: false,
            allowSlideNext: false,
        };
        this.asistente = {};
    }
    ngOnInit() {
        this.scan();
        this.cargarPost();
        this.cargarSala();
    }
    scan() {
        this.barCodeScanner.scan().then(barcodeData => {
            console.log(barcodeData);
            if (barcodeData.text !== '') {
                this.codeQr = barcodeData.text;
                this.verificarCode();
            }
        }).catch(err => {
            console.log('Error', err);
        });
    }
    cargarPost() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.post = yield this.storage.get('post');
        });
    }
    cargarSala() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.sala = yield this.storage.get('sala');
        });
    }
    verificarCode() {
        this.asistenteService.evaluateCodeQr(this.post, this.codeQr).subscribe((response) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (response['ok']) {
                this.asistente = response['asistente'];
                const value = yield this.salaService.createSalaAsistente(this.sala, this.asistente._id, this.post);
                if (value) {
                    const message = this.asistente.name
                        + ' ' + this.asistente.appaterno
                        + ' se registro a esta sala!';
                    this.uiService.alertaInformativa(message);
                }
                else {
                    const message = 'Este asistente ya se encuentra registrado a esta sala!';
                    this.uiService.alertaInformativa(message);
                }
            }
            else {
                const message = response['mensaje'];
                this.uiService.alertaInformativa(message);
            }
        }));
    }
};
ScansalaPage.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _services_asistente_service__WEBPACK_IMPORTED_MODULE_6__["AsistenteService"] },
    { type: _services_sala_service__WEBPACK_IMPORTED_MODULE_5__["SalaService"] },
    { type: _services_ui_service_service__WEBPACK_IMPORTED_MODULE_4__["UiServiceService"] }
];
ScansalaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scansala',
        template: __webpack_require__(/*! raw-loader!./scansala.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/scansala/scansala.page.html"),
        styles: [__webpack_require__(/*! ./scansala.page.scss */ "./src/app/pages/scansala/scansala.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _services_asistente_service__WEBPACK_IMPORTED_MODULE_6__["AsistenteService"],
        _services_sala_service__WEBPACK_IMPORTED_MODULE_5__["SalaService"],
        _services_ui_service_service__WEBPACK_IMPORTED_MODULE_4__["UiServiceService"]])
], ScansalaPage);



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
//# sourceMappingURL=pages-scansala-scansala-module-es2015.js.map