(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-vsala-vsala-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/vsala/vsala.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/vsala/vsala.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"><ion-back-button defaultHref=\"salas\"></ion-back-button></ion-buttons>\n    <ion-title>\n        {{title}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button class=\"clblue\" [routerLink]=\"['/scansala']\"><ion-icon name=\"qr-scanner\"></ion-icon></ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <table>\n          <thead>\n          <tr class=\"radiustr\">\n            <th class=\"radiusthleft\">Nombre</th>\n            <th>AP. Paterno</th>\n            <th>AP. Materno</th>\n            <th>Empresa</th>\n            <th>Tipo de Invitado</th>\n            <th>Fecha de Ingreso</th>\n            <th class=\"radiusthright\">Hora de Ingreso</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let data of dataGlobal\">\n            <td>{{data.name}}</td>\n            <td>{{data.appaterno}}</td>\n            <td>{{data.apmaterno}}</td>\n            <td>{{data.empresa}}</td>\n            <td>{{data.tipoinvitado}}</td>\n            <td><ion-datetime name=\"created\" [(ngModel)]=\"data.created\" disabled=\"true\"></ion-datetime></td>\n            <td><ion-datetime name=\"created\" [(ngModel)]=\"data.created\" display-format=\"h:mm A\"  picker-format=\"h:mm A\" disabled=\"true\"></ion-datetime></td>\n          </tr>\n          </tbody>\n        </table>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n    "

/***/ }),

/***/ "./src/app/pages/vsala/vsala.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/vsala/vsala.module.ts ***!
  \*********************************************/
/*! exports provided: VsalaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VsalaPageModule", function() { return VsalaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vsala_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vsala.page */ "./src/app/pages/vsala/vsala.page.ts");







const routes = [
    {
        path: '',
        component: _vsala_page__WEBPACK_IMPORTED_MODULE_6__["VsalaPage"]
    }
];
let VsalaPageModule = class VsalaPageModule {
};
VsalaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_vsala_page__WEBPACK_IMPORTED_MODULE_6__["VsalaPage"]]
    })
], VsalaPageModule);



/***/ }),

