(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-nasistente-nasistente-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/nasistente/nasistente.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/nasistente/nasistente.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"><ion-back-button defaultHref=\"asistentes\"></ion-back-button></ion-buttons>\n    <ion-title class=\"ion-text-capitalize\">{{titulo}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n    <form (ngSubmit)=\"nuevoAsistente(fAsistente)\" #fAsistente=\"ngForm\">\n        <ion-row>\n          <ion-col>\n            <ion-list>    \n              <ion-item class=\"remove_inner_bottom\">\n                  <ion-label position=\"floating\">Código</ion-label>\n                  <ion-input type=\"text\" name=\"codigo\" [(ngModel)]=\"asistente.codigo\" required></ion-input>\n              </ion-item>\n\n              <ion-item class=\"remove_inner_bottom\">\n                <ion-label position=\"floating\">Fuente</ion-label>\n                <ion-input type=\"text\" name=\"fuente\" [(ngModel)]=\"asistente.fuente\" required class=\"ion-text-capitalize\"></ion-input>\n            </ion-item>\n\n              <!--<ion-item>\n                  <ion-label position=\"floating\">Tipo de invitado</ion-label>\n                  <ion-select value=\"notifications\" interface=\"action-sheet\" name=\"codigo\" [(ngModel)]=\"asistente.tipoinvitado\" cancelText=\"Cancelar\" required>\n                    <ion-select-option value=\"vipp\">VIP</ion-select-option>\n                    <ion-select-option value=\"pote\">Ponente</ion-select-option>\n                    <ion-select-option value=\"rear\">Regular</ion-select-option>\n                  </ion-select>\n              </ion-item>-->\n\n              <ion-item class=\"remove_inner_bottom\">\n                  <ion-label position=\"floating\">Nombre</ion-label>\n                  <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"asistente.name\" required class=\"ion-text-capitalize\"></ion-input>\n              </ion-item>\n\n              <ion-item class=\"remove_inner_bottom\">\n                  <ion-label position=\"floating\">AP. Paterno</ion-label>\n                  <ion-input type=\"text\" name=\"appaterno\" [(ngModel)]=\"asistente.appaterno\" required class=\"ion-text-capitalize\"></ion-input>\n              </ion-item>\n\n              <ion-item class=\"remove_inner_bottom\">\n                  <ion-label position=\"floating\">AP. Materno</ion-label>\n                  <ion-input type=\"text\" name=\"apmaterno\" [(ngModel)]=\"asistente.apmaterno\" required class=\"ion-text-capitalize\"></ion-input>\n              </ion-item>\n\n              <ion-item class=\"remove_inner_bottom\">\n                  <ion-label position=\"floating\">Empresa</ion-label>\n                  <ion-input type=\"text\" name=\"empresa\" [(ngModel)]=\"asistente.empresa\" required class=\"ion-text-capitalize\"></ion-input>\n              </ion-item>\n\n              <ion-item class=\"remove_inner_bottom\">\n                  <ion-label position=\"floating\">Cargo</ion-label>\n                  <ion-input type=\"text\" name=\"cargo\" [(ngModel)]=\"asistente.cargo\" required class=\"ion-text-capitalize\"></ion-input>\n              </ion-item>\n\n              <ion-item class=\"remove_inner_bottom\">\n                <ion-label position=\"floating\">Email</ion-label>\n                <ion-input type=\"email\" name=\"email\" [(ngModel)]=\"asistente.email\" required></ion-input>\n            </ion-item>\n\n            <ion-item class=\"remove_inner_bottom\">\n                <ion-label position=\"floating\">Télefono</ion-label>\n                <ion-input type=\"tel\" name=\"telefono\" [(ngModel)]=\"asistente.telefono\" required></ion-input>\n            </ion-item>\n\n            <ion-item class=\"remove_inner_bottom\">\n                <ion-label position=\"floating\">Ciudad</ion-label>\n                <ion-input type=\"text\" name=\"ciudad\" [(ngModel)]=\"asistente.ciudad\" required class=\"ion-text-capitalize\"></ion-input>\n            </ion-item>\n\n            <ion-item class=\"remove_inner_bottom\">\n                <ion-label position=\"floating\">País</ion-label>\n                <ion-input type=\"text\" name=\"pais\" [(ngModel)]=\"asistente.pais\" required class=\"ion-text-capitalize\"></ion-input>\n            </ion-item>\n\n            <ion-item class=\"remove_inner_bottom\">\n                <ion-label position=\"floating\">Lead Source</ion-label>\n                <ion-input type=\"text\" name=\"leadsource\" [(ngModel)]=\"asistente.leadsource\" required class=\"ion-text-capitalize\"></ion-input>\n            </ion-item>\n\n            <ion-item class=\"remove_inner_bottom\">\n                <ion-label position=\"floating\">Lead Source Details</ion-label>\n                <ion-input type=\"text\" name=\"leadsourced\" [(ngModel)]=\"asistente.leadsourced\" required class=\"ion-text-capitalize\"></ion-input>\n            </ion-item>\n\n            <ion-item class=\"remove_inner_bottom\">\n                <ion-label position=\"floating\">Product Interest</ion-label>\n                <ion-input type=\"text\" name=\"productinterest\" [(ngModel)]=\"asistente.productinterest\" required class=\"ion-text-capitalize\"></ion-input>\n            </ion-item>\n\n            <ion-item class=\"remove_inner_bottom\">\n                <ion-label position=\"floating\">Lead Owner</ion-label>\n                <ion-input type=\"text\" name=\"leadowner\" [(ngModel)]=\"asistente.leadowner\" required class=\"ion-text-capitalize\"></ion-input>\n            </ion-item>\n\n              <!--<ion-item>\n                  <ion-label position=\"floating\">DNI</ion-label>\n                  <ion-input type=\"number\" name=\"dni\" [(ngModel)]=\"asistente.dni\" required></ion-input>\n              </ion-item>-->\n\n              \n\n              \n\n              <!--<ion-item class=\"remove_inner_bottom\">\n                  <ion-label position=\"floating\">Comentarios</ion-label>\n                  <ion-textarea name=\"comentarios\" [(ngModel)]=\"asistente.comentarios\" class=\"ion-text-capitalize\"></ion-textarea>\n              </ion-item>-->\n\n            </ion-list>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n              <ion-button type=\"submit\"\n                          class=\"clgreen\"\n                          expand=\"block\"\n                          [disabled]=\"fAsistente.form.invalid\">\n              Guardar\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/nasistente/nasistente.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/nasistente/nasistente.module.ts ***!
  \*******************************************************/
/*! exports provided: NasistentePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NasistentePageModule", function() { return NasistentePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nasistente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nasistente.page */ "./src/app/pages/nasistente/nasistente.page.ts");







