(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tab3/tab3.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tab3/tab3.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"logout()\"\n                  color=\"danger\">\n        <ion-icon slot=\"icon-only\" name=\"exit\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row class=\"top-20 fperfil\">\n    \n    <ion-col size=\"12\" text-center>\n      <img src=\"assets/avatars/{{usuario.avatar}}\" class=\"img-avatar\">\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row class=\"top-20 dtsperfil\">\n    <ion-col size=\"12\" text-center>\n      <ion-label>\n        <h1>Actualizar perfil</h1>\n      </ion-label>\n    </ion-col>\n  </ion-row>\n\n\n  <app-avatar-selector (avatarSel)=\"usuario.avatar = $event\" [avatarAct]=\"usuario.avatar\"></app-avatar-selector>\n\n  <form (ngSubmit)=\"actualizarUser(ngActualizar)\" #ngActualizar>\n      <ion-row>\n        <ion-col>\n          \n            <ion-list>\n              \n              <ion-item>\n                <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n                <ion-input name=\"email\"\n                           type=\"email\"\n                           placeholder=\"Correo Electrónico\"\n                           [(ngModel)]=\"usuario.email\"\n                           required></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-icon name=\"person\" slot=\"start\"></ion-icon>\n                <ion-input name=\"nombre\"\n                           type=\"text\"\n                           placeholder=\"Nombre\"\n                           [(ngModel)]=\"usuario.nombre\"\n                           required></ion-input>\n              </ion-item>\n\n\n            </ion-list>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col text-center>\n          <ion-button type=\"submit\"\n                      color=\"cgreen\"\n                      shape=\"round\"\n                      expand=\"block\">\n          Actualizar\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    \n  </form>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tab3/tab3.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tab3/tab3.module.ts ***!
  \*******************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/pages/tab3/tab3.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/pages/tab3/tab3.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tab3/tab3.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: Segoe-UI;\n  src: url(\"/assets/fonts/segoe-ui-light-2.ttf\");\n  font-weight: 400;\n  font-style: normal;\n}\n* {\n  font-family: Segoe-UI;\n}\nion-header ion-toolbar {\n  background: #438DED;\n  --background: #438DED!important;\n}\nion-header ion-toolbar ion-buttons ion-button ion-icon {\n  color: #fff;\n}\nion-content {\n  position: relative;\n  z-index: 3;\n}\nion-content::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: auto;\n  height: 20%;\n  background: #438DED;\n  --background: #438DED!important;\n  z-index: 2;\n}\nion-content .fperfil {\n  position: relative;\n  z-index: 5;\n}\n.img-avatar {\n  width: 150px;\n}\n.top-20 {\n  margin-top: 20px;\n}\nform {\n  width: 50%;\n  margin: 0 auto;\n}\n@media (max-width: 768px) {\n  form {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFiMy9DOlxceGFtcHBcXGh0ZG9jc1xccHJveWVjdG9GaW5hbENQR1xcY3BnL3NyY1xcYXBwXFxwYWdlc1xcdGFiM1xcdGFiMy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhYjMvdGFiMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDSSxxQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ05KO0FEU0E7RUFDSSxxQkFBQTtBQ1BKO0FEV0k7RUFDSSxtQkFwQkE7RUFxQkEsK0JBQUE7QUNSUjtBRFdnQjtFQUNJLFdBdEJYO0FDYVQ7QURnQkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNiSjtBRGNJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkEzQ0E7RUE0Q0EsK0JBQUE7RUFDQSxVQUFBO0FDWlI7QURjSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ1pSO0FEZ0JBO0VBQ0ksWUFBQTtBQ2JKO0FEZ0JBO0VBQ0ksZ0JBQUE7QUNiSjtBRGlCQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0FDZEo7QURpQkE7RUFDSTtJQUNJLFdBQUE7RUNkTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjQmx1ZTogIzQzOERFRDtcbiRjR3JlZW46ICMyYWQwYTg7XG4kY0JsYWNrOiAjMDAwO1xuJGNXaGl0ZTogI2ZmZjtcbiRjR3JleTogI0U1RTVFNTtcblxuXG5AZm9udC1mYWNle1xuICAgIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcbiAgICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvc2Vnb2UtdWktbGlnaHQtMi50dGZcIik7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cblxuKntcbiAgICBmb250LWZhbWlseTogU2Vnb2UtVUk7XG59XG5cbmlvbi1oZWFkZXJ7XG4gICAgaW9uLXRvb2xiYXJ7XG4gICAgICAgIGJhY2tncm91bmQ6ICRjQmx1ZTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjNDM4REVEIWltcG9ydGFudDtcbiAgICAgICAgaW9uLWJ1dHRvbnN7XG4gICAgICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNXaGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1jb250ZW50e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAzO1xuICAgICY6OmJlZm9yZXtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IGF1dG87XG4gICAgICAgIGhlaWdodDogMjAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkY0JsdWU7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzQzOERFRCFpbXBvcnRhbnQ7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuICAgIC5mcGVyZmlse1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDU7XG4gICAgfVxufVxuXG4uaW1nLWF2YXRhcntcbiAgICB3aWR0aDogMTUwcHg7XG59XG5cbi50b3AtMjB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuXG5mb3Jte1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XG4gICAgZm9ybXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogU2Vnb2UtVUk7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9zZWdvZS11aS1saWdodC0yLnR0ZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuKiB7XG4gIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6ICM0MzhERUQ7XG4gIC0tYmFja2dyb3VuZDogIzQzOERFRCFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24gaW9uLWljb24ge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDM7XG59XG5pb24tY29udGVudDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IGF1dG87XG4gIGhlaWdodDogMjAlO1xuICBiYWNrZ3JvdW5kOiAjNDM4REVEO1xuICAtLWJhY2tncm91bmQ6ICM0MzhERUQhaW1wb3J0YW50O1xuICB6LWluZGV4OiAyO1xufVxuaW9uLWNvbnRlbnQgLmZwZXJmaWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDU7XG59XG5cbi5pbWctYXZhdGFyIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4udG9wLTIwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tab3/tab3.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tab3/tab3.page.ts ***!
  \*****************************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_ui_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ui-service.service */ "./src/app/services/ui-service.service.ts");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/posts.service */ "./src/app/services/posts.service.ts");





var Tab3Page = /** @class */ (function () {
    function Tab3Page(userService, uiService, postService) {
        this.userService = userService;
        this.uiService = uiService;
        this.postService = postService;
        this.usuario = {};
    }
    Tab3Page.prototype.ngOnInit = function () {
        this.usuario = this.userService.getUsuario();
        console.log(this.usuario);
    };
    Tab3Page.prototype.actualizarUser = function (fActualizar) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actualizado;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (fActualizar.invalid) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.userService.actualizarUsuario(this.usuario)];
                    case 1:
                        actualizado = _a.sent();
                        console.log(actualizado);
                        if (actualizado) {
                            this.uiService.presentToast('Registro actualizado!');
                        }
                        else {
                            this.uiService.presentToast('No se pudo actualizar!');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page.prototype.logout = function () {
        this.postService.paginaPosts = 0;
        this.userService.logout();
    };
    Tab3Page.ctorParameters = function () { return [
        { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"] },
        { type: _services_ui_service_service__WEBPACK_IMPORTED_MODULE_3__["UiServiceService"] },
        { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"] }
    ]; };
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/pages/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"], _services_ui_service_service__WEBPACK_IMPORTED_MODULE_3__["UiServiceService"], _services_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map