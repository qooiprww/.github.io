function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n<br>\r\n<br>\r\n\r\n\r\n    \r\n  <ion-list ng-cloak>\r\n    <ion-item-sliding *ngFor=\"let item of shoppingList\">\r\n      <ion-item>\r\n        <ion-card>\r\n          <ion-label>{{item.itemName}}</ion-label>\r\n          <ion-label>{{item.store}}</ion-label>\r\n          <ion-checkbox></ion-checkbox>\r\n        </ion-card>\r\n      </ion-item>\r\n    </ion-item-sliding>\r\n\r\n  </ion-list>\r\n\r\n<ion-card>\r\n  <ion-button (click)=\"generateMap()\">\r\n    <ion-icon name=\"logo-buffer\"></ion-icon>\r\n    </ion-button>\r\n</ion-card>\r\n\r\n\r\n \r\n  \r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/tab2/tab2.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.module.ts ***!
    \*************************************/

  /*! exports provided: Tab2PageModule */

  /***/
  function srcAppTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
      return Tab2PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/tab2/tab2.page.ts");

    var Tab2PageModule = function Tab2PageModule() {
      _classCallCheck(this, Tab2PageModule);
    };

    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]
      }])],
      declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })], Tab2PageModule);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n\n.maps {\n  text-align: center;\n}\n\n.map_button {\n  position: absolute;\n  top: 84%;\n  left: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIvQzpcXFVzZXJzXFxXdUhhb1xcT25lRHJpdmVcXOaWh+aho1xcR2l0SHViXFxTaG9wcHJlc3NvXFxmcm9udGVuZFxcc3JjXFxhcHAvdGFiMlxcdGFiMi5wYWdlLnNjc3MiLCJ0YWIyL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDQ0YiLCJmaWxlIjoidGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xyXG59XHJcblxyXG4ubWFwcyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWFwX2J1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogODQlO1xyXG4gIGxlZnQ6IDQwJTtcclxufVxyXG5cclxuIiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4ubWFwcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hcF9idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogODQlO1xuICBsZWZ0OiA0MCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab2/tab2.page.ts ***!
    \***********************************/

  /*! exports provided: Tab2Page */

  /***/
  function srcAppTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
      return Tab2Page;
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


    var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/search.service */
    "./src/app/services/search.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _tab3_tab3_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../tab3/tab3.page */
    "./src/app/tab3/tab3.page.ts");

    var Tab2Page =
    /*#__PURE__*/
    function () {
      function Tab2Page(searchService, router) {
        _classCallCheck(this, Tab2Page);

        this.searchService = searchService;
        this.router = router;
        this.shoppingList = [];
      }

      _createClass(Tab2Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.shoppingList = this.searchService.shoppingList;
        }
      }, {
        key: "generateMap",
        value: function generateMap() {
          var _this = this;

          this.shoppingList.forEach(function (element) {
            _this.searchService.getNearStore(element.store).subscribe(function (response) {
              console.log(response);

              _this.searchService.locations.push({
                location: response
              });
            });
          });
          console.log(this.searchService.locations);
          this.router.navigateByUrl('tabs/tabs/tab3');
        }
      }]);

      return Tab2Page;
    }();

    Tab2Page.ctorParameters = function () {
      return [{
        type: _services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonReorderGroup"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonReorderGroup"])], Tab2Page.prototype, "reorderGroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_tab3_tab3_page__WEBPACK_IMPORTED_MODULE_5__["Tab3Page"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _tab3_tab3_page__WEBPACK_IMPORTED_MODULE_5__["Tab3Page"])], Tab2Page.prototype, "tab3", void 0);
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab2.page.scss */
      "./src/app/tab2/tab2.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], Tab2Page);
    /***/
  }
}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map