var routes = [
    {
        path: '',
        component: _nasistente_page__WEBPACK_IMPORTED_MODULE_6__["NasistentePage"]
    }
];
var NasistentePageModule = /** @class */ (function () {
    function NasistentePageModule() {
    }
    NasistentePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_nasistente_page__WEBPACK_IMPORTED_MODULE_6__["NasistentePage"]]
        })
    ], NasistentePageModule);
    return NasistentePageModule;
}());



/***/ }),

/***/ "./src/app/pages/nasistente/nasistente.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/nasistente/nasistente.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: Segoe-UI;\n  src: url(\"/assets/fonts/segoe-ui-light-2.ttf\");\n  font-weight: 400;\n  font-style: normal;\n}\n* {\n  font-family: Segoe-UI;\n}\n.clgreen {\n  text-transform: capitalize;\n  border-radius: 50px !important;\n  --border-radius: 50px!important;\n  box-shadow: 0px 2px 1px 0px rgba(3, 221, 43, 0.15);\n  --box-shadow: 0px 2px 1px 0px rgba(3,221,43,0.15);\n  background: #2ad0a8;\n  --background: $cGreen;\n}\n.clgreen:hover {\n  background: #2ad0a8;\n  --background: $cGreen;\n}\nion-header {\n  background: #438DED !important;\n  --background:$cBlue!important;\n}\nion-header ion-toolbar {\n  background: #438DED !important;\n  --background:$cBlue!important;\n}\nion-header ion-buttons {\n  color: #fff;\n}\nion-header ion-title {\n  color: #fff;\n  font-size: 18px;\n  padding: 0;\n}\nform ion-item {\n  width: 50%;\n  display: inline-block;\n}\nform ion-item ion-label {\n  font-family: Segoe-UI;\n}\nform ion-item ion-input {\n  font-family: Segoe-UI;\n}\nform ion-item ion-select-option {\n  font-family: Segoe-UI;\n}\n.action-sheet-button.sc-ion-action-sheet-md {\n  font-family: Segoe-UI !important;\n}\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n  form ion-item {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmFzaXN0ZW50ZS9DOlxceGFtcHBcXGh0ZG9jc1xccHJveWVjdG9GaW5hbENQR1xcY3BnL3NyY1xcYXBwXFxwYWdlc1xcbmFzaXN0ZW50ZVxcbmFzaXN0ZW50ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25hc2lzdGVudGUvbmFzaXN0ZW50ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxxQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0xKO0FEUUE7RUFDSSxxQkFBQTtBQ05KO0FEZ0JBO0VBQ0UsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBUFUsa0RBQUE7RUFDQSxpREFBQTtFQVFWLG1CQTVCTztFQTZCUCxxQkFBQTtBQ1ZGO0FEV0U7RUFDSSxtQkEvQkc7RUFnQ0gscUJBQUE7QUNUTjtBRGFBO0VBQ0ksOEJBQUE7RUFDQSw2QkFBQTtBQ1ZKO0FEV0k7RUFDSSw4QkFBQTtFQUNBLDZCQUFBO0FDVFI7QURXSTtFQUNFLFdBMUNHO0FDaUNUO0FEV0k7RUFDRSxXQTdDRztFQThDSCxlQUFBO0VBQ0YsVUFBQTtBQ1RKO0FEY0U7RUFDRSxVQUFBO0VBQ0EscUJBQUE7QUNYSjtBRFlJO0VBQ0UscUJBQUE7QUNWTjtBRFlJO0VBQ0UscUJBQUE7QUNWTjtBRFlJO0VBQ0UscUJBQUE7QUNWTjtBRGVBO0VBQ0UsZ0NBQUE7QUNaRjtBRGdCQTtFQUlNO0lBQ0Usc0JBQUE7RUNoQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hc2lzdGVudGUvbmFzaXN0ZW50ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY0JsdWU6ICM0MzhERUQ7XHJcbiRjR3JlZW46ICMyYWQwYTg7XHJcbiRjQmxhY2s6ICMwMDA7XHJcbiRjV2hpdGU6ICNmZmY7XHJcblxyXG5cclxuQGZvbnQtZmFjZXtcclxuICAgIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcclxuICAgIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9zZWdvZS11aS1saWdodC0yLnR0ZlwiKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgfVxyXG5cclxuKntcclxuICAgIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcclxufVxyXG5cclxuQG1peGluIHNoYWRvd3Nib3JkZXJlc3tcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoMywyMjEsNDMsMC4xNSk7XHJcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoMywyMjEsNDMsMC4xNSk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDMsMjIxLDQzLDAuMTUpO1xyXG4gICAgICAgICAgICAtLWJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDMsMjIxLDQzLDAuMTUpO1xyXG59XHJcblxyXG4uY2xncmVlbntcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4IWltcG9ydGFudDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDUwcHghaW1wb3J0YW50O1xyXG4gIEBpbmNsdWRlIHNoYWRvd3Nib3JkZXJlcztcclxuICBiYWNrZ3JvdW5kOiAkY0dyZWVuO1xyXG4gIC0tYmFja2dyb3VuZDogJGNHcmVlbjtcclxuICAmOmhvdmVye1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkY0dyZWVuO1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICRjR3JlZW47XHJcbiAgfVxyXG59XHJcblxyXG5pb24taGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDokY0JsdWUhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiRjQmx1ZSFpbXBvcnRhbnQ7XHJcbiAgICBpb24tdG9vbGJhcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiRjQmx1ZSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiRjQmx1ZSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9uc3tcclxuICAgICAgY29sb3I6ICRjV2hpdGU7XHJcbiAgICB9XHJcbiAgICBpb24tdGl0bGV7XHJcbiAgICAgIGNvbG9yOiAkY1doaXRlO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5mb3Jte1xyXG4gIGlvbi1pdGVte1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgZm9udC1mYW1pbHk6IFNlZ29lLVVJO1xyXG4gICAgfVxyXG4gICAgaW9uLWlucHV0e1xyXG4gICAgICBmb250LWZhbWlseTogU2Vnb2UtVUk7XHJcbiAgICB9XHJcbiAgICBpb24tc2VsZWN0LW9wdGlvbntcclxuICAgICAgZm9udC1mYW1pbHk6IFNlZ29lLVVJO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1tZHtcclxuICBmb250LWZhbWlseTogU2Vnb2UtVUkhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuQG1lZGlhXHJcbm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCksXHJcbihtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpe1xyXG4gIGZvcm17XHJcbiAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFNlZ29lLVVJO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvc2Vnb2UtdWktbGlnaHQtMi50dGZcIik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbioge1xuICBmb250LWZhbWlseTogU2Vnb2UtVUk7XG59XG5cbi5jbGdyZWVuIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4IWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDFweCAwcHggcmdiYSgzLCAyMjEsIDQzLCAwLjE1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDFweCAwcHggcmdiYSgzLCAyMjEsIDQzLCAwLjE1KTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoMywgMjIxLCA0MywgMC4xNSk7XG4gIC0tYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoMywyMjEsNDMsMC4xNSk7XG4gIGJhY2tncm91bmQ6ICMyYWQwYTg7XG4gIC0tYmFja2dyb3VuZDogJGNHcmVlbjtcbn1cbi5jbGdyZWVuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzJhZDBhODtcbiAgLS1iYWNrZ3JvdW5kOiAkY0dyZWVuO1xufVxuXG5pb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzQzOERFRCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6JGNCbHVlIWltcG9ydGFudDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjNDM4REVEICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDokY0JsdWUhaW1wb3J0YW50O1xufVxuaW9uLWhlYWRlciBpb24tYnV0dG9ucyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuaW9uLWhlYWRlciBpb24tdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG5mb3JtIGlvbi1pdGVtIHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuZm9ybSBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LWZhbWlseTogU2Vnb2UtVUk7XG59XG5mb3JtIGlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcbn1cbmZvcm0gaW9uLWl0ZW0gaW9uLXNlbGVjdC1vcHRpb24ge1xuICBmb250LWZhbWlseTogU2Vnb2UtVUk7XG59XG5cbi5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQge1xuICBmb250LWZhbWlseTogU2Vnb2UtVUkgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCksIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIHtcbiAgZm9ybSBpb24taXRlbSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/nasistente/nasistente.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/nasistente/nasistente.page.ts ***!
  \*****************************************************/
