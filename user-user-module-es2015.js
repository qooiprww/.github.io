(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen>\r\n  <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\r\n\r\n    <ion-item lines=\"full\" color=\"dark\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"https://ui-avatars.com/api/?name=+{{this.userService.currentUser}}\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h1>{{this.userService.currentUser}}\r\n        </h1>\r\n        <h3></h3>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"full\" color=\"dark\">\r\n      <ion-icon name=\"Mail\" slot=\"start\"></ion-icon>\r\n\r\n      <ion-label>\r\n        <h3>User Email</h3>\r\n        <ion-input>{{this.userService.currentUserEmail}}</ion-input>\r\n        <h3></h3>\r\n      </ion-label>\r\n\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"full\">\r\n      <ion-icon name=\"Home\" slot=\"start\"></ion-icon>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-label>\r\n            <h3>User Home Address</h3>\r\n          </ion-label>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-input [(ngModel)]=\"home\" clear-input=true disabled=\"{{!this.editHome}}\">\r\n          </ion-input>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-button expand=\"block\" color=\"dark\" fill=\"clear\" slot=\"end\" size=\"large\" class=\"ion-no-margin\"\r\n        (click)=\"this.editHome=!this.editHome\">\r\n        <ion-icon name=\"pencil\" slot=\"end\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"full\">\r\n      <ion-icon name=\"print\" slot=\"start\"></ion-icon>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-label>\r\n            <h3>User Work Address</h3>\r\n          </ion-label>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-input [(ngModel)]=\"work\" clear-input=true disabled=\"{{!this.editWork}}\"></ion-input>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-button expand=\"block\" color=\"dark\" fill=\"clear\" slot=\"end\" size=\"large\" class=\"ion-no-margin\"\r\n        (click)=\"this.editWork=!this.editWork\">\r\n        <ion-icon name=\"pencil\" slot=\"end\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" color=\"dark\" type=\"submit\" class=\"ion-no-margin\" [routerLink]=\"['/tabs/tabs/tab1']\">Cancel\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" color=\"dark\" type=\"submit\" class=\"ion-no-margin\" (click)=\"saveAddress()\">Save\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-list>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageRoutingModule", function() { return UserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.page */ "./src/app/user/user.page.ts");




const routes = [
    {
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_3__["UserPage"]
    }
];
let UserPageRoutingModule = class UserPageRoutingModule {
};
UserPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserPageRoutingModule);



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.page */ "./src/app/user/user.page.ts");







let UserPageModule = class UserPageModule {
};
UserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserPageRoutingModule"]
        ],
        declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]]
    })
], UserPageModule);



/***/ }),

/***/ "./src/app/user/user.page.scss":
/*!*************************************!*\
  !*** ./src/app/user/user.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyL3VzZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/user.page.ts":
/*!***********************************!*\
  !*** ./src/app/user/user.page.ts ***!
  \***********************************/
/*! exports provided: UserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPage", function() { return UserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let UserPage = class UserPage {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.home = this.userService.currentUserHome;
        this.work = this.userService.currentUserWork;
        this.editHome = false;
        this.editWork = false;
    }
    ngOnInit() {
    }
    saveAddress() {
        this.userService.changeHomeAddress(this.home).subscribe(res => { });
        this.userService.changeWorkAddress(this.work).subscribe(res => { });
        this.router.navigateByUrl('tabs/tabs/tab1');
    }
};
UserPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.page.scss */ "./src/app/user/user.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], UserPage);



/***/ })

}]);
//# sourceMappingURL=user-user-module-es2015.js.map