function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-title>Create Account</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n  <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\r\n    <ion-item>\r\n      <ion-label position=\"stacked\" color=\"{{this.username?'dark':'danger'}}\">Username<ion-text color=\"danger\">*\r\n        </ion-text>\r\n      </ion-label>\r\n      <ion-input required type=\"text\" ionChange=\"handleNameValue()\" [(ngModel)]=\"username\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\" color=\"{{this.password?'dark':'danger'}}\">Password<ion-text color=\"danger\">*\r\n        </ion-text>\r\n      </ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"password\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\" color=\"{{this.email?'dark':'danger'}}\">Email<ion-text color=\"danger\">*\r\n        </ion-text>\r\n      </ion-label>\r\n      <ion-input required type=\"email\" ionChange=\"handleEmailValue()\" [(ngModel)]=\"email\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\" color=\"{{this.home?'dark':'danger'}}\">Home Address<ion-text color=\"danger\">*\r\n        </ion-text>\r\n      </ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"home\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\" color=\"{{this.work?'dark':'danger'}}\">Work Address<ion-text color=\"danger\">*\r\n        </ion-text>\r\n      </ion-label>\r\n      <ion-input required type=\"text\" [(ngModel)]=\"work\"></ion-input>\r\n    </ion-item>\r\n\r\n\r\n  </ion-list>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button expand=\"block\" color=\"dark\" type=\"submit\" class=\"ion-no-margin\" [routerLink]=\"['/login']\">Cancel\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-button expand=\"block\" color=\"dark\"\r\n        disabled=\"{{(!this.email)||(!this.username)||(!this.password)||(!this.home)||(!this.work)}}\"\r\n        (click)=\"createUser()\" type=\"submit\" class=\"ion-no-margin\">Create account</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/signup/signup-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/signup/signup-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: SignupPageRoutingModule */

  /***/
  function srcAppSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
      return SignupPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/signup/signup.page.ts");

    var routes = [{
      path: '',
      component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }];

    var SignupPageRoutingModule = function SignupPageRoutingModule() {
      _classCallCheck(this, SignupPageRoutingModule);
    };

    SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/signup/signup.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/signup/signup.module.ts ***!
    \*****************************************/

  /*! exports provided: SignupPageModule */

  /***/
  function srcAppSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
      return SignupPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup-routing.module */
    "./src/app/signup/signup-routing.module.ts");
    /* harmony import */


    var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/signup/signup.page.ts");

    var SignupPageModule = function SignupPageModule() {
      _classCallCheck(this, SignupPageModule);
    };

    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]],
      declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })], SignupPageModule);
    /***/
  },

  /***/
  "./src/app/signup/signup.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/signup/signup.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/signup/signup.page.ts":
  /*!***************************************!*\
    !*** ./src/app/signup/signup.page.ts ***!
    \***************************************/

  /*! exports provided: SignupPage */

  /***/
  function srcAppSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
      return SignupPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SignupPage =
    /*#__PURE__*/
    function () {
      function SignupPage(userService, router) {
        _classCallCheck(this, SignupPage);

        this.userService = userService;
        this.router = router;
        this.usernamePass = false;
        this.emailPass = false;
      }

      _createClass(SignupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "createUser",
        value: function createUser() {
          var _this = this;

          this.userService.newUser(this.username, this.password, this.email, this.home, this.work).subscribe(function (res) {
            if (res === 'Username/Email has been taken.') {} else {
              _this.router.navigateByUrl('login');
            }
          });
        }
      }]);

      return SignupPage;
    }();

    SignupPage.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.page.scss */
      "./src/app/signup/signup.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], SignupPage);
    /***/
  }
}]);
//# sourceMappingURL=signup-signup-module-es5.js.map