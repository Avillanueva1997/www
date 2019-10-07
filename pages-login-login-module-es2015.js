(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <ion-slides class=\"mainSlide\" #slidePrincipal>\n      <ion-slide>\n        <form (ngSubmit)=\"login(fLogin)\" #fLogin=\"ngForm\">\n          <ion-grid fixed>\n  \n            <ion-row>\n              <ion-col>\n                <img class=\"logotype\" src=\"/assets/cgp-logo-10.svg\">\n              </ion-col>\n            </ion-row>\n          \n            <ion-row>\n              <ion-col>\n                \n                  <ion-list>\n                    \n                    <ion-item>\n                      <ion-icon class=\"icologin\" name=\"person\" slot=\"start\"></ion-icon>\n                      <ion-input name=\"email\"\n                                  type=\"email\"\n                                  placeholder=\"Usuario\"\n                                  [(ngModel)]=\"loginUser.email\" \n                                  required></ion-input>\n                    </ion-item>\n  \n                    <ion-item>\n                      <ion-icon class=\"icologin\" name=\"lock\" slot=\"start\"></ion-icon>\n                      <ion-input name=\"password\"\n                                  [(ngModel)]=\"loginUser.password\" \n                                  type=\"password\"\n                                  placeholder=\"Contraseña\"\n                                  required></ion-input>\n                    </ion-item>\n  \n                  </ion-list>\n              </ion-col>\n            </ion-row>\n  \n            <ion-row>\n              <ion-col>\n                <ion-button type=\"submit\"\n                            color=\"cgreen\"\n                            shape=\"round\"\n                            expand=\"block\">\n                  Ingresar\n                </ion-button>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-text (click)=\"onLostPassword()\">¿Olvidaste tu contraseña?</ion-text>\n              </ion-col>\n            </ion-row>\n  \n          </ion-grid>\n        </form>\n      </ion-slide>\n  \n      <ion-slide>\n        <ion-grid fixed>\n\n            <app-avatar-selector (avatarSel)=\"registerUser.avatar = $event\"></app-avatar-selector>\n\n              <form (ngSubmit)=\"register(fRegister)\" #fRegister=\"ngForm\">\n                  <ion-row>\n                      <ion-col>\n                          \n                          <ion-list>\n                              \n                              <ion-item>\n                              <ion-icon class=\"icologin\" name=\"mail\" slot=\"start\"></ion-icon>\n                              <ion-input name=\"email\" \n                                          type=\"email\"\n                                          placeholder=\"Correo Electrónico\"\n                                          [(ngModel)]=\"registerUser.email\"\n                                          required></ion-input>\n                              </ion-item>\n  \n                              <ion-item>\n                              <ion-icon class=\"icologin\" name=\"person\" slot=\"start\"></ion-icon>\n                              <ion-input name=\"nombre\"\n                                          type=\"text\"\n                                          placeholder=\"Nombre\"\n                                          [(ngModel)]=\"registerUser.nombre\"\n                                          required></ion-input>\n                              </ion-item>\n  \n                              <ion-item>\n                              <ion-icon class=\"icologin\" name=\"lock\" slot=\"start\"></ion-icon>\n                              <ion-input name=\"password\"\n                                          type=\"password\"\n                                          placeholder=\"Contraseña\"\n                                          [(ngModel)]=\"registerUser.password\"\n                                          required></ion-input>\n                              </ion-item>\n  \n                          </ion-list>\n                      </ion-col>\n                  </ion-row>\n                  \n                  <ion-row>\n                  <ion-col>\n                      <ion-button type=\"submit\"\n                                  color=\"cgreen\"\n                                  shape=\"round\"\n                                  expand=\"block\">\n                          Crear usuario\n                      </ion-button>\n                  </ion-col>\n              </ion-row>\n              \n              </form>\n          </ion-grid>\n    \n    \n        </ion-slide>\n  \n  \n    </ion-slides>\n  \n  \n  \n  </ion-content>\n  \n  \n  <ion-footer no-border>\n    <ion-toolbar>\n      \n      <ion-row>\n  \n        <ion-col>\n            <ion-button shape=\"round\"\n                        expand=\"full\"\n                        size=\"small\"\n                        fill=\"outline\"\n                        color=\"cgreen\"\n                        (click)=\"mostrarLogin()\">\n              Ingresar\n            </ion-button>\n        </ion-col>\n  \n        <ion-col>\n          <ion-button shape=\"round\"\n                      expand=\"full\"\n                      size=\"small\"\n                      fill=\"outline\"\n                      color=\"cgreen\"\n                      (click)=\"mostrarRegistro()\">\n            Registrarme\n          </ion-button>\n        </ion-col>\n  \n      </ion-row>\n  \n  \n  \n    </ion-toolbar>\n  </ion-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/modal-info/modal-info.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/modal-info/modal-info.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    \n    <img src=\"/assets/cgp-logo-10.svg\" width=\"150\" alt=\"\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>    \n  <form>\n    <ion-row>\n      <ion-col>\n        <ion-list>    \n          <ion-item>\n              <ion-title text-capitalize>Recuperación de la cuenta</ion-title>\n              <ion-label position=\"floating\">Correo Electrónico</ion-label>\n              <ion-input type=\"email\" required></ion-input>\n              <ion-text color=\"primary\">\n                <h6>Se le enviará un mensaje con su nueva contraseña.</h6>\n              </ion-text>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button (click)=\"salirConArgumentos()\" color=\"cgreen\" expand=\"full\" shape=\"round\">Enviar</ion-button>\n      </ion-col>\n    </ion-row>\n  </form> \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _modal_info_modal_info_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal-info/modal-info.module */ "./src/app/pages/modal-info/modal-info.module.ts");
/* harmony import */ var _modal_info_modal_info_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modal-info/modal-info.page */ "./src/app/pages/modal-info/modal-info.page.ts");










