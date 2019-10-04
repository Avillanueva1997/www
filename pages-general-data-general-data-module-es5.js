(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-general-data-general-data-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/general-data/general-data.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/general-data/general-data.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"><ion-back-button defaultHref=\"event\"></ion-back-button></ion-buttons>\n    <ion-title class=\"ion-text-capitalize\">{{titulo}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n    <form (ngSubmit)=\"dataEvent(fEvent)\" #fEvent=\"ngForm\">\n        <ion-row>\n          <ion-col>\n            <ion-list>    \n              <ion-item class=\"remove_inner_bottom\">\n                  <ion-label position=\"floating\">Descripción del evento</ion-label>\n                  <ion-textarea required name=\"description\" [(ngModel)]=\"event.description\" class=\"ion-text-capitalize\" ></ion-textarea>\n              </ion-item>\n\n              <ion-item class=\"remove_inner_bottom\">\n                  <ion-label position=\"floating\">Lugar</ion-label>\n                  <ion-input type=\"text\" name=\"place\" [(ngModel)]=\"event.place\" required class=\"ion-text-capitalize\"></ion-input>\n              </ion-item> \n\n              <ion-item class=\"remove_inner_bottom\">\n                  <ion-label position=\"floating\">Organizador</ion-label>\n                  <ion-input type=\"text\" name=\"organizador\" [(ngModel)]=\"event.organizador\" required class=\"ion-text-capitalize\" class=\"ion-text-capitalize\"></ion-input>\n              </ion-item> \n\n              <ion-item class=\"remove_inner_bottom\">\n                  <ion-label position=\"floating\">Cargo</ion-label>\n                  <ion-input type=\"text\" name=\"cargo\" [(ngModel)]=\"event.cargo\" required class=\"ion-text-capitalize\"></ion-input>\n              </ion-item> \n\n              <ion-item class=\"remove_inner_bottom\">\n                  <ion-label position=\"floating\">Correo electrónico de contacto</ion-label>\n                  <ion-input type=\"email\" name=\"email\" [(ngModel)]=\"event.email\" required class=\"ion-text-capitalize\"></ion-input>\n              </ion-item> \n\n              <ion-item class=\"remove_inner_bottom\">\n                  <ion-label position=\"floating\">Teléfono de contacto</ion-label>\n                  <ion-input type=\"tel\" name=\"telf\" [(ngModel)]=\"event.telf\" required></ion-input>\n              </ion-item>\n\n              <ion-item class=\"remove_inner_bottom\">\n                  <ion-label position=\"floating\">Fecha de inicio</ion-label>\n                  <ion-datetime name=\"fein\" [(ngModel)]=\"event.fein\" required placeholder=\"Selecciona fecha\" doneText=\"Guardar\" cancelText=\"Cancelar\"></ion-datetime>\n              </ion-item>\n\n              <ion-item class=\"remove_inner_bottom\">\n                  <ion-label position=\"floating\">Fecha de fin</ion-label>\n                  <ion-datetime name=\"fefn\" [(ngModel)]=\"event.fefn\" placeholder=\"Selecciona fecha\" required doneText=\"Guardar\" cancelText=\"Cancelar\"></ion-datetime>\n              </ion-item>\n\n              <ion-item class=\"remove_inner_bottom\">\n                  <ion-label position=\"floating\">Horario de inicio</ion-label>\n                  <ion-datetime name=\"hrin\" [(ngModel)]=\"event.hrin\" display-format=\"h:mm A\" picker-format=\"h:mm A\" required doneText=\"Guardar\" cancelText=\"Cancelar\"></ion-datetime>\n              </ion-item>\n\n              <ion-item class=\"remove_inner_bottom\">\n                  <ion-label position=\"floating\">Horario de fin</ion-label>\n                  <ion-datetime name=\"hrfn\" [(ngModel)]=\"event.hrfn\" display-format=\"h:mm A\" picker-format=\"h:mm A\" required doneText=\"Guardar\" cancelText=\"Cancelar\"></ion-datetime>\n              </ion-item>\n\n              <ion-item class=\"remove_inner_bottom\">\n                  <ion-label>Límite de inscritos</ion-label>\n                  <ion-toggle name=\"lios\" [(ngModel)]=\"event.lios\" color=\"cgreen\"></ion-toggle>\n              </ion-item>\n\n              <ion-item class=\"remove_inner_bottom\">\n                  <ion-label position=\"floating\">Cantidad de inscritos</ion-label>\n                  <ion-input name=\"caos\" [(ngModel)]=\"event.caos\" type=\"number\" required></ion-input>\n              </ion-item>\n\n              <ion-item class=\"remove_inner_bottom\">\n                  <ion-label position=\"floating\">Moneda del evento</ion-label>\n                  <ion-select value=\"notifications\" interface=\"action-sheet\" name=\"moto\" [(ngModel)]=\"event.moto\" cancelText=\"Cancelar\" required>\n                    <ion-select-option value=\"geal\">S/</ion-select-option>\n                    <ion-select-option value=\"soio\">$</ion-select-option>\n                  </ion-select>\n              </ion-item>\n\n              <ion-item class=\"remove_inner_bottom\">\n                <ion-label position=\"floating\">Costo del evento</ion-label>\n                <ion-input type=\"number\" name=\"coto\" [(ngModel)]=\"event.coto\" required></ion-input>\n            </ion-item>\n\n              <ion-item class=\"remove_inner_bottom\">\n                  <ion-label position=\"floating\">Categoría</ion-label>\n                  <ion-select value=\"notifications\" interface=\"action-sheet\" name=\"caia\" [(ngModel)]=\"event.caia\" required cancelText=\"Cancelar\">\n                    <ion-select-option value=\"geal\">General</ion-select-option>\n                    <ion-select-option value=\"soio\">Socio</ion-select-option>\n                    <ion-select-option value=\"esnt\">Estudiante</ion-select-option>\n                    <ion-select-option value=\"grto\">Gratuito</ion-select-option>\n                  </ion-select>\n              </ion-item>\n  \n            </ion-list>\n          </ion-col>\n        </ion-row>\n        \n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n            <ion-button type=\"submit\"\n                        color=\"cgreen\"\n                        shape=\"round\"\n                        expand=\"block\" [disabled]=\"fEvent.form.invalid\">\n            Guardar\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      \n    </form>\n</ion-content>\n  \n"

/***/ }),

