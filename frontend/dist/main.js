(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./about/about.module": [
		"./src/app/about/about.module.ts",
		"about-about-module"
	],
	"./order/order.module": [
		"./src/app/order/order.module.ts",
		"order-order-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.api.ts":
/*!****************************!*\
  !*** ./src/app/app.api.ts ***!
  \****************************/
/*! exports provided: MEAT_API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEAT_API", function() { return MEAT_API; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");

var MEAT_API = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api;


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n<mt-header></mt-header>\n<!-- OBJETO FIXO EM TODAS A TELAS -->\n\n  <!-- Full Width Column -->\n  <div class=\"content-wrapper\">\n    <div class=\"container\" >\n\n        <router-outlet></router-outlet>\n        <!-- Importante -->\n        <!-- Objeto que ira definir qual \"selector\"{exemplo: <mt-restaurants></mt-restaurants>} SERÁ ABERTO! -->\n        <!-- Essa definição está lançada no arquivo routes, e será processado conforme \"click\" na tela, onde o link irá implementar um \"RouterLink\" -->\n\n\n    </div>\n  </div>\n\n  <!-- snakbar deve ser aqui -->\n  <mt-snackbar></mt-snackbar>\n\n  <footer class=\"main-footer\">\n    <div class=\"container\" >\n      <div class=\"pull-right hidden-xs\">\n        <b>Version</b> 1.0.0\n      </div>\n      <strong>Meat</strong> Angular Application\n    </div>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.content = 'Welcome do Meat App!';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.error-handler.ts":
/*!**************************************!*\
  !*** ./src/app/app.error-handler.ts ***!
  \**************************************/
/*! exports provided: ApplicationErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationErrorHandler", function() { return ApplicationErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_messages_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/messages/notification.service */ "./src/app/shared/messages/notification.service.ts");
/* harmony import */ var _security_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./security/login/login.service */ "./src/app/security/login/login.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApplicationErrorHandler = /** @class */ (function (_super) {
    __extends(ApplicationErrorHandler, _super);
    function ApplicationErrorHandler(ns, injector, zone) {
        var _this = _super.call(this) || this;
        _this.ns = ns;
        _this.injector = injector;
        _this.zone = zone;
        return _this;
    }
    ApplicationErrorHandler.prototype.handleError = function (errorResponse) {
        var _this = this;
        if (errorResponse instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
            var message_1 = errorResponse.error.message;
            this.zone.run(function () {
                switch (errorResponse.status) {
                    case 401:
                        _this.injector.get(_security_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]).handleLogin();
                        break;
                    case 403:
                        _this.ns.notify(message_1 || 'Não autorizado.');
                        break;
                    case 404:
                        _this.ns.notify(message_1 || 'Recurso não encontrado. Verifique o console para mais detalhes.');
                        break;
                }
            });
        }
        _super.prototype.handleError.call(this, errorResponse);
    };
    ApplicationErrorHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_messages_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], ApplicationErrorHandler);
    return ApplicationErrorHandler;
}(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]));



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/pt */ "./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_error_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.error-handler */ "./src/app/app.error-handler.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./restaurants/restaurants.component */ "./src/app/restaurants/restaurants.component.ts");
/* harmony import */ var _restaurants_restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./restaurants/restaurant/restaurant.component */ "./src/app/restaurants/restaurant/restaurant.component.ts");
/* harmony import */ var _restaurant_detail_restaurant_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./restaurant-detail/restaurant-detail.component */ "./src/app/restaurant-detail/restaurant-detail.component.ts");
/* harmony import */ var _restaurant_detail_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./restaurant-detail/menu/menu.component */ "./src/app/restaurant-detail/menu/menu.component.ts");
/* harmony import */ var _restaurant_detail_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./restaurant-detail/shopping-cart/shopping-cart.component */ "./src/app/restaurant-detail/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _restaurant_detail_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./restaurant-detail/menu-item/menu-item.component */ "./src/app/restaurant-detail/menu-item/menu-item.component.ts");
/* harmony import */ var _restaurant_detail_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./restaurant-detail/reviews/reviews.component */ "./src/app/restaurant-detail/reviews/reviews.component.ts");
/* harmony import */ var _order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./order-summary/order-summary.component */ "./src/app/order-summary/order-summary.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _security_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./security/login/login.component */ "./src/app/security/login/login.component.ts");
/* harmony import */ var _header_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./header/user-detail/user-detail.component */ "./src/app/header/user-detail/user-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5___default.a, 'pt');
//modulo de animacao








// import { RestaurantsService} from './restaurants/restaurants.service';





// import {ShoppingCartService} from './restaurant-detail/shopping-cart/shopping-cart.service';
// import { OrderService } from './order/order.service';





//import {CoreModule} from './core/core.module'
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_12__["RestaurantsComponent"],
                _restaurants_restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_13__["RestaurantComponent"],
                _restaurant_detail_restaurant_detail_component__WEBPACK_IMPORTED_MODULE_14__["RestaurantDetailComponent"],
                _restaurant_detail_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"],
                _restaurant_detail_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_16__["ShoppingCartComponent"],
                _restaurant_detail_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_17__["MenuItemComponent"],
                _restaurant_detail_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_18__["ReviewsComponent"],
                // OrderComponent,
                // OrderItemsComponent,
                // DeliveryCostsComponent,
                _order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_19__["OrderSummaryComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_21__["NotFoundComponent"],
                _security_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                _header_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_23__["UserDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__["SharedModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_8__["ROUTES2"], { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__["PreloadAllModules"] })
            ],
            providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'pt' },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _app_error_handler__WEBPACK_IMPORTED_MODULE_7__["ApplicationErrorHandler"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES2", function() { return ROUTES2; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurants/restaurants.component */ "./src/app/restaurants/restaurants.component.ts");
/* harmony import */ var _restaurant_detail_restaurant_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurant-detail/restaurant-detail.component */ "./src/app/restaurant-detail/restaurant-detail.component.ts");
/* harmony import */ var _restaurant_detail_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restaurant-detail/menu/menu.component */ "./src/app/restaurant-detail/menu/menu.component.ts");
/* harmony import */ var _restaurant_detail_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./restaurant-detail/reviews/reviews.component */ "./src/app/restaurant-detail/reviews/reviews.component.ts");
/* harmony import */ var _order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-summary/order-summary.component */ "./src/app/order-summary/order-summary.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _security_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./security/login/login.component */ "./src/app/security/login/login.component.ts");
/* harmony import */ var _security_loggedin_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./security/loggedin.guard */ "./src/app/security/loggedin.guard.ts");









