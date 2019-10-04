(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-vasistente-vasistente-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/vasistente/vasistente.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/vasistente/vasistente.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"><ion-back-button defaultHref=\"asistentes\"></ion-back-button></ion-buttons>\n    <ion-title class=\"ion-text-capitalize\">{{titulo}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"createdCode\">\n  <!--<ion-button (click)=\"takeScreenShoot()\"><ion-icon slot=\"start\" name=\"image\"></ion-icon> Screenshot</ion-button>-->\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title class=\"ion-text-center\">{{asistente.name}} {{asistente.appaterno}} {{asistente.apmaterno}} </ion-card-title>\n        </ion-card-header>       \n      \n        <ion-card-content>\n          <ion-input type=\"text\" [(ngModel)]=\"createdCode\"></ion-input>\n        </ion-card-content>\n      </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/vasistente/vasistente.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/vasistente/vasistente.module.ts ***!
  \*******************************************************/
/*! exports provided: VasistentePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VasistentePageModule", function() { return VasistentePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vasistente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vasistente.page */ "./src/app/pages/vasistente/vasistente.page.ts");
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-qrcode2 */ "./node_modules/ngx-qrcode2/index.js");








var routes = [
    {
        path: '',
        component: _vasistente_page__WEBPACK_IMPORTED_MODULE_6__["VasistentePage"]
    }
];
var VasistentePageModule = /** @class */ (function () {
    function VasistentePageModule() {
    }
    VasistentePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                ngx_qrcode2__WEBPACK_IMPORTED_MODULE_7__["NgxQRCodeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_vasistente_page__WEBPACK_IMPORTED_MODULE_6__["VasistentePage"]]
        })
    ], VasistentePageModule);
    return VasistentePageModule;
}());



/***/ }),

/***/ "./src/app/pages/vasistente/vasistente.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/vasistente/vasistente.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Zhc2lzdGVudGUvdmFzaXN0ZW50ZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/vasistente/vasistente.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/vasistente/vasistente.page.ts ***!
  \*****************************************************/
/*! exports provided: VasistentePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VasistentePage", function() { return VasistentePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/screenshot/ngx */ "./node_modules/@ionic-native/screenshot/ngx/index.js");
/* harmony import */ var _services_ui_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ui-service.service */ "./src/app/services/ui-service.service.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");






var VasistentePage = /** @class */ (function () {
    function VasistentePage(storage, screenshot, uiService, barcodeScanner) {
        this.storage = storage;
        this.screenshot = screenshot;
        this.uiService = uiService;
        this.barcodeScanner = barcodeScanner;
        this.titulo = 'Visualizar Asistente';
        this.qrData = null;
        this.createdCode = null;
    }
    VasistentePage.prototype.ngOnInit = function () {
        this.encodedText();
    };
    VasistentePage.prototype.encodedText = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get('asistente')];
                    case 1:
                        _a.asistente = _b.sent();
                        this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.codigo).then(function (encodedData) {
                            console.log(encodedData);
                            _this.createdCode = encodedData;
                        }, function (err) {
                            console.log('Error occured : ' + err);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    VasistentePage.prototype.takeScreenShoot = function () {
        var _this = this;
        var codigo = this.codigo.toString();
        this.screenshot.save('jpg', 80, codigo).then(function (response) {
            if (response.filePath !== '') {
                _this.uiService.presentToast('Captura guardada en su galería!');
            }
        });
    };
    VasistentePage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_3__["Screenshot"] },
        { type: _services_ui_service_service__WEBPACK_IMPORTED_MODULE_4__["UiServiceService"] },
        { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"] }
    ]; };
    VasistentePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vasistente',
            template: __webpack_require__(/*! raw-loader!./vasistente.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/vasistente/vasistente.page.html"),
            styles: [__webpack_require__(/*! ./vasistente.page.scss */ "./src/app/pages/vasistente/vasistente.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_3__["Screenshot"],
            _services_ui_service_service__WEBPACK_IMPORTED_MODULE_4__["UiServiceService"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"]])
    ], VasistentePage);
    return VasistentePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-vasistente-vasistente-module-es5.js.map