/***/ "./src/app/pages/general-data/general-data.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/general-data/general-data.module.ts ***!
  \***********************************************************/
/*! exports provided: GeneralDataPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralDataPageModule", function() { return GeneralDataPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _general_data_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./general-data.page */ "./src/app/pages/general-data/general-data.page.ts");







var routes = [
    {
        path: '',
        component: _general_data_page__WEBPACK_IMPORTED_MODULE_6__["GeneralDataPage"]
    }
];
var GeneralDataPageModule = /** @class */ (function () {
    function GeneralDataPageModule() {
    }
    GeneralDataPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_general_data_page__WEBPACK_IMPORTED_MODULE_6__["GeneralDataPage"]]
        })
    ], GeneralDataPageModule);
    return GeneralDataPageModule;
}());



/***/ }),

/***/ "./src/app/pages/general-data/general-data.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/general-data/general-data.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: Segoe-UI;\n  src: url(\"/assets/fonts/segoe-ui-light-2.ttf\");\n  font-weight: 400;\n  font-style: normal;\n}\n* {\n  font-family: Segoe-UI !important;\n}\nion-button {\n  text-transform: capitalize;\n  border-radius: 50px !important;\n  --border-radius: 50px!important;\n  box-shadow: 0px 2px 1px 0px rgba(3, 221, 43, 0.15);\n  --box-shadow: 0px 2px 1px 0px rgba(3,221,43,0.15);\n  background: #2ad0a8;\n  --background: $cGreen;\n  display: block;\n  width: 100%;\n}\nion-button:hover {\n  background: #2ad0a8;\n  --background: $cGreen;\n}\nion-header {\n  background: #438DED !important;\n  --background:$cBlue!important;\n}\nion-header ion-toolbar {\n  background: #438DED !important;\n  --background:$cBlue!important;\n}\nion-header ion-buttons {\n  color: #fff;\n}\nion-header ion-title {\n  color: #fff;\n  font-size: 18px;\n  padding: 0;\n}\nion-content form ion-list {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n}\nion-content form ion-list ion-item {\n  width: 50%;\n}\nion-content form ion-list ion-item ion-label {\n  font-family: Segoe-UI !important;\n}\n.remove_inner_bottom {\n  --inner-border-width: 0;\n  --border-width: 0;\n}\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n  ion-content form ion-list ion-item {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2VuZXJhbC1kYXRhL0M6XFx4YW1wcFxcaHRkb2NzXFxwcm95ZWN0b0ZpbmFsQ1BHXFxjcGcvc3JjXFxhcHBcXHBhZ2VzXFxnZW5lcmFsLWRhdGFcXGdlbmVyYWwtZGF0YS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2dlbmVyYWwtZGF0YS9nZW5lcmFsLWRhdGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0kscUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRFFBO0VBQ0ksZ0NBQUE7QUNOSjtBRGdCQTtFQUNFLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQVBBLGtEQUFBO0VBQ0EsaURBQUE7RUFRQSxtQkE1Qk87RUE2QlAscUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ1ZGO0FEV0U7RUFDSSxtQkFqQ0c7RUFrQ0gscUJBQUE7QUNUTjtBRGFBO0VBQ0ksOEJBQUE7RUFDQSw2QkFBQTtBQ1ZKO0FEV0U7RUFDRSw4QkFBQTtFQUNBLDZCQUFBO0FDVEo7QURXRTtFQUNFLFdBNUNLO0FDbUNUO0FEV0U7RUFDRSxXQS9DSztFQWdETCxlQUFBO0VBQ0EsVUFBQTtBQ1RKO0FEZU07RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0FDWlI7QURhUTtFQUNFLFVBQUE7QUNYVjtBRFlZO0VBQ0ksZ0NBQUE7QUNWaEI7QUR3QkE7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0FDckJGO0FEd0JBO0VBTVU7SUFDRSxzQkFBQTtFQzFCVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2VuZXJhbC1kYXRhL2dlbmVyYWwtZGF0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY0JsdWU6ICM0MzhERUQ7XHJcbiRjR3JlZW46ICMyYWQwYTg7XHJcbiRjQmxhY2s6ICMwMDA7XHJcbiRjV2hpdGU6ICNmZmY7XHJcblxyXG5cclxuQGZvbnQtZmFjZXtcclxuICAgIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcclxuICAgIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9zZWdvZS11aS1saWdodC0yLnR0ZlwiKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgfVxyXG5cclxuKntcclxuICAgIGZvbnQtZmFtaWx5OiBTZWdvZS1VSSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtaXhpbiBzaGFkb3dzYm9yZGVyZXN7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDFweCAwcHggcmdiYSgzLDIyMSw0MywwLjE1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDMsMjIxLDQzLDAuMTUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDMsMjIxLDQzLDAuMTUpO1xyXG4gIC0tYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoMywyMjEsNDMsMC4xNSk7XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweCFpbXBvcnRhbnQ7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4IWltcG9ydGFudDtcclxuICBAaW5jbHVkZSBzaGFkb3dzYm9yZGVyZXM7XHJcbiAgYmFja2dyb3VuZDogJGNHcmVlbjtcclxuICAtLWJhY2tncm91bmQ6ICRjR3JlZW47XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgJjpob3ZlcntcclxuICAgICAgYmFja2dyb3VuZDogJGNHcmVlbjtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAkY0dyZWVuO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQ6JGNCbHVlIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDokY0JsdWUhaW1wb3J0YW50O1xyXG4gIGlvbi10b29sYmFye1xyXG4gICAgYmFja2dyb3VuZDokY0JsdWUhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiRjQmx1ZSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlvbi1idXR0b25ze1xyXG4gICAgY29sb3I6ICRjV2hpdGU7XHJcbiAgfVxyXG4gIGlvbi10aXRsZXtcclxuICAgIGNvbG9yOiAkY1doaXRlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgZm9ybXtcclxuICAgICAgaW9uLWxpc3R7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTZWdvZS1VSSFpbXBvcnRhbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBpb24taXRlbSB7XHJcbi8vICAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6ICRjV2hpdGU7XHJcbi8vICAgLS1oaWdobGlnaHQtY29sb3ItaW52YWxpZDogJGNXaGl0ZTtcclxuLy8gICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4vLyB9XHJcblxyXG4ucmVtb3ZlX2lubmVyX2JvdHRvbXtcclxuICAtLWlubmVyLWJvcmRlci13aWR0aDogMDsgLy8gdGhpcyByZW1vdmVzIHRoZSBpbm5lciBib3JkZXIgd2lkdGhcclxuICAtLWJvcmRlci13aWR0aDogMDtcclxufVxyXG5cclxuQG1lZGlhXHJcbm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCksXHJcbihtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpe1xyXG4gIGlvbi1jb250ZW50e1xyXG4gICAgICBmb3Jte1xyXG4gICAgICAgIGlvbi1saXN0e1xyXG4gICAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgfVxyXG4gIH1cclxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogU2Vnb2UtVUk7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9zZWdvZS11aS1saWdodC0yLnR0ZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuKiB7XG4gIGZvbnQtZmFtaWx5OiBTZWdvZS1VSSAhaW1wb3J0YW50O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4IWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDFweCAwcHggcmdiYSgzLCAyMjEsIDQzLCAwLjE1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDFweCAwcHggcmdiYSgzLCAyMjEsIDQzLCAwLjE1KTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoMywgMjIxLCA0MywgMC4xNSk7XG4gIC0tYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoMywyMjEsNDMsMC4xNSk7XG4gIGJhY2tncm91bmQ6ICMyYWQwYTg7XG4gIC0tYmFja2dyb3VuZDogJGNHcmVlbjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyYWQwYTg7XG4gIC0tYmFja2dyb3VuZDogJGNHcmVlbjtcbn1cblxuaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICM0MzhERUQgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiRjQmx1ZSFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogIzQzOERFRCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6JGNCbHVlIWltcG9ydGFudDtcbn1cbmlvbi1oZWFkZXIgaW9uLWJ1dHRvbnMge1xuICBjb2xvcjogI2ZmZjtcbn1cbmlvbi1oZWFkZXIgaW9uLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMDtcbn1cblxuaW9uLWNvbnRlbnQgZm9ybSBpb24tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbmlvbi1jb250ZW50IGZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICB3aWR0aDogNTAlO1xufVxuaW9uLWNvbnRlbnQgZm9ybSBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LWZhbWlseTogU2Vnb2UtVUkgIWltcG9ydGFudDtcbn1cblxuLnJlbW92ZV9pbm5lcl9ib3R0b20ge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpLCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSB7XG4gIGlvbi1jb250ZW50IGZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/general-data/general-data.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/general-data/general-data.page.ts ***!
  \*********************************************************/