var ROUTES2 = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'login/:to', component: _security_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'login', component: _security_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'restaurants/:id', component: _restaurant_detail_restaurant_detail_component__WEBPACK_IMPORTED_MODULE_2__["RestaurantDetailComponent"],
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: _restaurant_detail_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"] },
            { path: 'reviews', component: _restaurant_detail_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_4__["ReviewsComponent"] }
        ]
    },
    // {path: 'order', component: OrderComponent},
    { path: 'restaurants', component: _restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_1__["RestaurantsComponent"] },
    { path: 'order', loadChildren: './order/order.module#OrderModule',
        canLoad: [_security_loggedin_guard__WEBPACK_IMPORTED_MODULE_8__["LoggedInGuard"]], canActivate: [_security_loggedin_guard__WEBPACK_IMPORTED_MODULE_8__["LoggedInGuard"]] },
    { path: 'order-summary', component: _order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_5__["OrderSummaryComponent"] },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] }
];


/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Início do header -->\n<header class=\"main-header\">\n<nav class=\"navbar navbar-static-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\"><b>Meat</b></a>\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\">\n        <i class=\"fa fa-bars\"></i>\n      </button>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse pull-left\" id=\"navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n          <li routerLinkActive=\"active\"><a [routerLink]=\"['/restaurants']\">Restaurantes</a></li>\n          <li routerLinkActive=\"active\"><a [routerLink]=\"['/about']\">Sobre</a></li>\n      </ul>\n    </div>\n    <!-- /.navbar-collapse -->\n    <mt-user-detail></mt-user-detail>\n  </div>\n</nav>\n</header>\n<!-- Fim do header -->\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/header/user-detail/user-detail.component.css":
/*!**************************************************************!*\
  !*** ./src/app/header/user-detail/user-detail.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-menu>span{ /**/\n  position: relative;\n  display: block;\n  padding: 15px 15px;\n  color: #fff;\n}\n.user-menu a{\n  color: #fff;\n  cursor: pointer\n}\n@media (max-width: 991px){\n  .navbar-custom-menu {\n      display: block;\n      position: absolute;\n      top: 0;\n      right: 40px;\n    }\n}\n"

/***/ }),

/***/ "./src/app/header/user-detail/user-detail.component.html":
/*!***************************************************************!*\
  !*** ./src/app/header/user-detail/user-detail.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-custom-menu\">\n  <ul class=\"nav navbar-nav\">\n    <li class=\"user user-menu\">\n        <span *ngIf=\"isLoggedIn(); else notLoggedIn\">\n          Olá, {{user().name}} | <a (click)=\"logout()\">Sair</a>\n        </span>\n        <ng-template #notLoggedIn>\n          <a (click)=\"login()\">Entrar</a>\n        </ng-template>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/header/user-detail/user-detail.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/header/user-detail/user-detail.component.ts ***!
  \*************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _security_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../security/login/login.service */ "./src/app/security/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(loginService) {
        this.loginService = loginService;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
    };
    UserDetailComponent.prototype.user = function () {
        return this.loginService.user;
    };
    UserDetailComponent.prototype.isLoggedIn = function () {
        return this.loginService.isLoggedIn();
    };
    UserDetailComponent.prototype.login = function () {
        this.loginService.handleLogin();
    };
    UserDetailComponent.prototype.logout = function () {
        this.loginService.logout();
    };
    UserDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-user-detail',
            template: __webpack_require__(/*! ./user-detail.component.html */ "./src/app/header/user-detail/user-detail.component.html"),
            styles: [__webpack_require__(/*! ./user-detail.component.css */ "./src/app/header/user-detail/user-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_security_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- INÍCIO DO CONTEÚDO -->\n<section class=\"content-header\">\n</section>\n\n<section class=\"content\">\n\n  <div class=\"jumbotron welcome-jumbotron\">\n     <h1>Bem vindo ao Rio Orgânico</h1>\n     <p>\n       Facilitamos suas compras! Peça e receba em casa.\n     </p>\n     <a class=\"btn btn-primary btn-lg\" href=\"main-restaurants.html\" [routerLink]=\"['/restaurants']\">Ver Itens</a>\n  </div>\n\n</section>\n<!-- FIM DO CONTEÚDO -->\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/index.ts":
/*!**************************!*\
  !*** ./src/app/index.ts ***!
  \**************************/
/*! exports provided: AppComponent, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]; });

/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]; });





/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <!-- INÍCIO DO CONTEÚDO -->\n      <section class=\"content-header\">\n      </section>\n\n      <!-- Main content -->\n      <section class=\"content\">\n\n        <div class=\"jumbotron\">\n          <img src=\"assets/img/404.png\" /><h2>Página Não Encontrada</h2>\n          <p>\n            Está com fome? Acesse a página de <a [routerLink]=\"['/restaurants']\">restaurantes</a>.\n          </p>\n        </div>\n      </section>\n    <!-- FIM DO CONTEÚDO -->\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/order-summary/order-summary.component.html":
/*!************************************************************!*\
  !*** ./src/app/order-summary/order-summary.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- INICIO DO CONTEUDO -->\n<section class=\"content-header\">\n</section>\n\n<section class=\"content\">\n  <div class=\"jumbotron\">\n    <h2>Pedido Conluído</h2>\n    <p>Seu pedido foi recebido pelo restaurante. Prepare a mesa que a comida está chegando!</p>\n    <p><b>Avalie</b> sua experiência:</p>\n    <p><mt-rating (rated)=\"rate()\"></mt-rating></p>\n    <p *ngIf=\"!rated\">\n      Obrigado pela sua avaliação\n    </p>\n  </div>\n\n</section>\n<!-- FIM DO CONTEUDO -->\n"

/***/ }),

/***/ "./src/app/order-summary/order-summary.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/order-summary/order-summary.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSummaryComponent", function() { return OrderSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderSummaryComponent = /** @class */ (function () {
    function OrderSummaryComponent() {
    }
    OrderSummaryComponent.prototype.ngOnInit = function () {
    };
    OrderSummaryComponent.prototype.rate = function () {
        this.rated = true;
    };
    OrderSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-order-summary',
            template: __webpack_require__(/*! ./order-summary.component.html */ "./src/app/order-summary/order-summary.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], OrderSummaryComponent);
    return OrderSummaryComponent;
}());



/***/ }),