const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _modal_info_modal_info_page__WEBPACK_IMPORTED_MODULE_9__["ModalInfoPage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _modal_info_modal_info_module__WEBPACK_IMPORTED_MODULE_8__["ModalInfoPageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: Segoe-UI;\n  src: url(\"/assets/fonts/segoe-ui-light-2.ttf\");\n  font-weight: 400;\n  font-style: normal;\n}\n* {\n  font-family: Segoe-UI;\n}\n.mainSlide, .mainSlide ion-slide {\n  width: 100vw;\n  height: 100vh;\n  background: url(\"/assets/bg-cpg.jpg\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.logotype {\n  width: 150px;\n  margin-bottom: 40px;\n  margin-top: -40px;\n}\n.icologin {\n  width: 15px;\n  height: 15px;\n  margin-right: 15px;\n}\n.btn {\n  width: 100%;\n}\n.btn-verde {\n  color: #fff;\n}\nion-item {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.4);\n}\nion-input {\n  color: #2ad0a8;\n}\nion-content ion-button {\n  text-transform: capitalize;\n  border-radius: 50px !important;\n  --border-radius: 50px!important;\n  box-shadow: 0px 2px 1px 0px rgba(3, 221, 43, 0.15);\n  --box-shadow: 0px 2px 1px 0px rgba(3,221,43,0.15);\n  background: #2ad0a8;\n  --background: $cGreen;\n  display: block;\n  width: 100%;\n}\nion-content ion-button:hover {\n  background: #2ad0a8;\n  --background: $cGreen;\n}\nion-text {\n  font-family: Segoe-UI;\n  font-size: 14px;\n}\nion-footer ion-button {\n  font-family: Segoe-UI !important;\n  font-size: 14px;\n}\nform {\n  width: 50%;\n  margin: 0 auto;\n}\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n  form {\n    width: 100% !important;\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXHhhbXBwXFxodGRvY3NcXHByb3llY3RvRmluYWxDUEdcXGNwZy9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLHFCQUFBO0VBQ0EsOENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSko7QURPQTtFQUNJLHFCQUFBO0FDTEo7QURnQkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBT0Esd0JBQUE7VUFBQSx1QkFBQTtBQ25CSjtBRHNCQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDbkJKO0FEc0JBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ25CSjtBRHNCQTtFQUNJLFdBQUE7QUNuQko7QURzQkE7RUFDSSxXQXZESztBQ29DVDtBRHNCQTtFQUNJLDJDQUFBO0FDbkJKO0FEcUJBO0VBRUksY0FqRUs7QUM4Q1Q7QUR1Qkk7RUFDSSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFwREksa0RBQUE7RUFDQSxpREFBQTtFQXFESixtQkExRUM7RUEyRUQscUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ2pCUjtBRGtCUTtFQUNJLG1CQS9FSDtFQWdGRyxxQkFBQTtBQ2hCWjtBRHFCQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtBQ2xCSjtBRHNCSTtFQUNJLGdDQUFBO0VBQ0EsZUFBQTtBQ25CUjtBRHVCQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0FDcEJKO0FEdUJBO0VBR0k7SUFDSSxzQkFBQTtJQUNBLGNBQUE7RUN0Qk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjR3JlZW46ICMyYWQwYTg7XHJcbiRjQmxhY2s6ICMwMDA7XHJcbiRjV2hpdGU6ICNmZmY7XHJcblxyXG5cclxuQGZvbnQtZmFjZXtcclxuICAgIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcclxuICAgIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9zZWdvZS11aS1saWdodC0yLnR0ZlwiKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgfVxyXG5cclxuKntcclxuICAgIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcclxufVxyXG5cclxuXHJcbkBtaXhpbiBzaGFkb3dzYm9yZGVyZXN7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDMsMjIxLDQzLDAuMTUpO1xyXG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDMsMjIxLDQzLDAuMTUpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAwcHggcmdiYSgzLDIyMSw0MywwLjE1KTtcclxuICAgICAgICAgICAgLS1ib3gtc2hhZG93OiAwcHggMnB4IDFweCAwcHggcmdiYSgzLDIyMSw0MywwLjE1KTtcclxufVxyXG5cclxuLm1haW5TbGlkZSwgLm1haW5TbGlkZSBpb24tc2xpZGUge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYmctY3BnLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvL3RvcDogMDtcclxuICAgIC8vYm90dG9tOjA7XHJcbiAgICAvL2xlZnQ6IDA7XHJcbiAgICAvL3JpZ2h0OiAwO1xyXG4gICAgLy9kaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dvdHlwZSB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbn1cclxuXHJcbi5pY29sb2dpbntcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idG4tdmVyZGV7XHJcbiAgICBjb2xvcjogJGNXaGl0ZTtcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgkY0JsYWNrLCAuNCk7XHJcbn1cclxuaW9uLWlucHV0e1xyXG4gICAgLy8gdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogJGNHcmVlbjtcclxuICAgIFxyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4IWltcG9ydGFudDtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHghaW1wb3J0YW50O1xyXG4gICAgICAgIEBpbmNsdWRlIHNoYWRvd3Nib3JkZXJlcztcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkY0dyZWVuO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogJGNHcmVlbjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY0dyZWVuO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICRjR3JlZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuaW9uLWZvb3RlcntcclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFNlZ29lLVVJIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZvcm17XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYVxyXG5vbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpLFxyXG4obWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KXtcclxuICAgIGZvcm17XHJcbiAgICAgICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL3NlZ29lLXVpLWxpZ2h0LTIudHRmXCIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4qIHtcbiAgZm9udC1mYW1pbHk6IFNlZ29lLVVJO1xufVxuXG4ubWFpblNsaWRlLCAubWFpblNsaWRlIGlvbi1zbGlkZSB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9iZy1jcGcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubG9nb3R5cGUge1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIG1hcmdpbi10b3A6IC00MHB4O1xufVxuXG4uaWNvbG9naW4ge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5idG4ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJ0bi12ZXJkZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGNvbG9yOiAjMmFkMGE4O1xufVxuXG5pb24tY29udGVudCBpb24tYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4IWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDFweCAwcHggcmdiYSgzLCAyMjEsIDQzLCAwLjE1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDFweCAwcHggcmdiYSgzLCAyMjEsIDQzLCAwLjE1KTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoMywgMjIxLCA0MywgMC4xNSk7XG4gIC0tYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoMywyMjEsNDMsMC4xNSk7XG4gIGJhY2tncm91bmQ6ICMyYWQwYTg7XG4gIC0tYmFja2dyb3VuZDogJGNHcmVlbjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyYWQwYTg7XG4gIC0tYmFja2dyb3VuZDogJGNHcmVlbjtcbn1cblxuaW9uLXRleHQge1xuICBmb250LWZhbWlseTogU2Vnb2UtVUk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWZvb3RlciBpb24tYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFNlZ29lLVVJICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSwgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkge1xuICBmb3JtIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_ui_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ui-service.service */ "./src/app/services/ui-service.service.ts");
/* harmony import */ var _modal_info_modal_info_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal-info/modal-info.page */ "./src/app/pages/modal-info/modal-info.page.ts");






let LoginPage = class LoginPage {
    constructor(userService, navCtrl, uiService, modalCtrl) {
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.uiService = uiService;
        this.modalCtrl = modalCtrl;
        this.loginUser = {
            email: 'villanuevaangel68@gmail.com',
            password: '12345'
        };
        this.registerUser = {
            email: 'test@test.com',
            password: '12345',
            nombre: 'Test',
            avatar: 'av-1.png'
        };
        this.token = null;
    }
    ngAfterViewInit() {
        this.slides.lockSwipes(true);
    }
    login(fLogin) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (fLogin.invalid) {
                return;
            }
            const valido = yield this.userService.login(this.loginUser.email, this.loginUser.password);
            if (valido) {
                this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true });
            }
            else {
                this.uiService.alertaInformativa('Datos incorrectos!');
            }
        });
    }
    register(fRegister) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (fRegister.invalid) {
                return;
            }
            const valido = yield this.userService.registro(this.registerUser);
            if (valido) {
                this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true });
            }
            else {
                this.uiService.alertaInformativa('El correo electrónico ya existe');
            }
        });
    }
    mostrarRegistro() {
        this.slides.lockSwipes(false);
        this.slides.slideTo(1);
        this.slides.lockSwipes(true);
    }
    mostrarLogin() {
        this.slides.lockSwipes(false);
        this.slides.slideTo(0);
        this.slides.lockSwipes(true);
    }
    onLostPassword() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_info_modal_info_page__WEBPACK_IMPORTED_MODULE_5__["ModalInfoPage"],
                componentProps: {
                    nombre: 'Fernando',
                    pais: 'Costa Rica'
                }
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            console.log('Retorno del modal', data);
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_ui_service_service__WEBPACK_IMPORTED_MODULE_4__["UiServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], LoginPage.prototype, "slides", void 0);
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_ui_service_service__WEBPACK_IMPORTED_MODULE_4__["UiServiceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], LoginPage);



/***/ }),