/*! exports provided: NasistentePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NasistentePage", function() { return NasistentePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_asistente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/asistente.service */ "./src/app/services/asistente.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_ui_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/ui-service.service */ "./src/app/services/ui-service.service.ts");






var NasistentePage = /** @class */ (function () {
    function NasistentePage(storage, asistenteService, navCtrl, uiService) {
        this.storage = storage;
        this.asistenteService = asistenteService;
        this.navCtrl = navCtrl;
        this.uiService = uiService;
        this.asistente = {};
        this.titulo = 'Registro del asistente';
    }
    NasistentePage.prototype.ngOnInit = function () {
        this.cargarPost();
    };
    NasistentePage.prototype.nuevoAsistente = function (fAsistente) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var fuente, name, appaterno, apmaterno, empresa, cargo, ciudad, pais, leadsource, leadsourced, productinterest, leadowner, valido;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fuente = this.asistente.fuente;
                        this.asistente.fuente = this.capitalize(fuente);
                        name = this.asistente.name;
                        this.asistente.name = this.capitalize(name);
                        appaterno = this.asistente.appaterno;
                        this.asistente.appaterno = this.capitalize(appaterno);
                        apmaterno = this.asistente.apmaterno;
                        this.asistente.apmaterno = this.capitalize(apmaterno);
                        empresa = this.asistente.empresa;
                        this.asistente.empresa = this.capitalize(empresa);
                        cargo = this.asistente.cargo;
                        this.asistente.cargo = this.capitalize(cargo);
                        ciudad = this.asistente.ciudad;
                        this.asistente.ciudad = this.capitalize(ciudad);
                        pais = this.asistente.pais;
                        this.asistente.pais = this.capitalize(pais);
                        leadsource = this.asistente.leadsource;
                        this.asistente.leadsource = this.capitalize(leadsource);
                        leadsourced = this.asistente.leadsourced;
                        this.asistente.leadsourced = this.capitalize(leadsourced);
                        productinterest = this.asistente.productinterest;
                        this.asistente.productinterest = this.capitalize(productinterest);
                        leadowner = this.asistente.leadowner;
                        this.asistente.leadowner = this.capitalize(leadowner);
                        this.asistente.post = this.post;
                        if (fAsistente.invalid) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.asistenteService.createAsistente(this.asistente)];
                    case 1:
                        valido = _a.sent();
                        if (valido) {
                            this.uiService.presentToast('Asistente creado!');
                            this.storage.set('asistente', this.asistente);
                            this.navCtrl.navigateRoot('/vasistente', { animated: true });
                        }
                        else {
                            this.uiService.alertaInformativa('Código ya existe en la BD!');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    NasistentePage.prototype.cargarPost = function () {
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
    NasistentePage.prototype.capitalize = function (value) {
        return value.replace(/(?:^|\s)\S/g, function (l) { return l.toUpperCase(); });
    };
    NasistentePage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _services_asistente_service__WEBPACK_IMPORTED_MODULE_3__["AsistenteService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _services_ui_service_service__WEBPACK_IMPORTED_MODULE_5__["UiServiceService"] }
    ]; };
    NasistentePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nasistente',
            template: __webpack_require__(/*! raw-loader!./nasistente.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/nasistente/nasistente.page.html"),
            styles: [__webpack_require__(/*! ./nasistente.page.scss */ "./src/app/pages/nasistente/nasistente.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _services_asistente_service__WEBPACK_IMPORTED_MODULE_3__["AsistenteService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _services_ui_service_service__WEBPACK_IMPORTED_MODULE_5__["UiServiceService"]])
    ], NasistentePage);
    return NasistentePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-nasistente-nasistente-module-es5.js.map