/***/ "./src/app/order/leave-order.guard.ts":
/*!********************************************!*\
  !*** ./src/app/order/leave-order.guard.ts ***!
  \********************************************/
/*! exports provided: LeaveOrderGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveOrderGuard", function() { return LeaveOrderGuard; });
var LeaveOrderGuard = /** @class */ (function () {
    function LeaveOrderGuard() {
    }
    LeaveOrderGuard.prototype.canDeactivate = function (orderComponent, activateRoute, routerState) {
        if (!orderComponent.isOrderCompleted()) {
            return window.confirm('Deseja desistir da compra?');
        }
        else {
            return true;
        }
    };
    return LeaveOrderGuard;
}());



/***/ }),

/***/ "./src/app/order/order.service.ts":
/*!****************************************!*\
  !*** ./src/app/order/order.service.ts ***!
  \****************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _restaurant_detail_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../restaurant-detail/shopping-cart/shopping-cart.service */ "./src/app/restaurant-detail/shopping-cart/shopping-cart.service.ts");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.api */ "./src/app/app.api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import {LoginService} from '../security/login/login.service'
var OrderService = /** @class */ (function () {
    function OrderService(cartService, http) {
        this.cartService = cartService;
        this.http = http;
    }
    OrderService.prototype.cartItems = function () {
        return this.cartService.items;
    };
    OrderService.prototype.increaseQty = function (item) {
        this.cartService.increaseQty(item);
    };
    OrderService.prototype.decreaseQty = function (item) {
        this.cartService.decreaseQty(item);
    };
    OrderService.prototype.remove = function (item) {
        this.cartService.removeItem(item);
    };
    OrderService.prototype.itemsValue = function () {
        return this.cartService.total();
    };
    OrderService.prototype.clear = function () {
        this.cartService.clear();
    };
    OrderService.prototype.checkOrder = function (order) {
        // let headers = new HttpHeaders()
        // if(this.loginService.isLoggedIn()){
        //   headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`)
        // } -> Anter de colocar interceptor
        return this.http.post(_app_api__WEBPACK_IMPORTED_MODULE_4__["MEAT_API"] + "/orders", order) //{headers:headers}) antes de colocar Interceptor
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (order) { return order.id; }));
    };
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_restaurant_detail_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/restaurant-detail/menu-item/menu-item.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/restaurant-detail/menu-item/menu-item.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-item-info-box\" [@menuItemAppeared]=\"menuItemState\">\n    <span class=\"menu-item-info-box-icon\">\n      <img [src]=\"menuItem.imagePath\"></span>\n\n    <div class=\"menu-item-info-box-content\">\n      <span class=\"menu-item-info-box-text\">{{menuItem.name}}</span>\n      <span class=\"menu-item-info-box-detail\">{{menuItem.description}}</span>\n      <span class=\"menu-item-info-box-price\">{{menuItem.price | currency: 'BRL': 'symbol'}}</span>\n      <a (click)=\"emitAddEvent()\" class=\"\"><i class=\"fa fa-plus-circle\"></i> Adicionar</a>\n    </div>\n    <!-- /.info-box-content -->\n  </div>\n"

/***/ }),

/***/ "./src/app/restaurant-detail/menu-item/menu-item.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/restaurant-detail/menu-item/menu-item.component.ts ***!
  \********************************************************************/
/*! exports provided: MenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemComponent", function() { return MenuItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuItemComponent = /** @class */ (function () {
    function MenuItemComponent() {
        this.menuItemState = 'ready';
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MenuItemComponent.prototype.ngOnInit = function () {
    };
    MenuItemComponent.prototype.emitAddEvent = function () {
        this.add.emit(this.menuItem);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MenuItemComponent.prototype, "menuItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MenuItemComponent.prototype, "add", void 0);
    MenuItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-menu-item',
            template: __webpack_require__(/*! ./menu-item.component.html */ "./src/app/restaurant-detail/menu-item/menu-item.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('menuItemAppeared', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('ready', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => ready', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(-20px)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms 0s ease-in')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], MenuItemComponent);
    return MenuItemComponent;
}());



/***/ }),

/***/ "./src/app/restaurant-detail/menu/menu.component.html":
/*!************************************************************!*\
  !*** ./src/app/restaurant-detail/menu/menu.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--INÍCIO DO MENU -->\n<div class=\"col-md-9 col-xs-12\">\n\n    <mt-menu-item *ngFor=\"let item of menu | async\"\n    [menuItem]=\"item\"\n    (add)=\"shoppingCart.addItem($event)\">\n    </mt-menu-item>\n\n\n</div>\n<div class=\"col-md-3 col-xs-12\">\n  <mt-shopping-cart #shoppingCart></mt-shopping-cart>\n</div>\n<!-- FIM DO MENU -->\n"

/***/ }),