/*! exports provided: GeneralDataPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralDataPage", function() { return GeneralDataPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ui_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ui-service.service */ "./src/app/services/ui-service.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






var GeneralDataPage = /** @class */ (function () {
    function GeneralDataPage(eventService, navCtrl, uiService, storage) {
        this.eventService = eventService;
        this.navCtrl = navCtrl;
        this.uiService = uiService;
        this.storage = storage;
        this.titulo = 'Datos Generales';
        this.event = {};
    }
    GeneralDataPage.prototype.ngOnInit = function () {
        this.cargarPost();
    };
    GeneralDataPage.prototype.dataEvent = function (fEvent) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var valido;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.event.post = this.post;
                        if (fEvent.invalid) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.eventService.createEvent(this.event)];
                    case 1:
                        valido = _a.sent();
                        if (valido) {
                            this.uiService.presentToast('Datos guardados!');
                            this.navCtrl.navigateRoot('/event', { animated: true });
                        }
                        else {
                            this.uiService.alertaInformativa('Este evento ya tiene información guardada!');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GeneralDataPage.prototype.cargarPost = function () {
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
    GeneralDataPage.ctorParameters = function () { return [
        { type: _services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: src_app_services_ui_service_service__WEBPACK_IMPORTED_MODULE_4__["UiServiceService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
    ]; };
    GeneralDataPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-general-data',
            template: __webpack_require__(/*! raw-loader!./general-data.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/general-data/general-data.page.html"),
            styles: [__webpack_require__(/*! ./general-data.page.scss */ "./src/app/pages/general-data/general-data.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            src_app_services_ui_service_service__WEBPACK_IMPORTED_MODULE_4__["UiServiceService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], GeneralDataPage);
    return GeneralDataPage;
}());



/***/ }),

/***/ "./src/app/services/event.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
var EventService = /** @class */ (function () {
    function EventService(userService, http) {
        this.userService = userService;
        this.http = http;
        this.nuevoEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    EventService.prototype.createEvent = function (event) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'x-token': this.userService.token
        });
        return new Promise(function (resolve) {
            _this.http.post(URL + "/event", event, { headers: headers }).subscribe(function (response) {
                if (response['ok']) {
                    _this.nuevoEvent.emit(response['event']);
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            });
        });
    };
    EventService.ctorParameters = function () { return [
        { type: _usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EventService);
    return EventService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-general-data-general-data-module-es5.js.map