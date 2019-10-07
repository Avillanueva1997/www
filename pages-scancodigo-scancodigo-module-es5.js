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

module.exports = "@font-face {\n  font-family: Segoe-UI;\n  src: url(\"/assets/fonts/segoe-ui-light-2.ttf\");\n  font-weight: 400;\n  font-style: normal;\n}\n* {\n  font-family: Segoe-UI;\n}\nion-header {\n  background: #438DED !important;\n  --background:$cBlue!important;\n}\nion-header ion-toolbar {\n  background: #438DED !important;\n  --background:$cBlue!important;\n}\nion-header ion-buttons {\n  color: #fff;\n}\nion-header ion-title {\n  color: #fff;\n  font-size: 18px;\n  padding: 0;\n}\nion-slides, ion-slide {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2NhbmNvZGlnby9DOlxceGFtcHBcXGh0ZG9jc1xccHJveWVjdG9GaW5hbENQR1xcY3BnL3NyY1xcYXBwXFxwYWdlc1xcc2NhbmNvZGlnb1xcc2NhbmNvZGlnby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NjYW5jb2RpZ28vc2NhbmNvZGlnby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxxQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0xKO0FEUUE7RUFDSSxxQkFBQTtBQ05KO0FEZ0JBO0VBQ0ksOEJBQUE7RUFDQSw2QkFBQTtBQ2JKO0FEY0k7RUFDSSw4QkFBQTtFQUNBLDZCQUFBO0FDWlI7QURjSTtFQUNFLFdBN0JHO0FDaUJUO0FEY0k7RUFDRSxXQWhDRztFQWlDSCxlQUFBO0VBQ0EsVUFBQTtBQ1pOO0FEZ0JBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNiSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NjYW5jb2RpZ28vc2NhbmNvZGlnby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY0JsdWU6ICM0MzhERUQ7XHJcbiRjR3JlZW46ICMyYWQwYTg7XHJcbiRjQmxhY2s6ICMwMDA7XHJcbiRjV2hpdGU6ICNmZmY7XHJcblxyXG5cclxuQGZvbnQtZmFjZXtcclxuICAgIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcclxuICAgIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9zZWdvZS11aS1saWdodC0yLnR0ZlwiKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgfVxyXG5cclxuKntcclxuICAgIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcclxufVxyXG5cclxuQG1peGluIHNoYWRvd3Nib3JkZXJlc3tcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoMywyMjEsNDMsMC4xNSk7XHJcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoMywyMjEsNDMsMC4xNSk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDMsMjIxLDQzLDAuMTUpO1xyXG4gICAgICAgICAgICAtLWJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDMsMjIxLDQzLDAuMTUpO1xyXG59XHJcblxyXG5pb24taGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDokY0JsdWUhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiRjQmx1ZSFpbXBvcnRhbnQ7XHJcbiAgICBpb24tdG9vbGJhcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiRjQmx1ZSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiRjQmx1ZSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9uc3tcclxuICAgICAgY29sb3I6ICRjV2hpdGU7XHJcbiAgICB9XHJcbiAgICBpb24tdGl0bGV7XHJcbiAgICAgIGNvbG9yOiAkY1doaXRlO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMsIGlvbi1zbGlkZXtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL3NlZ29lLXVpLWxpZ2h0LTIudHRmXCIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4qIHtcbiAgZm9udC1mYW1pbHk6IFNlZ29lLVVJO1xufVxuXG5pb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzQzOERFRCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6JGNCbHVlIWltcG9ydGFudDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjNDM4REVEICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDokY0JsdWUhaW1wb3J0YW50O1xufVxuaW9uLWhlYWRlciBpb24tYnV0dG9ucyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuaW9uLWhlYWRlciBpb24tdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG5pb24tc2xpZGVzLCBpb24tc2xpZGUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var UiServiceService = /** @class */ (function () {
    function UiServiceService(alertController, toastController) {
        this.alertController = alertController;
        this.toastController = toastController;
    }
    UiServiceService.prototype.alertaInformativa = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: message,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UiServiceService.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            position: 'top',
                            duration: 1500
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    UiServiceService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    UiServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], UiServiceService);
    return UiServiceService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-scancodigo-scancodigo-module-es5.js.map