/***/ "./src/app/restaurant-detail/menu/menu.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/restaurant-detail/menu/menu.component.ts ***!
  \**********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _restaurants_restaurants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../restaurants/restaurants.service */ "./src/app/restaurants/restaurants.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(restaurantsService, route) {
        this.restaurantsService = restaurantsService;
        this.route = route;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.menu = this.restaurantsService
            .menuOfRestaurant(this.route.parent.snapshot.params['id']);
    };
    MenuComponent.prototype.addMenuItem = function (item) {
        console.log(item);
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/restaurant-detail/menu/menu.component.html")
        }),
        __metadata("design:paramtypes", [_restaurants_restaurants_service__WEBPACK_IMPORTED_MODULE_2__["RestaurantsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/restaurant-detail/restaurant-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/restaurant-detail/restaurant-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <!-- INÍCIO DO CONTEÚDO -->\n      <section class=\"content-header\">\n        <h1>\n\n        </h1>\n      </section>\n\n\n      <section class=\"content\">\n\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n              <div class=\"box box-solid\">\n                <div class=\"box-header with-border\">\n                  <i class=\"fa fa-home\"></i>\n\n                  <h3 class=\"box-title\">{{restaurant?.name}}</h3><span class=\"pull-right\"><i class=\"fa fa-star\"></i>{{restaurant?.rating}}</span>\n                </div>\n                <!-- /.box-header -->\n                <div class=\"box-body\">\n                  <div class=\"col-sm-3 col-xs-12\" *ngIf=\"restaurant\">\n                    <img class=\"box-img-detail\" [src]=\"restaurant?.imagePath\" />\n                  </div>\n\n                  <dl class=\"col-sm-9 col-xs-12\">\n                    <dt>Categoria</dt>\n                    <dd>{{restaurant?.category}}</dd>\n                    <dt>Quem somos</dt>\n                    <dd>{{restaurant?.about}}</dd>\n                    <dt>Horários</dt>\n                    <dd>{{restaurant?.hours}}</dd>\n                  </dl>\n                </div>\n                <!-- /.box-body -->\n                <div class=\"box-footer detail-footer\">\n                <a class=\"pull-left \" routerLinkActive=\"detail-active\" [routerLink]=\"['menu']\" >\n                  Menu\n                </a>\n                <a class=\"pull-right\" routerLinkActive=\"detail-active\" [routerLink]=\"['reviews']\" >\n                   Avaliações\n                </a>\n              </div>\n              </div>\n            </div>\n            <!-- /.col-xs-12 -->\n\n        </div>\n\n\n        <div class=\"row\">\n             <router-outlet></router-outlet>\n      </div>\n\n      </section>\n      <!-- FIM DO CONTEÚDO -->\n"

/***/ }),

/***/ "./src/app/restaurant-detail/restaurant-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/restaurant-detail/restaurant-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: RestaurantDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantDetailComponent", function() { return RestaurantDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _restaurants_restaurants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../restaurants/restaurants.service */ "./src/app/restaurants/restaurants.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RestaurantDetailComponent = /** @class */ (function () {
    function RestaurantDetailComponent(restaurantsService, route) {
        this.restaurantsService = restaurantsService;
        this.route = route;
    }
    RestaurantDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
            .subscribe(function (restaurant) { return _this.restaurant = restaurant; });
    };
    RestaurantDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-restaurant-detail',
            template: __webpack_require__(/*! ./restaurant-detail.component.html */ "./src/app/restaurant-detail/restaurant-detail.component.html")
        }),
        __metadata("design:paramtypes", [_restaurants_restaurants_service__WEBPACK_IMPORTED_MODULE_2__["RestaurantsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], RestaurantDetailComponent);
    return RestaurantDetailComponent;
}());



/***/ }),

/***/ "./src/app/restaurant-detail/reviews/reviews.component.html":
/*!******************************************************************!*\
  !*** ./src/app/restaurant-detail/reviews/reviews.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- INICIO DO CONTEUDO -->\n<div class=\"col-xs-12 col-sm-6\" *ngFor=\"let review of reviews1 | async\">\n\n  <div class=\"box box-solid\">\n    <div class=\"box-header with-border\">\n      <span class=\"review-score pull-right\"><i class=\"fa fa-star\"></i>{{review.rating}}</span>\n      <div class=\"user-block\">\n        <img *ngIf=\"review.rating < 3\" alt=\"User Image\" class=\"img-circle\" src=\"assets/img/reactions/pissed.png\">\n        <img *ngIf=\"review.rating >= 3 && review.rating < 4\" alt=\"User Image\" class=\"img-circle\" src=\"assets/img/reactions/soso.png\">\n        <img *ngIf=\"review.rating >= 4\"alt=\"User Image\" class=\"img-circle\" src=\"assets/img/reactions/loved.png\">\n        <span class=\"username\">{{review.name}}</span>\n        <span class=\"description\">{{review.date | date:'dd/MM/yyyy'}}</span>\n      </div>\n    </div>\n\n    <div class=\"box-body\">\n      <p>{{review.comments}}</p>\n    </div>\n  </div>\n\n</div>\n<!--FIM DO CONTEUDO -->\n"

/***/ }),

/***/ "./src/app/restaurant-detail/reviews/reviews.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/restaurant-detail/reviews/reviews.component.ts ***!
  \****************************************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _restaurants_restaurants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../restaurants/restaurants.service */ "./src/app/restaurants/restaurants.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewsComponent = /** @class */ (function () {
    function ReviewsComponent(restaurantsService, route) {
        this.restaurantsService = restaurantsService;
        this.route = route;
    }
    ReviewsComponent.prototype.ngOnInit = function () {
        this.reviews1 = this.restaurantsService
            .reviewsOfRestaurant(this.route.parent.snapshot.params['id']);
    };
    ReviewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-reviews',
            template: __webpack_require__(/*! ./reviews.component.html */ "./src/app/restaurant-detail/reviews/reviews.component.html")
        }),
        __metadata("design:paramtypes", [_restaurants_restaurants_service__WEBPACK_IMPORTED_MODULE_2__["RestaurantsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ReviewsComponent);
    return ReviewsComponent;
}());



/***/ }),

/***/ "./src/app/restaurant-detail/shopping-cart/cart-item.model.ts":
/*!********************************************************************!*\
  !*** ./src/app/restaurant-detail/shopping-cart/cart-item.model.ts ***!
  \********************************************************************/
/*! exports provided: CartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
var CartItem = /** @class */ (function () {
    function CartItem(menuItem, quantity) {
        if (quantity === void 0) { quantity = 1; }
        this.menuItem = menuItem;
        this.quantity = quantity;
    }
    CartItem.prototype.value = function () {
        return this.menuItem.price * this.quantity;
    };
    return CartItem;
}());



/***/ }),

/***/ "./src/app/restaurant-detail/shopping-cart/shopping-cart.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/restaurant-detail/shopping-cart/shopping-cart.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--INICIO DO CARRINHO-->\n<div class=\"box box-solid\">\n  <div class=\"box-header\">\n    <i class=\"fa fa-shopping-cart\"></i>\n\n    <h3 class=\"box-title\">Carrinho</h3>\n  </div>\n  <!-- /.box-header -->\n  <div class=\"box-body\">\n\n      <div *ngIf=\"!items().length\">\n        <p class=\"text-center\">\n          Seu carrinho está vazio!\n        </p>\n      </div>\n\n    <div class=\"table-responsive\" *ngIf=\"items().length\">\n        <table class=\"table\">\n          <tbody>\n\n          <tr *ngFor=\"let item of items()\" [@row]='rowState'>\n            <th>({{item.quantity}}x){{item.menuItem.name}}</th>\n            <td class=\"text-right\">{{item.value() | currency: 'BRL': 'symbol'}}</td>\n            <td class=\"text-right\">\n              <a (click)=\"removeItem(item)\" class=\"btn btn-sm danger\"><i class=\"fa fa-remove\"></i></a>\n            </td>\n          </tr>\n\n          <tr>\n            <th>Total:</th>\n\n            <td class=\"text-right\">{{total() | currency: 'BRL': 'symbol'}}</td>\n          </tr>\n        </tbody></table>\n      </div>\n  </div>\n  <div class=\"box-footer\" *ngIf=\"items().length\">\n    <div class=\"pull-right\">\n      <button (click)=\"clear()\" type=\"button\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i> Limpar</button>\n      <a [routerLink]=\"['/order']\" class=\"btn btn-success\"><i class=\"fa fa-credit-card\"></i> Fechar Pedido</a>\n    </div>\n  </div>\n</div>\n<!-- FIM DO CARRINHO -->\n"