/***/ "./src/app/pages/modal-info/modal-info.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/modal-info/modal-info.module.ts ***!
  \*******************************************************/
/*! exports provided: ModalInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalInfoPageModule", function() { return ModalInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_info_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-info.page */ "./src/app/pages/modal-info/modal-info.page.ts");






let ModalInfoPageModule = class ModalInfoPageModule {
};
ModalInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
        ],
        declarations: [_modal_info_page__WEBPACK_IMPORTED_MODULE_5__["ModalInfoPage"]]
    })
], ModalInfoPageModule);



/***/ }),

/***/ "./src/app/pages/modal-info/modal-info.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/modal-info/modal-info.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: Segoe-UI;\n  src: url(\"/assets/fonts/segoe-ui-light-2.ttf\");\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: Segoe-UI;\n  src: url(\"/assets/fonts/segoe-ui-bold.ttf\");\n  font-weight: 700;\n  font-style: bold;\n}\n* {\n  font-family: Segoe-UI !important;\n}\nion-header {\n  background: transparent;\n  --background: transparent;\n}\nion-header ion-toolbar {\n  background: transparent;\n  --background: transparent;\n}\nion-header img {\n  margin-top: 70px !important;\n  margin: 0 auto;\n  padding: 20px;\n  display: block;\n}\nion-content {\n  --background: transparent;\n}\nion-content form {\n  width: 60%;\n  margin: 0 auto;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: -40px;\n}\nion-content form ion-label {\n  font-family: Segoe-UI;\n}\nion-content form h6 {\n  font-family: Segoe-UI;\n  font-size: 12px;\n  color: #2ad0a8;\n}\nion-content form ion-button {\n  border-radius: 50px !important;\n  --border-radius: 50px!important;\n  box-shadow: 0px 2px 1px 0px rgba(3, 221, 43, 0.15);\n  --box-shadow: 0px 2px 1px 0px rgba(3,221,43,0.15);\n  background: #2ad0a8;\n  --background: $cGreen;\n  display: block;\n  width: 100%;\n}\n@media screen and (max-width: 768px) {\n  ion-content form {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW9kYWwtaW5mby9DOlxceGFtcHBcXGh0ZG9jc1xccHJveWVjdG9GaW5hbENQR1xcY3BnL3NyY1xcYXBwXFxwYWdlc1xcbW9kYWwtaW5mb1xcbW9kYWwtaW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21vZGFsLWluZm8vbW9kYWwtaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxxQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0xGO0FET0E7RUFDRSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0xGO0FEUUE7RUFDSSxnQ0FBQTtBQ05KO0FEZ0JBO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtBQ2JKO0FEY0U7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0FDWko7QURjRTtFQUNFLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDWko7QURnQkE7RUFDRSx5QkFBQTtBQ2JGO0FEY0k7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsaUJBQUE7QUNaTjtBRGFRO0VBQ0kscUJBQUE7QUNYWjtBRGFRO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0E1REg7QUNpRFQ7QURhUTtFQUNJLDhCQUFBO0VBQ0EsK0JBQUE7RUF2Q0Esa0RBQUE7RUFDQSxpREFBQTtFQXdDQSxtQkFsRUg7RUFtRUcscUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ1JaO0FEYUE7RUFFTTtJQUNFLFdBQUE7RUNYTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbW9kYWwtaW5mby9tb2RhbC1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjQmx1ZTogIzQzOERFRDtcclxuJGNHcmVlbjogIzJhZDBhODtcclxuJGNCbGFjazogIzAwMDtcclxuJGNXaGl0ZTogI2ZmZjtcclxuXHJcblxyXG5AZm9udC1mYWNle1xyXG4gIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcclxuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvc2Vnb2UtdWktbGlnaHQtMi50dGZcIik7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuQGZvbnQtZmFjZXtcclxuICBmb250LWZhbWlseTogU2Vnb2UtVUk7XHJcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL3NlZ29lLXVpLWJvbGQudHRmXCIpO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zdHlsZTogYm9sZDtcclxufVxyXG5cclxuKntcclxuICAgIGZvbnQtZmFtaWx5OiBTZWdvZS1VSSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtaXhpbiBzaGFkb3dzYm9yZGVyZXN7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDMsMjIxLDQzLDAuMTUpO1xyXG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDMsMjIxLDQzLDAuMTUpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAwcHggcmdiYSgzLDIyMSw0MywwLjE1KTtcclxuICAgICAgICAgICAgLS1ib3gtc2hhZG93OiAwcHggMnB4IDFweCAwcHggcmdiYSgzLDIyMSw0MywwLjE1KTtcclxufVxyXG5cclxuaW9uLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBpb24tdG9vbGJhcntcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNzBweCFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb3Jte1xyXG4gICAgICB3aWR0aDogNjAlO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogU2Vnb2UtVUk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg2e1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogU2Vnb2UtVUk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgY29sb3I6ICRjR3JlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBzaGFkb3dzYm9yZGVyZXM7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjR3JlZW47XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogJGNHcmVlbjtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgaW9uLWNvbnRlbnR7XHJcbiAgICAgIGZvcm17XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICB9XHJcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFNlZ29lLVVJO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvc2Vnb2UtdWktbGlnaHQtMi50dGZcIik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogU2Vnb2UtVUk7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9zZWdvZS11aS1ib2xkLnR0ZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zdHlsZTogYm9sZDtcbn1cbioge1xuICBmb250LWZhbWlseTogU2Vnb2UtVUkgIWltcG9ydGFudDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuaW9uLWhlYWRlciBpbWcge1xuICBtYXJnaW4tdG9wOiA3MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuaW9uLWNvbnRlbnQgZm9ybSB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtNDBweDtcbn1cbmlvbi1jb250ZW50IGZvcm0gaW9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFNlZ29lLVVJO1xufVxuaW9uLWNvbnRlbnQgZm9ybSBoNiB7XG4gIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzJhZDBhODtcbn1cbmlvbi1jb250ZW50IGZvcm0gaW9uLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4IWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDFweCAwcHggcmdiYSgzLCAyMjEsIDQzLCAwLjE1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDFweCAwcHggcmdiYSgzLCAyMjEsIDQzLCAwLjE1KTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoMywgMjIxLCA0MywgMC4xNSk7XG4gIC0tYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoMywyMjEsNDMsMC4xNSk7XG4gIGJhY2tncm91bmQ6ICMyYWQwYTg7XG4gIC0tYmFja2dyb3VuZDogJGNHcmVlbjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICBpb24tY29udGVudCBmb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/modal-info/modal-info.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/modal-info/modal-info.page.ts ***!
  \*****************************************************/
/*! exports provided: ModalInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalInfoPage", function() { return ModalInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let ModalInfoPage = class ModalInfoPage {
    constructor(modalCtrl, toastController) {
        this.modalCtrl = modalCtrl;
        this.toastController = toastController;
    }
    ngOnInit() {
    }
    salirConArgumentos() {
        this.modalCtrl.dismiss({
            nombre: 'Felipe',
            pais: 'España'
        });
        this.presentToast();
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Correo enviado con éxito!',
                duration: 2000
            });
            toast.present();
        });
    }
};
ModalInfoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ModalInfoPage.prototype, "nombre", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ModalInfoPage.prototype, "pais", void 0);
ModalInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-info',
        template: __webpack_require__(/*! raw-loader!./modal-info.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/modal-info/modal-info.page.html"),
        styles: [__webpack_require__(/*! ./modal-info.page.scss */ "./src/app/pages/modal-info/modal-info.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], ModalInfoPage);



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
//# sourceMappingURL=pages-login-login-module-es2015.js.map