/***/ "./src/app/pages/vsala/vsala.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/vsala/vsala.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: Segoe-UI;\n  src: url(\"/assets/fonts/segoe-ui-light-2.ttf\");\n  font-weight: 400;\n  font-style: normal;\n}\n* {\n  font-family: Segoe-UI;\n}\n.wid50 {\n  width: 325px;\n}\nion-header {\n  background: #438DED !important;\n  --background:$cBlue!important;\n}\nion-header ion-toolbar {\n  background: #438DED !important;\n  --background:$cBlue!important;\n}\nion-header ion-buttons {\n  color: #fff;\n}\nion-header ion-title {\n  color: #fff;\n  font-size: 18px;\n  padding: 0;\n}\n.clgreen {\n  text-transform: capitalize;\n  border-radius: 50px !important;\n  --border-radius: 50px!important;\n  box-shadow: 0px 2px 1px 0px rgba(3, 221, 43, 0.15);\n  --box-shadow: 0px 2px 1px 0px rgba(3,221,43,0.15);\n  background: #2ad0a8;\n  --background: $cGreen;\n}\n.clgreen:hover {\n  background: #2ad0a8;\n  --background: $cGreen;\n}\n.clblue {\n  text-transform: capitalize;\n  border-radius: 50px !important;\n  --border-radius: 50px!important;\n  box-shadow: 0px 2px 1px 0px rgba(3, 221, 43, 0.15);\n  --box-shadow: 0px 2px 1px 0px rgba(3,221,43,0.15);\n  background: #438DED;\n  --background: $cBlue;\n  box-shadow: 0px 2px 1px 0px rgba(67, 141, 237, 0.15);\n  --box-shadow: 0px 2px 1px 0px rgba($cBlue,0.15);\n}\n.clblue:hover {\n  background: #438DED;\n  --background: $cBlue;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n/* Zebra striping */\ntr:nth-of-type(odd) {\n  background: #fff;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\nth {\n  background: #438DED;\n  color: #fff !important;\n  font-weight: 400;\n}\ntd, th {\n  padding: 8px;\n  border: 0;\n  text-align: left;\n  font-family: Segoe-UI;\n  font-size: 14px;\n}\n.radiusthleft {\n  border-top-left-radius: 10px;\n}\n.radiusthright {\n  border-top-right-radius: 10px;\n}\n.titlegreen {\n  color: #2ad0a8 !important;\n  --color: #2ad0a8!important;\n}\n/*\nMax width before this PARTICULAR table gets nasty\nThis query will take effect for any screen smaller than 760px\nand also iPads specifically.\n*/\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n  /* Force table to not be like tables anymore */\n  table, thead, tbody, th, td, tr {\n    display: block;\n  }\n\n  tbody {\n    border-radius: 50px !important;\n    --border-radius: 50px!important;\n    padding-top: 25px;\n    padding-bottom: 25px;\n  }\n\n  /* Hide table headers (but not display: none;, for accessibility) */\n  thead tr {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n\n  tr {\n    border: 1px solid #ccc;\n  }\n\n  td {\n    /* Behave  like a \"row\" */\n    border: none;\n    position: relative;\n    color: #616A78;\n    --color: #616A78;\n  }\n\n  td:before {\n    /* Now like a table header */\n    position: relative;\n    /* Top/left values mimic padding */\n    top: 0px;\n    left: 6px;\n    width: 45%;\n    padding-right: 10px;\n    white-space: nowrap;\n  }\n\n  /*\n  Label the data\n  */\n  td:nth-of-type(1) {\n    background: #438DED;\n    color: #fff !important;\n    --color: #fff!important;\n  }\n\n  td:nth-of-type(1):before {\n    content: \"Nombre:\";\n    color: #fff;\n    --color: #ffffff;\n  }\n\n  td:nth-of-type(2):before {\n    content: \"AP. Paterno:\";\n    color: #2ad0a8;\n    --color: #2ad0a8;\n  }\n\n  td:nth-of-type(3):before {\n    content: \"AP. Materno:\";\n    color: #2ad0a8;\n    --color: #2ad0a8;\n  }\n\n  td:nth-of-type(4):before {\n    content: \"Empresa:\";\n    color: #2ad0a8;\n    --color: #2ad0a8;\n  }\n\n  td:nth-of-type(5):before {\n    content: \"Tipo de Invitado:\";\n    color: #2ad0a8;\n    --color: #2ad0a8;\n  }\n\n  td:nth-of-type(6):before {\n    content: \"Fecha de Ingreso:\";\n    color: #2ad0a8;\n    --color: #2ad0a8;\n  }\n\n  td:nth-of-type(7):before {\n    content: \"Hora de Ingreso:\";\n    color: #2ad0a8;\n    --color: #2ad0a8;\n  }\n}\n/* Smartphones (portrait and landscape) ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  body {\n    padding: 0;\n    margin: 0;\n    width: 320px;\n  }\n\n  ion-toggle {\n    padding-top: 0px;\n    padding-bottom: 0px;\n  }\n}\n/* iPads (portrait and landscape) ----------- */\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n  body {\n    width: 495px;\n  }\n\n  ion-toggle {\n    padding-top: 0px;\n    padding-bottom: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdnNhbGEvQzpcXHhhbXBwXFxodGRvY3NcXHByb3llY3RvRmluYWxDUEdcXGNwZy9zcmNcXGFwcFxccGFnZXNcXHZzYWxhXFx2c2FsYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ZzYWxhL3ZzYWxhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNJLHFCQUFBO0VBQ0EsOENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTEo7QURRQTtFQUNJLHFCQUFBO0FDTko7QURTQTtFQUNJLFlBQUE7QUNOSjtBRGlCQTtFQUNJLDhCQUFBO0VBQ0EsNkJBQUE7QUNkSjtBRGVJO0VBQ0ksOEJBQUE7RUFDQSw2QkFBQTtBQ2JSO0FEZUk7RUFDRSxXQWxDRztBQ3FCVDtBRGVJO0VBQ0UsV0FyQ0c7RUFzQ0gsZUFBQTtFQUNFLFVBQUE7QUNiUjtBRG1CQTtFQUNJLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQTFCQSxrREFBQTtFQUNBLGlEQUFBO0VBMkJBLG1CQXBESztFQXFETCxxQkFBQTtBQ2JKO0FEY0k7RUFDSSxtQkF2REM7RUF3REQscUJBQUE7QUNaUjtBRGdCQTtFQUNJLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQXZDQSxrREFBQTtFQUNBLGlEQUFBO0VBd0NBLG1CQWxFSTtFQW1FSixvQkFBQTtFQUdBLG9EQUFBO0VBQ0EsK0NBQUE7QUNWSjtBRFdJO0VBQ0ksbUJBekVBO0VBMEVBLG9CQUFBO0FDVFI7QURhQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQ1ZKO0FEWUEsbUJBQUE7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ1RKO0FEV0E7RUFDSSxtQkF6Rkk7RUEwRkosc0JBQUE7RUFDQSxnQkFBQTtBQ1JKO0FEV0E7RUFDSSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDUko7QURXQTtFQUNJLDRCQUFBO0FDUko7QURVQTtFQUNJLDZCQUFBO0FDUEo7QURVQTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7QUNQSjtBRFVBOzs7O0NBQUE7QUFLQTtFQUlJLDhDQUFBO0VBQ0E7SUFDSSxjQUFBO0VDVk47O0VEYUU7SUFDSSw4QkFBQTtJQUNBLCtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtFQ1ZOOztFRGFFLG1FQUFBO0VBQ0E7SUFDSSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VDVk47O0VEYUU7SUFBSyxzQkFBQTtFQ1RQOztFRFdFO0lBQ0kseUJBQUE7SUFDQSxZQUFBO0lBRUEsa0JBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7RUNUTjs7RURZRTtJQUNJLDRCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQ0FBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RUNUTjs7RURZRTs7R0FBQTtFQUdBO0lBQW9CLG1CQXZLaEI7SUF1S29DLHNCQUFBO0lBQTBCLHVCQUFBO0VDTnBFOztFRE9FO0lBQTJCLGtCQUFBO0lBQW9CLFdBcksxQztJQXFLMEQsZ0JBQUE7RUNEakU7O0VERUU7SUFBMkIsdUJBQUE7SUFBeUIsY0F4Sy9DO0lBd0srRCxnQkFBQTtFQ0l0RTs7RURIRTtJQUEyQix1QkFBQTtJQUF5QixjQXpLL0M7SUF5SytELGdCQUFBO0VDU3RFOztFRFJFO0lBQTJCLG1CQUFBO0lBQXFCLGNBMUszQztJQTBLMkQsZ0JBQUE7RUNjbEU7O0VEYkU7SUFBMkIsNEJBQUE7SUFBOEIsY0EzS3BEO0lBMktvRSxnQkFBQTtFQ21CM0U7O0VEbEJFO0lBQTJCLDRCQUFBO0lBQThCLGNBNUtwRDtJQTRLb0UsZ0JBQUE7RUN3QjNFOztFRHZCRTtJQUEyQiwyQkFBQTtJQUE2QixjQTdLbkQ7SUE2S21FLGdCQUFBO0VDNkIxRTtBQUNGO0FEM0JBLHFEQUFBO0FBQ0E7RUFHSTtJQUNJLFVBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtFQzJCTjs7RUR6Qk07SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0VDNEJWO0FBQ0Y7QUR6QkEsK0NBQUE7QUFDQTtFQUNJO0lBQ0ksWUFBQTtFQzJCTjs7RUR4QkU7SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0VDMkJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92c2FsYS92c2FsYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY0JsdWU6ICM0MzhERUQ7XHJcbiRjR3JlZW46ICMyYWQwYTg7XHJcbiRjQmxhY2s6ICMwMDA7XHJcbiRjV2hpdGU6ICNmZmY7XHJcblxyXG5cclxuQGZvbnQtZmFjZXtcclxuICAgIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcclxuICAgIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9zZWdvZS11aS1saWdodC0yLnR0ZlwiKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgfVxyXG5cclxuKntcclxuICAgIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcclxufVxyXG5cclxuLndpZDUwe1xyXG4gICAgd2lkdGg6IDMyNXB4O1xyXG59XHJcblxyXG5cclxuQG1peGluIHNoYWRvd3Nib3JkZXJlc3tcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoMywyMjEsNDMsMC4xNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDMsMjIxLDQzLDAuMTUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoMywyMjEsNDMsMC4xNSk7XHJcbiAgICAtLWJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDMsMjIxLDQzLDAuMTUpO1xyXG59XHJcblxyXG5pb24taGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDokY0JsdWUhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiRjQmx1ZSFpbXBvcnRhbnQ7XHJcbiAgICBpb24tdG9vbGJhcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiRjQmx1ZSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiRjQmx1ZSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9uc3tcclxuICAgICAgY29sb3I6ICRjV2hpdGU7XHJcbiAgICB9XHJcbiAgICBpb24tdGl0bGV7XHJcbiAgICAgIGNvbG9yOiAkY1doaXRlO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4uY2xncmVlbntcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCFpbXBvcnRhbnQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHghaW1wb3J0YW50O1xyXG4gICAgQGluY2x1ZGUgc2hhZG93c2JvcmRlcmVzO1xyXG4gICAgYmFja2dyb3VuZDogJGNHcmVlbjtcclxuICAgIC0tYmFja2dyb3VuZDogJGNHcmVlbjtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGNHcmVlbjtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICRjR3JlZW47XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jbGJsdWV7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHghaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4IWltcG9ydGFudDtcclxuICAgIEBpbmNsdWRlIHNoYWRvd3Nib3JkZXJlcztcclxuICAgIGJhY2tncm91bmQ6ICRjQmx1ZTtcclxuICAgIC0tYmFja2dyb3VuZDogJGNCbHVlO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDFweCAwcHggcmdiYSgkY0JsdWUsMC4xNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKCRjQmx1ZSwwLjE1KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKCRjQmx1ZSwwLjE1KTtcclxuICAgIC0tYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoJGNCbHVlLDAuMTUpO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkY0JsdWU7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAkY0JsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbnRhYmxlIHsgXHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcbi8qIFplYnJhIHN0cmlwaW5nICovXHJcbnRyOm50aC1vZi10eXBlKG9kZCkgeyBcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7IFxyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG59XHJcbnRoIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiAkY0JsdWU7IFxyXG4gICAgY29sb3I6ICRjV2hpdGUhaW1wb3J0YW50OyBcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBcclxufVxyXG50ZCwgdGggeyBcclxuICAgIHBhZGRpbmc6IDhweDsgXHJcbiAgICBib3JkZXI6IDA7IFxyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnJhZGl1c3RobGVmdCB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5yYWRpdXN0aHJpZ2h0IHtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4udGl0bGVncmVlbntcclxuICAgIGNvbG9yOiAkY0dyZWVuIWltcG9ydGFudDsgXHJcbiAgICAtLWNvbG9yOiAjMmFkMGE4IWltcG9ydGFudDsgXHJcbn1cclxuXHJcbi8qXHJcbk1heCB3aWR0aCBiZWZvcmUgdGhpcyBQQVJUSUNVTEFSIHRhYmxlIGdldHMgbmFzdHlcclxuVGhpcyBxdWVyeSB3aWxsIHRha2UgZWZmZWN0IGZvciBhbnkgc2NyZWVuIHNtYWxsZXIgdGhhbiA3NjBweFxyXG5hbmQgYWxzbyBpUGFkcyBzcGVjaWZpY2FsbHkuXHJcbiovXHJcbkBtZWRpYVxyXG5vbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpLFxyXG4obWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSAge1xyXG5cclxuICAgIC8qIEZvcmNlIHRhYmxlIHRvIG5vdCBiZSBsaWtlIHRhYmxlcyBhbnltb3JlICovXHJcbiAgICB0YWJsZSwgdGhlYWQsIHRib2R5LCB0aCwgdGQsIHRyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICB0Ym9keXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4IWltcG9ydGFudDtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHghaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEhpZGUgdGFibGUgaGVhZGVycyAoYnV0IG5vdCBkaXNwbGF5OiBub25lOywgZm9yIGFjY2Vzc2liaWxpdHkpICovXHJcbiAgICB0aGVhZCB0ciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTk5OTlweDtcclxuICAgICAgICBsZWZ0OiAtOTk5OXB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRyIHsgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgfVxyXG5cclxuICAgIHRkIHtcclxuICAgICAgICAvKiBCZWhhdmUgIGxpa2UgYSBcInJvd1wiICovXHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBjb2xvcjogIzYxNkE3ODtcclxuICAgICAgICAtLWNvbG9yOiAjNjE2QTc4O1xyXG4gICAgfVxyXG5cclxuICAgIHRkOmJlZm9yZSB7XHJcbiAgICAgICAgLyogTm93IGxpa2UgYSB0YWJsZSBoZWFkZXIgKi9cclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLyogVG9wL2xlZnQgdmFsdWVzIG1pbWljIHBhZGRpbmcgKi9cclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBsZWZ0OiA2cHg7XHJcbiAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgIExhYmVsIHRoZSBkYXRhXHJcbiAgICAqL1xyXG4gICAgdGQ6bnRoLW9mLXR5cGUoMSkgeyBiYWNrZ3JvdW5kOiAkY0JsdWU7IGNvbG9yOiAkY1doaXRlIWltcG9ydGFudDsgLS1jb2xvcjogI2ZmZiFpbXBvcnRhbnQ7IH1cclxuICAgIHRkOm50aC1vZi10eXBlKDEpOmJlZm9yZSB7IGNvbnRlbnQ6IFwiTm9tYnJlOlwiOyBjb2xvcjogJGNXaGl0ZTsgLS1jb2xvcjogI2ZmZmZmZjsgIH1cclxuICAgIHRkOm50aC1vZi10eXBlKDIpOmJlZm9yZSB7IGNvbnRlbnQ6IFwiQVAuIFBhdGVybm86XCI7IGNvbG9yOiAkY0dyZWVuOyAtLWNvbG9yOiAjMmFkMGE4OyB9XHJcbiAgICB0ZDpudGgtb2YtdHlwZSgzKTpiZWZvcmUgeyBjb250ZW50OiBcIkFQLiBNYXRlcm5vOlwiOyBjb2xvcjogJGNHcmVlbjsgLS1jb2xvcjogIzJhZDBhODsgfVxyXG4gICAgdGQ6bnRoLW9mLXR5cGUoNCk6YmVmb3JlIHsgY29udGVudDogXCJFbXByZXNhOlwiOyBjb2xvcjogJGNHcmVlbjsgLS1jb2xvcjogIzJhZDBhODsgfVxyXG4gICAgdGQ6bnRoLW9mLXR5cGUoNSk6YmVmb3JlIHsgY29udGVudDogXCJUaXBvIGRlIEludml0YWRvOlwiOyBjb2xvcjogJGNHcmVlbjsgLS1jb2xvcjogIzJhZDBhODsgfVxyXG4gICAgdGQ6bnRoLW9mLXR5cGUoNik6YmVmb3JlIHsgY29udGVudDogXCJGZWNoYSBkZSBJbmdyZXNvOlwiOyBjb2xvcjogJGNHcmVlbjsgLS1jb2xvcjogIzJhZDBhODsgfVxyXG4gICAgdGQ6bnRoLW9mLXR5cGUoNyk6YmVmb3JlIHsgY29udGVudDogXCJIb3JhIGRlIEluZ3Jlc286XCI7IGNvbG9yOiAkY0dyZWVuOyAtLWNvbG9yOiAjMmFkMGE4OyB9XHJcbn1cclxuXHJcbi8qIFNtYXJ0cGhvbmVzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW5cclxuYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpXHJcbmFuZCAobWF4LWRldmljZS13aWR0aCA6IDQ4MHB4KSB7XHJcbiAgICBib2R5IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB3aWR0aDogMzIwcHg7IH1cclxuXHJcbiAgICAgICAgaW9uLXRvZ2dsZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuLyogaVBhZHMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpIC0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkge1xyXG4gICAgYm9keSB7XHJcbiAgICAgICAgd2lkdGg6IDQ5NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi10b2dnbGUge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIH1cclxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogU2Vnb2UtVUk7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9zZWdvZS11aS1saWdodC0yLnR0ZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuKiB7XG4gIGZvbnQtZmFtaWx5OiBTZWdvZS1VSTtcbn1cblxuLndpZDUwIHtcbiAgd2lkdGg6IDMyNXB4O1xufVxuXG5pb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzQzOERFRCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6JGNCbHVlIWltcG9ydGFudDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjNDM4REVEICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDokY0JsdWUhaW1wb3J0YW50O1xufVxuaW9uLWhlYWRlciBpb24tYnV0dG9ucyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuaW9uLWhlYWRlciBpb24tdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY2xncmVlbiB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweCFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoMywgMjIxLCA0MywgMC4xNSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoMywgMjIxLCA0MywgMC4xNSk7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDMsIDIyMSwgNDMsIDAuMTUpO1xuICAtLWJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDMsMjIxLDQzLDAuMTUpO1xuICBiYWNrZ3JvdW5kOiAjMmFkMGE4O1xuICAtLWJhY2tncm91bmQ6ICRjR3JlZW47XG59XG4uY2xncmVlbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyYWQwYTg7XG4gIC0tYmFja2dyb3VuZDogJGNHcmVlbjtcbn1cblxuLmNsYmx1ZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweCFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoMywgMjIxLCA0MywgMC4xNSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoMywgMjIxLCA0MywgMC4xNSk7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDMsIDIyMSwgNDMsIDAuMTUpO1xuICAtLWJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDMsMjIxLDQzLDAuMTUpO1xuICBiYWNrZ3JvdW5kOiAjNDM4REVEO1xuICAtLWJhY2tncm91bmQ6ICRjQmx1ZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDFweCAwcHggcmdiYSg2NywgMTQxLCAyMzcsIDAuMTUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDY3LCAxNDEsIDIzNywgMC4xNSk7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDY3LCAxNDEsIDIzNywgMC4xNSk7XG4gIC0tYm94LXNoYWRvdzogMHB4IDJweCAxcHggMHB4IHJnYmEoJGNCbHVlLDAuMTUpO1xufVxuLmNsYmx1ZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM0MzhERUQ7XG4gIC0tYmFja2dyb3VuZDogJGNCbHVlO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4vKiBaZWJyYSBzdHJpcGluZyAqL1xudHI6bnRoLW9mLXR5cGUob2RkKSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xufVxuXG50aCB7XG4gIGJhY2tncm91bmQ6ICM0MzhERUQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbnRkLCB0aCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogU2Vnb2UtVUk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJhZGl1c3RobGVmdCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG59XG5cbi5yYWRpdXN0aHJpZ2h0IHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbi50aXRsZWdyZWVuIHtcbiAgY29sb3I6ICMyYWQwYTggIWltcG9ydGFudDtcbiAgLS1jb2xvcjogIzJhZDBhOCFpbXBvcnRhbnQ7XG59XG5cbi8qXG5NYXggd2lkdGggYmVmb3JlIHRoaXMgUEFSVElDVUxBUiB0YWJsZSBnZXRzIG5hc3R5XG5UaGlzIHF1ZXJ5IHdpbGwgdGFrZSBlZmZlY3QgZm9yIGFueSBzY3JlZW4gc21hbGxlciB0aGFuIDc2MHB4XG5hbmQgYWxzbyBpUGFkcyBzcGVjaWZpY2FsbHkuXG4qL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCksIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIHtcbiAgLyogRm9yY2UgdGFibGUgdG8gbm90IGJlIGxpa2UgdGFibGVzIGFueW1vcmUgKi9cbiAgdGFibGUsIHRoZWFkLCB0Ym9keSwgdGgsIHRkLCB0ciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICB0Ym9keSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweCFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIH1cblxuICAvKiBIaWRlIHRhYmxlIGhlYWRlcnMgKGJ1dCBub3QgZGlzcGxheTogbm9uZTssIGZvciBhY2Nlc3NpYmlsaXR5KSAqL1xuICB0aGVhZCB0ciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTk5OTlweDtcbiAgICBsZWZ0OiAtOTk5OXB4O1xuICB9XG5cbiAgdHIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIH1cblxuICB0ZCB7XG4gICAgLyogQmVoYXZlICBsaWtlIGEgXCJyb3dcIiAqL1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6ICM2MTZBNzg7XG4gICAgLS1jb2xvcjogIzYxNkE3ODtcbiAgfVxuXG4gIHRkOmJlZm9yZSB7XG4gICAgLyogTm93IGxpa2UgYSB0YWJsZSBoZWFkZXIgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLyogVG9wL2xlZnQgdmFsdWVzIG1pbWljIHBhZGRpbmcgKi9cbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiA2cHg7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cblxuICAvKlxuICBMYWJlbCB0aGUgZGF0YVxuICAqL1xuICB0ZDpudGgtb2YtdHlwZSgxKSB7XG4gICAgYmFja2dyb3VuZDogIzQzOERFRDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYhaW1wb3J0YW50O1xuICB9XG5cbiAgdGQ6bnRoLW9mLXR5cGUoMSk6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIk5vbWJyZTpcIjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgdGQ6bnRoLW9mLXR5cGUoMik6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIkFQLiBQYXRlcm5vOlwiO1xuICAgIGNvbG9yOiAjMmFkMGE4O1xuICAgIC0tY29sb3I6ICMyYWQwYTg7XG4gIH1cblxuICB0ZDpudGgtb2YtdHlwZSgzKTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiQVAuIE1hdGVybm86XCI7XG4gICAgY29sb3I6ICMyYWQwYTg7XG4gICAgLS1jb2xvcjogIzJhZDBhODtcbiAgfVxuXG4gIHRkOm50aC1vZi10eXBlKDQpOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJFbXByZXNhOlwiO1xuICAgIGNvbG9yOiAjMmFkMGE4O1xuICAgIC0tY29sb3I6ICMyYWQwYTg7XG4gIH1cblxuICB0ZDpudGgtb2YtdHlwZSg1KTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiVGlwbyBkZSBJbnZpdGFkbzpcIjtcbiAgICBjb2xvcjogIzJhZDBhODtcbiAgICAtLWNvbG9yOiAjMmFkMGE4O1xuICB9XG5cbiAgdGQ6bnRoLW9mLXR5cGUoNik6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIkZlY2hhIGRlIEluZ3Jlc286XCI7XG4gICAgY29sb3I6ICMyYWQwYTg7XG4gICAgLS1jb2xvcjogIzJhZDBhODtcbiAgfVxuXG4gIHRkOm50aC1vZi10eXBlKDcpOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJIb3JhIGRlIEluZ3Jlc286XCI7XG4gICAgY29sb3I6ICMyYWQwYTg7XG4gICAgLS1jb2xvcjogIzJhZDBhODtcbiAgfVxufVxuLyogU21hcnRwaG9uZXMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMzIwcHg7XG4gIH1cblxuICBpb24tdG9nZ2xlIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIH1cbn1cbi8qIGlQYWRzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSB7XG4gIGJvZHkge1xuICAgIHdpZHRoOiA0OTVweDtcbiAgfVxuXG4gIGlvbi10b2dnbGUge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/vsala/vsala.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/vsala/vsala.page.ts ***!
  \*******************************************/