/***/ }),

/***/ "./src/app/restaurant-detail/shopping-cart/shopping-cart.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/restaurant-detail/shopping-cart/shopping-cart.component.ts ***!
  \****************************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-cart.service */ "./src/app/restaurant-detail/shopping-cart/shopping-cart.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
        this.rowState = 'ready';
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
    };
    ShoppingCartComponent.prototype.items = function () {
        return this.shoppingCartService.items;
    };
    ShoppingCartComponent.prototype.clear = function () {
        this.shoppingCartService.clear();
    };
    ShoppingCartComponent.prototype.total = function () {
        return this.shoppingCartService.total();
    };
    ShoppingCartComponent.prototype.removeItem = function (item) {
        this.shoppingCartService.removeItem(item);
    };
    ShoppingCartComponent.prototype.addItem = function (item) {
        this.shoppingCartService.addItem(item);
    };
    ShoppingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/restaurant-detail/shopping-cart/shopping-cart.component.html"),
            preserveWhitespaces: true,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('row', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('ready', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => ready', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms 0s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(-30px)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.8, transform: 'translateX(10px)', offset: 0.8 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateX(0px)', offset: 1 })
                    ]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('ready => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms 0s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateX(0px)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.8, transform: 'translateX(-10px)', offset: 0.2 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(30px)', offset: 1 })
                    ])))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/restaurant-detail/shopping-cart/shopping-cart.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/restaurant-detail/shopping-cart/shopping-cart.service.ts ***!
  \**************************************************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-item.model */ "./src/app/restaurant-detail/shopping-cart/cart-item.model.ts");
/* harmony import */ var _shared_messages_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/messages/notification.service */ "./src/app/shared/messages/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService(notificationService) {
        this.notificationService = notificationService;
        this.items = [];
    }
    ShoppingCartService.prototype.clear = function () {
        this.items = [];
    };
    ShoppingCartService.prototype.addItem = function (item) {
        var foundItem = this.items.find(function (mItem) { return mItem.menuItem.id === item.id; });
        if (foundItem) {
            this.increaseQty(foundItem);
        }
        else {
            this.items.push(new _cart_item_model__WEBPACK_IMPORTED_MODULE_1__["CartItem"](item));
        }
        this.notificationService.notify("Voc\u00EA adicionou " + item.name + "!");
    };
    ShoppingCartService.prototype.removeItem = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
        this.notificationService.notify("Voc\u00EA removeu " + item.menuItem.name + "!");
    };
    ShoppingCartService.prototype.total = function () {
        return this.items
            .map(function (item) { return item.value(); })
            .reduce(function (prev, value) { return prev + value; }, 0);
    };
    ShoppingCartService.prototype.increaseQty = function (item) {
        item.quantity = item.quantity + 1;
    };
    ShoppingCartService.prototype.decreaseQty = function (item) {
        item.quantity = item.quantity - 1;
        if (item.quantity === 0) {
            this.removeItem(item);
        }
    };
    ShoppingCartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_messages_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]])
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ }),

/***/ "./src/app/restaurants/restaurant/restaurant.component.html":
/*!******************************************************************!*\
  !*** ./src/app/restaurants/restaurant/restaurant.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/restaurants', restaurant.id]\">\n  <div class=\"place-info-box\" [@restaurantAppeared]=\"restaurantState\">\n    <span class=\"place-info-box-icon\"><img [src]=\"restaurant.imagePath\" /></span>\n\n    <div class=\"place-info-box-content\">\n      <span class=\"place-info-box-text\">{{restaurant.name}}</span>\n      <span class=\"place-info-box-star\"><i class=\"fa fa-star\"></i>{{restaurant.rating}}</span>\n      <span class=\"place-info-box-detail\">{{restaurant.category}}</span>\n      <span class=\"place-info-box-detail\">{{restaurant.deliveryEstimate}}</span>\n    </div>\n    <!-- /.info-box-content -->\n  </div>\n</a>\n"

/***/ }),

/***/ "./src/app/restaurants/restaurant/restaurant.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/restaurants/restaurant/restaurant.component.ts ***!
  \****************************************************************/
/*! exports provided: RestaurantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantComponent", function() { return RestaurantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestaurantComponent = /** @class */ (function () {
    function RestaurantComponent() {
        this.restaurantState = 'ready';
    }
    RestaurantComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RestaurantComponent.prototype, "restaurant", void 0);
    RestaurantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-restaurant',
            template: __webpack_require__(/*! ./restaurant.component.html */ "./src/app/restaurants/restaurant/restaurant.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('restaurantAppeared', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('ready', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => ready', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translate(-30px,-10px)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms 0s ease-in-out')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], RestaurantComponent);
    return RestaurantComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/restaurants.component.html":
/*!********************************************************!*\
  !*** ./src/app/restaurants/restaurants.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- INíCIO do CONTEÚDO -->\n<section class=\"content-header\">\n  <h1>\n    Todos os Restaurantes\n    <a\n     (click)=\"toggleSearch()\" class=\"search-link pull-right\">\n      <span *ngIf=\"iptSearch.value\"><small>\"{{iptSearch.value}}\"</small></span><i class=\"fa fa-search\"></i></a>\n  </h1>\n\n\n\n<!-- BARRA DE BUSCA -->\n  <div class=\"row\">\n    <!-- Trigger associada ao component em ANIMATIONS *********** -->\n    <div class=\"col-xs-12 search-bar\" [@toggleSearch1]=\"searchBarState\">\n      <form [formGroup]=\"searchForm\">\n        <div class=\"form-group\">\n          <input type=\"text\" #iptSearch formControlName=\"searchControl\"\n                  class=\"form-control\" placeholder=\"O que você está procurando?\" />\n        </div>\n      </form>\n    </div>\n  </div>\n\n</section>\n\n\n\n\n<section class=\"content\">\n\n  <div class=\"row\">\n          <div *ngFor=\"let restaurant0 of restaurants1\" class=\"col-sm-6 col-xs-12\">\n            <!-- Essa variavel restaurants1 está implementada em RestaurantsComponent\n                Ela é o array de objetos restaurant-->\n            <!-- <p>\n              {{bruno}}<br />\n              {{restaurants1}}<br />\n              {{restaurant}}<br />\n              {{restaurant.imagePath}}\n            </p> -->\n\n              <mt-restaurant [restaurant]=\"restaurant0\"></mt-restaurant>\n\n          </div>\n\n        </div>\n\n</section>\n\n<!-- FIM  do CONTEÚDO -->\n"

/***/ }),

