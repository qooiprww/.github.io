function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content color=\"light\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"align-self-stretch\">\r\n\r\n        <ion-item lines=\"none\" color=\"light\">\r\n          <img src=\"/assets/icon/shopresso.png\">\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label position=\"stacked\">\r\n          <h2>Username</h2>\r\n        </ion-label>\r\n        <ion-input color=\"dark\" autofocus=true clear-input=true placeholder=\"Username\" [(ngModel)]=\"username\">\r\n        </ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label position=\"stacked\">\r\n          <h2>Password</h2>\r\n        </ion-label>\r\n        <ion-input type=\"password\" clear-input=true color=\"dark\" placeholder=\"Password\" [(ngModel)]=\"password\">\r\n        </ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n\r\n      <ion-col>\r\n        <ion-button color=\"dark\" class=\"login\" size=\"large\" expand=\"block\" [routerLink]=\"['/signup']\">Sign Up\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"dark\" class=\"login\" size=\"large\" expand=\"block\" (click)=\"login()\">Login</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n\r\n\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n\nion-item {\n  --min-height:400px;\n}\n\nion-input {\n  --background: lightgrey ;\n}\n\nion-thumbnail {\n  --min-height:400px;\n}\n\n.User_id {\n  text-align: center;\n  font-size: xx-large;\n}\n\n.password {\n  text-align: center;\n  font-size: xx-large;\n}\n\n.login {\n  text-align: center;\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL0M6XFxVc2Vyc1xcV3VIYW9cXE9uZURyaXZlXFzmlofmoaNcXEdpdEh1YlxcU2hvcHByZXNzb1xcZnJvbnRlbmRcXHNyY1xcYXBwL2xvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJsb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7QUNDSjs7QURDRTtFQUNJLHdCQUFBO0FDRU47O0FEQUU7RUFDRSxrQkFBQTtBQ0dKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0VKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6ImxvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XHJcbiAgfVxyXG5cclxuICBpb24taXRlbXtcclxuICAgIC0tbWluLWhlaWdodDo0MDBweDtcclxuICB9XHJcbiAgaW9uLWlucHV0e1xyXG4gICAgICAtLWJhY2tncm91bmQ6IGxpZ2h0Z3JleSAgICA7XHJcbiAgfVxyXG4gIGlvbi10aHVtYm5haWx7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NDAwcHg7XHJcbiAgfVxyXG5cclxuLlVzZXJfaWQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIFxyXG59XHJcblxyXG4ucGFzc3dvcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIFxyXG59XHJcblxyXG4ubG9naW57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgXHJcbn1cclxuXHJcbiIsImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6NDAwcHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDogbGlnaHRncmV5IDtcbn1cblxuaW9uLXRodW1ibmFpbCB7XG4gIC0tbWluLWhlaWdodDo0MDBweDtcbn1cblxuLlVzZXJfaWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5cbi5wYXNzd29yZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbn1cblxuLmxvZ2luIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IGxhcmdlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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

    var LoginPage =
    /*#__PURE__*/
    function () {
      function LoginPage(userService, router) {
        _classCallCheck(this, LoginPage);

        this.userService = userService;
        this.router = router;
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          var _this = this;

          this.userService.login(this.username, this.password).subscribe(function (response) {
            if (response === 'Login Succeed') {
              _this.router.navigateByUrl('tabs/tabs/tab1');

              _this.userService.getCurrentUser().subscribe(function (res) {
                _this.userService.currentUser = res.username;
                _this.userService.currentUserEmail = res.email;
                _this.userService.currentUserHome = res.address[0].address;
                _this.userService.currentUserWork = res.address[1].address;
              });
            }
          });
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map