/*! exports provided: VsalaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VsalaPage", function() { return VsalaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_sala_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sala.service */ "./src/app/services/sala.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");




let VsalaPage = class VsalaPage {
    constructor(salaService, storage) {
        this.salaService = salaService;
        this.storage = storage;
        this.title = 'Visualizar Sala';
        this.asistentes = [];
        this.dataGlobal = [];
    }
    ionViewWillEnter() {
        this.cargarPost();
        this.cargarSala();
    }
    cargarPost() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.post = yield this.storage.get('post');
        });
    }
    cargarSala() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.sala = yield this.storage.get('sala');
            this.getDataSalaAsistente();
        });
    }
    getDataSalaAsistente() {
        this.salaService.getSalaAsistentes(this.post, this.sala).subscribe(response => {
            this.asistentes = response['asistentes'];
            console.log(this.asistentes);
            const tempData = [];
            for (const item of this.asistentes) {
                const data = {
                    name: item.asistente.name,
                    appaterno: item.asistente.appaterno,
                    apmaterno: item.asistente.apmaterno,
                    empresa: item.asistente.empresa,
                    tipoinvitado: item.asistente.tipoinvitado,
                    nombresala: item.sala.name,
                    created: item.created
                };
                tempData.push(data);
            }
            this.dataGlobal = tempData;
            console.log(this.dataGlobal);
        });
    }
};
VsalaPage.ctorParameters = () => [
    { type: _services_sala_service__WEBPACK_IMPORTED_MODULE_2__["SalaService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
VsalaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vsala',
        template: __webpack_require__(/*! raw-loader!./vsala.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/vsala/vsala.page.html"),
        styles: [__webpack_require__(/*! ./vsala.page.scss */ "./src/app/pages/vsala/vsala.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_sala_service__WEBPACK_IMPORTED_MODULE_2__["SalaService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
], VsalaPage);



/***/ })

}]);
//# sourceMappingURL=pages-vsala-vsala-module-es2015.js.map