/***/ "./src/app/restaurants/restaurants.component.ts":
/*!******************************************************!*\
  !*** ./src/app/restaurants/restaurants.component.ts ***!
  \******************************************************/
/*! exports provided: RestaurantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsComponent", function() { return RestaurantsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _restaurants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restaurants.service */ "./src/app/restaurants/restaurants.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RestaurantsComponent = /** @class */ (function () {
    function RestaurantsComponent(restaurantsService, fb) {
        this.restaurantsService = restaurantsService;
        this.fb = fb;
        this.searchBarState = 'hidden';
    }
    RestaurantsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchControl = this.fb.control('');
        this.searchForm = this.fb.group({
            searchControl: this.searchControl
        });
        this.searchControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (searchTerm) {
            return _this.restaurantsService
                .restaurants2(searchTerm)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])([]); }));
        })).subscribe(function (restaurants3) { return _this.restaurants1 = restaurants3; });
        this.restaurantsService.restaurants2()
            .subscribe(function (restaurants3) { return _this.restaurants1 = restaurants3; });
    };
    RestaurantsComponent.prototype.toggleSearch = function () {
        this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
    };
    RestaurantsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-restaurants',
            template: __webpack_require__(/*! ./restaurants.component.html */ "./src/app/restaurants/restaurants.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('toggleSearch1', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0,
                        "max-height": "0px",
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 1,
                        "max-height": "70px",
                        "margin-top": "20px"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms 0s ease-in-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_restaurants_service__WEBPACK_IMPORTED_MODULE_3__["RestaurantsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], RestaurantsComponent);
    return RestaurantsComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/restaurants.service.ts":
/*!****************************************************!*\
  !*** ./src/app/restaurants/restaurants.service.ts ***!
  \****************************************************/
/*! exports provided: RestaurantsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsService", function() { return RestaurantsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.api */ "./src/app/app.api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RestaurantsService = /** @class */ (function () {
    function RestaurantsService(http) {
        this.http = http;
    }
    RestaurantsService.prototype.restaurants2 = function (search) {
        var params = undefined;
        if (search) {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('q', search);
        }
        return this.http.get(_app_api__WEBPACK_IMPORTED_MODULE_2__["MEAT_API"] + "/restaurants", { params: params });
    };
    RestaurantsService.prototype.restaurantById = function (id) {
        return this.http.get(_app_api__WEBPACK_IMPORTED_MODULE_2__["MEAT_API"] + "/restaurants/" + id);
    };
    RestaurantsService.prototype.reviewsOfRestaurant = function (id) {
        return this.http.get(_app_api__WEBPACK_IMPORTED_MODULE_2__["MEAT_API"] + "/restaurants/" + id + "/reviews");
    };
    RestaurantsService.prototype.menuOfRestaurant = function (id) {
        return this.http.get(_app_api__WEBPACK_IMPORTED_MODULE_2__["MEAT_API"] + "/restaurants/" + id + "/menu");
    };
    RestaurantsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RestaurantsService);
    return RestaurantsService;
}());



/***/ }),

/***/ "./src/app/security/auth.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/security/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.service */ "./src/app/security/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(injector) {
        this.injector = injector;
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        var loginService = this.injector.get(_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]);
        if (loginService.isLoggedIn()) {
            var authRequest = request.clone({ setHeaders: { 'Authorization': "Bearer " + loginService.user.accessToken } });
            return next.handle(authRequest);
        }
        else {
            return next.handle(request);
        }
        /*
        let headers = new HttpHeaders()
        if(this.loginService.isLoggedIn()){
          headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`)
        }
        */
        //console.log('intercepting', request)
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/security/loggedin.guard.ts":
/*!********************************************!*\
  !*** ./src/app/security/loggedin.guard.ts ***!
  \********************************************/
/*! exports provided: LoggedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInGuard", function() { return LoggedInGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.service */ "./src/app/security/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoggedInGuard = /** @class */ (function () {
    function LoggedInGuard(loginService) {
        this.loginService = loginService;
    }
    LoggedInGuard.prototype.checkAuthentication = function (path) {
        var loggedIn = this.loginService.isLoggedIn();
        if (!loggedIn) {
            this.loginService.handleLogin("/" + path);
        }
        return loggedIn;
    };
    LoggedInGuard.prototype.canLoad = function (route) {
        return this.checkAuthentication(route.path);
    };
    LoggedInGuard.prototype.canActivate = function (activatedRoute, routerState) {
        return this.checkAuthentication(activatedRoute.routeConfig.path);
    };
    LoggedInGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], LoggedInGuard);
    return LoggedInGuard;
}());



/***/ }),

