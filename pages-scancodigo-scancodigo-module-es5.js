(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-scancodigo-scancodigo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/scancodigo/scancodigo.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/scancodigo/scancodigo.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"><ion-back-button defaultHref=\"asistentes\"></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-slides [options]=\"slideOptions\">\n    <ion-slide>\n      <ion-button expand=\"full\" fill=\"outline\" (click)=\"scan()\" size=\"large\">Scanear Código</ion-button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/scancodigo/scancodigo.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/scancodigo/scancodigo.module.ts ***!
  \*******************************************************/
/*! exports provided: ScancodigoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScancodigoPageModule", function() { return ScancodigoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _scancodigo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scancodigo.page */ "./src/app/pages/scancodigo/scancodigo.page.ts");







var routes = [
    {
        path: '',
        component: _scancodigo_page__WEBPACK_IMPORTED_MODULE_6__["ScancodigoPage"]
    }
];
var ScancodigoPageModule = /** @class */ (function () {
    function ScancodigoPageModule() {
    }
    ScancodigoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_scancodigo_page__WEBPACK_IMPORTED_MODULE_6__["ScancodigoPage"]]
        })
    ], ScancodigoPageModule);
    return ScancodigoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/scancodigo/scancodigo.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/scancodigo/scancodigo.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slides, ion-slide {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2NhbmNvZGlnby9DOlxceGFtcHBcXGh0ZG9jc1xccHJveWVjdG9GaW5hbENQR1xcY3BnL3NyY1xcYXBwXFxwYWdlc1xcc2NhbmNvZGlnb1xcc2NhbmNvZGlnby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NjYW5jb2RpZ28vc2NhbmNvZGlnby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2NhbmNvZGlnby9zY2FuY29kaWdvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMsIGlvbi1zbGlkZXtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59IiwiaW9uLXNsaWRlcywgaW9uLXNsaWRlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/scancodigo/scancodigo.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/scancodigo/scancodigo.page.ts ***!
  \*****************************************************/
/*! exports provided: ScancodigoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScancodigoPage", function() { return ScancodigoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_asistente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/asistente.service */ "./src/app/services/asistente.service.ts");
/* harmony import */ var _services_ui_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/ui-service.service */ "./src/app/services/ui-service.service.ts");






var ScancodigoPage = /** @class */ (function () {
    function ScancodigoPage(barCodeScanner, storage, asistenteService, uiService) {
        this.barCodeScanner = barCodeScanner;
        this.storage = storage;
        this.asistenteService = asistenteService;
        this.uiService = uiService;
        this.slideOptions = {
            allowSlidePrev: false,
            allowSlideNext: false,
        };
        this.asistente = {};
    }
    ScancodigoPage.prototype.ngOnInit = function () {
        this.scan();
        this.cargarPost();
    };
    ScancodigoPage.prototype.scan = function () {
        var _this = this;
        this.barCodeScanner.scan().then(function (barcodeData) {
            console.log(barcodeData);
            if (barcodeData.text !== '') {
                _this.codeQr = barcodeData.text;
                _this.verificarCode();
            }
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    ScancodigoPage.prototype.cargarPost = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get('post')];
                    case 1:
                        _a.post = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ScancodigoPage.prototype.verificarCode = function () {
        var _this = this;
        this.asistenteService.evaluateCodeQr(this.post, this.codeQr).subscribe(function (response) {
            if (response['ok']) {
                _this.asistente = response['asistente'];
                var message = _this.asistente.name
                    + ' ' + _this.asistente.appaterno
                    + ' ' + _this.asistente.apmaterno
                    + ' se encuentra registrado!';
                _this.uiService.alertaInformativa(message);
            }
            else {
                var message = response['mensaje'];
                _this.uiService.alertaInformativa(message);
            }
        });
    };
    ScancodigoPage.ctorParameters = function () { return [
        { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _services_asistente_service__WEBPACK_IMPORTED_MODULE_4__["AsistenteService"] },
        { type: _services_ui_service_service__WEBPACK_IMPORTED_MODULE_5__["UiServiceService"] }
    ]; };
    ScancodigoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scancodigo',
            template: __webpack_require__(/*! raw-loader!./scancodigo.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/scancodigo/scancodigo.page.html"),
            styles: [__webpack_require__(/*! ./scancodigo.page.scss */ "./src/app/pages/scancodigo/scancodigo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _services_asistente_service__WEBPACK_IMPORTED_MODULE_4__["AsistenteService"],
            _services_ui_service_service__WEBPACK_IMPORTED_MODULE_5__["UiServiceService"]])
    ], ScancodigoPage);
    return ScancodigoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-scancodigo-scancodigo-module-es5.js.map