(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tab2/tab2.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tab2/tab2.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-title>\n      Nuevo Evento\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"crearPost()\"\n                  [disabled]=\"post.mensaje.length < 1 || cargandoGeo\"\n                  color=\"primary\">\n        Crear\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-list>\n    \n    <ion-item>\n      <ion-label position=\"floating\">Nombre</ion-label>\n      <ion-textarea [(ngModel)]=\"post.mensaje\"></ion-textarea>\n    </ion-item>\n    <!--<ion-list>\n      <ion-item>\n        <ion-label>Posición actual</ion-label>\n        <ion-spinner name=\"lines-small\" *ngIf=\"cargandoGeo\"></ion-spinner>\n        <ion-toggle slot=\"end\" [(ngModel)]=\"post.position\" (ionChange)=\"getGeo()\"></ion-toggle>\n      </ion-item>\n    </ion-list>-->\n  </ion-list>\n\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-button expand=\"full\"\n                  shape=\"round\"\n                  (click)=\"camara()\">\n        <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\n        Cámara\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button expand=\"full\"\n                  shape=\"round\"\n                  (click)=\"libreria()\">\n        <ion-icon slot=\"start\" name=\"images\"></ion-icon>\n        Galería\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"3\" *ngFor=\"let image of tempImages\">\n      <ion-card>\n        <img [src]=\"image\">\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

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

module.exports = "@font-face {\n  font-family: Segoe-UI;\n  src: url(\"/assets/fonts/segoe-ui-light-2.ttf\");\n  font-weight: 400;\n  font-style: normal;\n}\n* {\n  font-family: Segoe-UI;\n}\nion-header ion-toolbar {\n  background: #E5E5E5;\n  --background: $cGrey;\n}\nion-header ion-toolbar ion-title {\n  color: #2ad0a8;\n}\nion-header ion-toolbar ion-buttons ion-button {\n  color: #2ad0a8 !important;\n  --ion-color-base: $cGreen!important;\n  font-weight: 600;\n}\nion-content ion-list ion-item ion-label {\n  font-family: Segoe-UI;\n}\nion-content ion-list ion-item ion-textarea {\n  height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFiMi9DOlxceGFtcHBcXGh0ZG9jc1xccHJveWVjdG9GaW5hbENQR1xcY3BnL3NyY1xcYXBwXFxwYWdlc1xcdGFiMlxcdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDSSxxQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ05KO0FEU0E7RUFDSSxxQkFBQTtBQ1BKO0FEV0k7RUFDSSxtQkFoQkE7RUFpQkEsb0JBQUE7QUNSUjtBRFNRO0VBQ0ksY0F0Qkg7QUNlVDtBRFVZO0VBQ0kseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FDUmhCO0FEaUJZO0VBQ0kscUJBQUE7QUNkaEI7QURnQlk7RUFDSSxZQUFBO0FDZGhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjQmx1ZTogIzQzOERFRDtcbiRjR3JlZW46ICMyYWQwYTg7XG4kY0JsYWNrOiAjMDAwO1xuJGNXaGl0ZTogI2ZmZjtcbiRjR3JleTogI0U1RTVFNTtcblxuXG5AZm9udC1mYWNle1xuICAgIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcbiAgICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvc2Vnb2UtdWktbGlnaHQtMi50dGZcIik7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cblxuKntcbiAgICBmb250LWZhbWlseTogU2Vnb2UtVUk7XG59XG5cbmlvbi1oZWFkZXJ7XG4gICAgaW9uLXRvb2xiYXJ7XG4gICAgICAgIGJhY2tncm91bmQ6ICRjR3JleTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAkY0dyZXk7XG4gICAgICAgIGlvbi10aXRsZXtcbiAgICAgICAgICAgIGNvbG9yOiAkY0dyZWVuO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1idXR0b25ze1xuICAgICAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNHcmVlbiFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1pb24tY29sb3ItYmFzZTogJGNHcmVlbiFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWNvbnRlbnR7XG4gICAgaW9uLWxpc3R7XG4gICAgICAgIGlvbi1pdGVte1xuICAgICAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi10ZXh0YXJlYXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL3NlZ29lLXVpLWxpZ2h0LTIudHRmXCIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4qIHtcbiAgZm9udC1mYW1pbHk6IFNlZ29lLVVJO1xufVxuXG5pb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogI0U1RTVFNTtcbiAgLS1iYWNrZ3JvdW5kOiAkY0dyZXk7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIGNvbG9yOiAjMmFkMGE4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgY29sb3I6ICMyYWQwYTggIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZTogJGNHcmVlbiFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi10ZXh0YXJlYSB7XG4gIGhlaWdodDogMjVweDtcbn0iXX0= */"

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






let Tab2Page = class Tab2Page {
    constructor(postService, router, geolocation, camera) {
        this.postService = postService;
        this.router = router;
        this.geolocation = geolocation;
        this.camera = camera;
        this.tempImages = [];
        this.post = {
            mensaje: '',
            coords: null,
            position: false
        };
        this.cargandoGeo = false;
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
};
Tab2Page.ctorParameters = () => [
    { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] }
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
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]])
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



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map