/***/ "./src/app/security/login/login.component.css":
/*!****************************************************!*\
  !*** ./src/app/security/login/login.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/security/login/login.component.html":
/*!*****************************************************!*\
  !*** ./src/app/security/login/login.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- INÍCIO DO CONTEÚDO -->\n    <section class=\"content login-content\" style=\"margin: 10% auto\">\n      <div class=\"login-logo\">\n           <b>MEAT</b> | Login\n      </div>\n      <div class=\"col-xs-12 col-sm-offset-3 col-sm-6 login-box-body\">\n      <p class=\"login-box-msg\">Por favor, efetue o login para continuar</p>\n\n      <form [formGroup]=\"loginForm\">\n        <mt-input-container [showTip]=false>\n          <input type=\"text\" formControlName=\"email\" class=\"form-control\" placeholder=\"Email\">\n          <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\n        </mt-input-container>\n\n        <mt-input-container [showTip]=false>\n          <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\">\n          <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n        </mt-input-container>\n\n\n        <div class=\"row\">\n        <!-- /.col -->\n        <div class=\"col-xs-offset-8 col-xs-4\">\n          <button type=\"submit\" (click)=\"login()\" [disabled]=\"loginForm.invalid\" class=\"btn btn-primary btn-block btn-flat\">Entrar</button>\n        </div>\n        <!-- /.col -->\n        </div>\n      </form>\n      </div>\n    </section>\n    <!-- FIM DO CONTEÚDO -->\n"

/***/ }),

/***/ "./src/app/security/login/login.component.ts":
/*!***************************************************!*\
  !*** ./src/app/security/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/security/login/login.service.ts");
/* harmony import */ var _shared_messages_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/messages/notification.service */ "./src/app/shared/messages/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, loginService, notificationService, activatedRoute, router) {
        this.fb = fb;
        this.loginService = loginService;
        this.notificationService = notificationService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/');
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
            .subscribe(function (user) {
            return _this.notificationService.notify("Bem vindo, " + user.name);
        }, function (response) {
            return _this.notificationService.notify(response.error.message);
        }, function () {
            _this.router.navigate([atob(_this.navigateTo)]);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/security/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/security/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _shared_messages_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/security/login/login.service.ts":
/*!*************************************************!*\
  !*** ./src/app/security/login/login.service.ts ***!
  \*************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.api */ "./src/app/app.api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import 'rxjs/add/operator/do'
//import 'rxjs/add/operator/filter'

var LoginService = /** @class */ (function () {
    function LoginService(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function (e) { return _this.lastUrl = e.url; });
    }
    LoginService.prototype.isLoggedIn = function () {
        return this.user !== undefined;
    };
    LoginService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post(_app_api__WEBPACK_IMPORTED_MODULE_4__["MEAT_API"] + "/login", { email: email, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) { return _this.user = user; }));
    };
    LoginService.prototype.logout = function () {
        this.user = undefined;
    };
    LoginService.prototype.handleLogin = function (path) {
        if (path === void 0) { path = this.lastUrl; }
        this.router.navigate(['/login', btoa(path)]);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/shared/input/input.component.html":
/*!***************************************************!*\
  !*** ./src/app/shared/input/input.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group has-feedback\" [class.has-success]=\"hasSucess()\"\n                        [class.has-error]=\"hasError()\">\n  <label class=\"control-label sr-only\" for=\"inputSuccess\"><i class=\"fa fa-check\"></i> {{label}}</label>\n\n<!-- <input type=\"text\" class=\"form-control\" name=\"address\" required minlength=\"5\" #iptAddress=\"ngModel\" ngModel placeholder=\"Endereço0\" autocomplete=\"off\" /> -->\n  <ng-content></ng-content>\n\n\n  <span class=\"help-block\" *ngIf=\"showTip && hasSucess()\" ><i class=\"fa fa-check\"></i> Ok</span>\n  <span class=\"help-block\" *ngIf=\"showTip && hasError()\" ><i class=\"fa fa-check\"></i> {{errorMessage}}</span>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/input/input.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/input/input.component.ts ***!
  \*************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InputComponent = /** @class */ (function () {
    function InputComponent() {
        this.showTip = true;
    }
    InputComponent.prototype.ngOnInit = function () {
    };
    InputComponent.prototype.ngAfterContentInit = function () {
        this.input = this.model || this.control;
        //Ao fazer o refactory para Reactive Forms foi adicionado "|| this.control"
        if (this.input === undefined) {
            throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou FormControlName');
        }
    };
    InputComponent.prototype.hasSucess = function () {
        return this.input.valid && (this.input.dirty || this.input.touched);
    };
    InputComponent.prototype.hasError = function () {
        return this.input.invalid && (this.input.dirty || this.input.touched);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputComponent.prototype, "errorMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], InputComponent.prototype, "showTip", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"])
    ], InputComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"])
    ], InputComponent.prototype, "control", void 0);
    InputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-input-container',
            template: __webpack_require__(/*! ./input.component.html */ "./src/app/shared/input/input.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/shared/messages/notification.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/messages/notification.service.ts ***!
  \*********************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var NotificationService = /** @class */ (function () {
    function NotificationService() {
        this.notifier = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NotificationService.prototype.notify = function (message) {
        this.notifier.emit(message);
    };
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/shared/messages/snackbar/snackbar.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/shared/messages/snackbar/snackbar.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".snackbar {\n  min-width: 250px;\n  margin-left: -125px;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  padding: 16px;\n  position: fixed;\n  z-index: 1;\n  left: 50%;\n  bottom: 30px;\n}\n"

/***/ }),

/***/ "./src/app/shared/messages/snackbar/snackbar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/messages/snackbar/snackbar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button (click)=\"toggleSnack()\"></button> -->\n<div class=\"snackbar\" [@snack-visibility]=\"snackVisibility\">\n  {{message}}\n</div>\n"

/***/ }),

/***/ "./src/app/shared/messages/snackbar/snackbar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/messages/snackbar/snackbar.component.ts ***!
  \****************************************************************/
/*! exports provided: SnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function() { return SnackbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notification.service */ "./src/app/shared/messages/notification.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import 'rxjs/add/observable/timer'
//import 'rxjs/add/operator/do'
//import 'rxjs/add/operator/switchMap'

var SnackbarComponent = /** @class */ (function () {
    function SnackbarComponent(notificationService) {
        this.notificationService = notificationService;
        this.message = 'Bruno Leal';
        this.snackVisibility = 'hidden';
    }
    // ngOnInit() {
    //   this.notificationService.notifier
    //   .do(message=>{
    //     this.message = message
    //     this.snackVisibility = 'visible'
    //   }).switchMap(message => Observable.timer(3000))
    //   .subscribe(timer=>this.snackVisibility = 'hidden')
    // }
    SnackbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notificationService.notifier
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (message) {
            _this.message = message;
            _this.snackVisibility = 'visible';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (message) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(3000); })).subscribe(function (timer) { return _this.snackVisibility = 'hidden'; });
    };
    SnackbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-snackbar',
            template: __webpack_require__(/*! ./snackbar.component.html */ "./src/app/shared/messages/snackbar/snackbar.component.html"),
            styles: [__webpack_require__(/*! ./snackbar.component.css */ "./src/app/shared/messages/snackbar/snackbar.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('snack-visibility', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0,
                        bottom: '0px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 1,
                        bottom: '30px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms 0s ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms 0s ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]])
    ], SnackbarComponent);
    return SnackbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/radio/radio.component.html":
/*!***************************************************!*\
  !*** ./src/app/shared/radio/radio.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let option of options\">\n  <label>\n    <div (click)=\"setValue(option.value)\"class=\"iradio_flat-red checked\" [class.checked]=\"option.value === value\" aria-checked=\"false\" aria-disabled=\"false\"\n        style=\"position: relative;\">\n        <input type=\"radio\" name=\"r3\" class=\"flat-red\" checked=\"\" style=\"position: absolute; opacity: 0;\"/>\n        <ins class=\"iCheck-helper\" style=\"position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;\"></ins>\n    </div>\n    {{option.label}}\n  </label>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/radio/radio.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/radio/radio.component.ts ***!
  \*************************************************/
/*! exports provided: RadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioComponent", function() { return RadioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RadioComponent = /** @class */ (function () {
    function RadioComponent() {
    }
    RadioComponent_1 = RadioComponent;
    RadioComponent.prototype.ngOnInit = function () {
    };
    RadioComponent.prototype.setValue = function (value) {
        this.value = value;
        this.onChange(this.value);
    };
    RadioComponent.prototype.writeValue = function (obj) {
        this.value = obj;
    };
    RadioComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    RadioComponent.prototype.registerOnTouched = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RadioComponent.prototype, "options", void 0);
    RadioComponent = RadioComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-radio',
            template: __webpack_require__(/*! ./radio.component.html */ "./src/app/shared/radio/radio.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return RadioComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], RadioComponent);
    return RadioComponent;
    var RadioComponent_1;
}());



/***/ }),

/***/ "./src/app/shared/rating/rating.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/rating/rating.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<i *ngFor=\"let r of rates\" class=\"fa\"\n[class.fa-star]=\"r <= rate\"\n[class.fa-star-o]=\"r > rate\"\n(click)=\"setRate(r)\"\n(mouseenter)=\"setTemporaryRate(r)\"\n(mouseleave)=\"clearTemporaryRate()\"\n></i>\n"

/***/ }),

/***/ "./src/app/shared/rating/rating.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/rating/rating.component.ts ***!
  \***************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RatingComponent = /** @class */ (function () {
    //previousRate está como undefined
    function RatingComponent() {
        this.rated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rates = [1, 2, 3, 4, 5];
        this.rate = 0;
    }
    RatingComponent.prototype.ngOnInit = function () {
    };
    RatingComponent.prototype.setRate = function (r) {
        this.rate = r;
        this.previousRate = undefined;
        this.rated.emit(this.rate);
    };
    RatingComponent.prototype.setTemporaryRate = function (r) {
        if (this.previousRate === undefined) {
            this.previousRate = this.rate;
        }
        this.rate = r;
    };
    RatingComponent.prototype.clearTemporaryRate = function () {
        if (this.previousRate !== undefined) {
            this.rate = this.previousRate;
            this.previousRate = undefined;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RatingComponent.prototype, "rated", void 0);
    RatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-rating',
            template: __webpack_require__(/*! ./rating.component.html */ "./src/app/shared/rating/rating.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input/input.component */ "./src/app/shared/input/input.component.ts");
/* harmony import */ var _radio_radio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radio/radio.component */ "./src/app/shared/radio/radio.component.ts");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rating/rating.component */ "./src/app/shared/rating/rating.component.ts");
/* harmony import */ var _restaurant_detail_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../restaurant-detail/shopping-cart/shopping-cart.service */ "./src/app/restaurant-detail/shopping-cart/shopping-cart.service.ts");
/* harmony import */ var _order_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../order/order.service */ "./src/app/order/order.service.ts");
/* harmony import */ var _restaurants_restaurants_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../restaurants/restaurants.service */ "./src/app/restaurants/restaurants.service.ts");
/* harmony import */ var _messages_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./messages/snackbar/snackbar.component */ "./src/app/shared/messages/snackbar/snackbar.component.ts");
/* harmony import */ var _messages_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./messages/notification.service */ "./src/app/shared/messages/notification.service.ts");
/* harmony import */ var _security_login_login_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../security/login/login.service */ "./src/app/security/login/login.service.ts");
/* harmony import */ var _security_loggedin_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../security/loggedin.guard */ "./src/app/security/loggedin.guard.ts");
/* harmony import */ var _order_leave_order_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../order/leave-order.guard */ "./src/app/order/leave-order.guard.ts");
/* harmony import */ var _security_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../security/auth.interceptor */ "./src/app/security/auth.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [_restaurant_detail_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartService"],
                _restaurants_restaurants_service__WEBPACK_IMPORTED_MODULE_9__["RestaurantsService"],
                _order_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"],
                _messages_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"],
                _security_login_login_service__WEBPACK_IMPORTED_MODULE_12__["LoginService"],
                _security_loggedin_guard__WEBPACK_IMPORTED_MODULE_13__["LoggedInGuard"],
                _order_leave_order_guard__WEBPACK_IMPORTED_MODULE_14__["LeaveOrderGuard"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _security_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__["AuthInterceptor"], multi: true }
            ]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_input_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"], _radio_radio_component__WEBPACK_IMPORTED_MODULE_5__["RadioComponent"], _rating_rating_component__WEBPACK_IMPORTED_MODULE_6__["RatingComponent"], _messages_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_10__["SnackbarComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
            exports: [_input_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"], _radio_radio_component__WEBPACK_IMPORTED_MODULE_5__["RadioComponent"], _messages_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_10__["SnackbarComponent"],
                _rating_rating_component__WEBPACK_IMPORTED_MODULE_6__["RatingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    api: 'https://localhost:3001'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills.ts */ "./src/polyfills.ts");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/ */ "./src/app/index.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app___WEBPACK_IMPORTED_MODULE_4__["AppModule"]); //, {preserveWhitespaces: true});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bruno\Desktop\angular\rioorganico\meat\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor","main~polyfills"]]]);
//# sourceMappingURL=main.js.map