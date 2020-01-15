(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-order-module"],{

/***/ "./src/app/order/delivery-costs/delivery-costs.component.html":
/*!********************************************************************!*\
  !*** ./src/app/order/delivery-costs/delivery-costs.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\n  <table class=\"table\">\n    <tbody><tr>\n      <th style=\"width:50%\">Itens:</th>\n      <td class=\"text-right\">{{itemsValue | currency: 'BRL': 'symbol'}}</td>\n    </tr>\n    <tr>\n      <th>Frete:</th>\n      <td class=\"text-right\">{{delivery | currency: 'BRL': 'symbol'}}</td>\n    </tr>\n    <tr>\n      <th>Total:</th>\n      <td class=\"text-right\">{{total() | currency: 'BRL': 'symbol'}}</td>\n    </tr>\n  </tbody></table>\n</div>\n"

/***/ }),

/***/ "./src/app/order/delivery-costs/delivery-costs.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/order/delivery-costs/delivery-costs.component.ts ***!
  \******************************************************************/
/*! exports provided: DeliveryCostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryCostsComponent", function() { return DeliveryCostsComponent; });
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

var DeliveryCostsComponent = /** @class */ (function () {
    function DeliveryCostsComponent() {
    }
    DeliveryCostsComponent.prototype.ngOnInit = function () {
    };
    DeliveryCostsComponent.prototype.total = function () {
        return this.delivery + this.itemsValue;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DeliveryCostsComponent.prototype, "delivery", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DeliveryCostsComponent.prototype, "itemsValue", void 0);
    DeliveryCostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-delivery-costs',
            template: __webpack_require__(/*! ./delivery-costs.component.html */ "./src/app/order/delivery-costs/delivery-costs.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DeliveryCostsComponent);
    return DeliveryCostsComponent;
}());



/***/ }),

/***/ "./src/app/order/order-items/order-items.component.html":
/*!**************************************************************!*\
  !*** ./src/app/order/order-items/order-items.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 table-responsive\" *ngIf=\"items.length === 0\">\n  <p>\n    Não há itens no seu carrinho. Que tal começar por <a [routerLink]=\"['/restaurants']\">aqui</a>?\n  </p>\n</div>\n\n<div class=\"col-xs-12 table-responsive\" *ngIf=\"items.length > 0\">\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th class=\"text-center\">Quantidade</th>\n      <th>Item</th>\n      <th>Descrição</th>\n      <th class=\"text-right\">Subtotal</th>\n      <th class=\"text-right\"></th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let item of items\">\n      <td class=\"text-center\">\n        <a (click)=\"emitDecreaseQtd(item)\" class=\"btn btn-sm\"><i class=\"fa fa-minus\"></i></a>\n        {{item.quantity}}\n        <a (click)=\"emitIncreaseQtd(item)\" class=\"btn btn-sm\"><i class=\"fa fa-plus\"></i></a>\n      </td>\n      <td>{{item.menuItem.name}}</td>\n\n      <td>{{item.menuItem.description}}</td>\n      <td class=\"text-right\">{{item.value() | currency: 'BRL': 'symbol'}}</td>\n      <td class=\"text-right\">\n        <a (click)=\"emitRemove(item)\" class=\"btn btn-sm danger\"><i class=\"fa fa-remove\"></i></a>\n      </td>\n    </tr>\n\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/order/order-items/order-items.component.ts":
/*!************************************************************!*\
  !*** ./src/app/order/order-items/order-items.component.ts ***!
  \************************************************************/
/*! exports provided: OrderItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItemsComponent", function() { return OrderItemsComponent; });
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

var OrderItemsComponent = /** @class */ (function () {
    function OrderItemsComponent() {
        this.increaseQty = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.decreaseQty = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    OrderItemsComponent.prototype.ngOnInit = function () {
    };
    OrderItemsComponent.prototype.emitIncreaseQtd = function (item) {
        this.increaseQty.emit(item);
    };
    OrderItemsComponent.prototype.emitDecreaseQtd = function (item) {
        this.decreaseQty.emit(item);
    };
    OrderItemsComponent.prototype.emitRemove = function (item) {
        this.remove.emit(item);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], OrderItemsComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OrderItemsComponent.prototype, "increaseQty", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OrderItemsComponent.prototype, "decreaseQty", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OrderItemsComponent.prototype, "remove", void 0);
    OrderItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-order-items',
            template: __webpack_require__(/*! ./order-items.component.html */ "./src/app/order/order-items/order-items.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], OrderItemsComponent);
    return OrderItemsComponent;
}());



/***/ }),

/***/ "./src/app/order/order.component.html":
/*!********************************************!*\
  !*** ./src/app/order/order.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--INICIO DO CONTEUDO-->\n<section class=\"content-header\">\n</section>\n\n<section class=\"content\">\n  <section class=\"invoice\">\n        <!-- {{form.valid}}\n        {{form.value | json}} -->\n\n        <!-- <form #form=\"ngForm\"> UTILIZADO ANTES DO REFACTORY PARA REACTIVE FORM-->\n        <form [formGroup]=\"orderForm\" novalidate>\n\n\n          <div class=\"row\">\n            <div class=\"col-xs-12\">\n              <h2 class=\"page-header\">\n                <i class=\"fa fa-shopping-cart\"></i> Finalize o seu pedido\n              </h2>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-9\">\n              <p class=\"lead\"> Seus Dados:</p>\n            </div>\n            <div class=\"col-xs-12 col-sm-3\">\n              <span class=\"help-block pull-right has-error-block\" *ngIf=\"orderForm.hasError('emailsNotMatch')\" ><i class=\"fa fa-check\"></i> E-mails não conferem</span>\n            </div>\n\n\n            <div class=\"col-sm-6 col-xs-12\">\n              <mt-input-container errorMessage=\"Campo obrigatório e com 5 caracteres\" label=\"Nome\">\n                <input class=\"form-control\" formControlName=\"name\"  placeholder=\"Nome\" autocomplete=\"off\" />\n              </mt-input-container>\n            </div>\n            <div class=\"col-sm-3 col-xs-6\">\n              <mt-input-container errorMessage=\"E-mail inválido\" label=\"E-mail\">\n                  <input type=\"text\" class=\"form-control\" formControlName=\"email\" placeholder=\"E-mail\" autocomplete=\"off\">\n              </mt-input-container>\n            </div>\n            <div class=\"col-sm-3 col-xs-6\">\n              <mt-input-container errorMessage=\"E-mail inválido\" label=\"E-mail\">\n                  <input type=\"text\" class=\"form-control\" formControlName=\"emailConfirmation\" placeholder=\"Confirmação do e-mail\" autocomplete=\"off\">\n              </mt-input-container>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-xs-12\">\n              <p class=\"lead\">Endereço de Entrega:</p>\n            </div>\n            <div class=\"col-sm-6 col-xs-12\">\n\n              <mt-input-container errorMessage=\"Campo obrigatório e com 5 caracteres\" label=\"Endereço\">\n                <input class=\"form-control\" formControlName=\"address\"  placeholder=\"Endereço\" autocomplete=\"off\" />\n              </mt-input-container>\n\n            </div>\n\n            <div class=\"col-sm-3 col-xs-6\">\n\n              <mt-input-container errorMessage=\"Obrigatório e somente números\" label=\"Número\">\n                  <input type=\"text\" class=\"form-control\" formControlName=\"number\" placeholder=\"Número\" autocomplete=\"off\">\n              </mt-input-container>\n\n            </div>\n\n            <div class=\"col-sm-3 col-xs-6\">\n\n              <mt-input-container>\n                          <input type=\"text\" class=\"form-control\" formControlName=\"optionalAddress\" placeholder=\"Complemento\">\n              </mt-input-container>\n\n            </div>\n            <!-- /.col -->\n          </div>\n          <!-- /.row -->\n\n          <!-- Table row -->\n          <div class=\"row\">\n            <div class=\"col-xs-12\">\n              <p class=\"lead\">Itens do Pedido:</p>\n            </div>\n\n            <mt-order-items [items]=\"cartItems()\"\n                (increaseQty)=\"increaseQty($event)\"\n                (decreaseQty)=\"decreaseQty($event)\"\n                (remove)=\"remove($event)\"\n            ></mt-order-items>\n\n            <!-- /.col -->\n          </div>\n          <!-- /.row -->\n\n          <div class=\"row\">\n            <!-- accepted payments column -->\n            <div class=\"col-sm-6 col-xs-12\">\n              <p class=\"lead\">Formas de Pagamento:</p>\n\n                <div class=\"form-group\">\n                    <mt-radio [options]=\"paymentOptions\" formControlName=\"paymentOption\"></mt-radio>\n\n                </div>\n\n            </div>\n            <!-- /.col -->\n            <div class=\"col-sm-6 col-xs-12\">\n              <p class=\"lead\">Frete e Total:</p>\n\n              <mt-delivery-costs\n                [delivery]=\"delivery\"\n                [itemsValue]=\"itemsValue()\">\n\n              </mt-delivery-costs>\n\n            </div>\n            <!-- /.col -->\n          </div>\n\n        </form>\n\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <button (click)=\"checkOrder(orderForm.value)\"  class=\"btn btn-success pull-right\"\n            [disabled]=\"!orderForm.valid || cartItems().length === 0\" >\n            <i class=\"fa fa-credit-card\"></i> Concluir Pedido\n            </button>\n          </div>\n        </div>\n\n    </section>\n</section>\n<!-- FIM DO CONTEUDO-->\n"

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order.service */ "./src/app/order/order.service.ts");
/* harmony import */ var _order_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order.model */ "./src/app/order/order.model.ts");
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






var OrderComponent = /** @class */ (function () {
    function OrderComponent(orderService, router, formBuilder) {
        this.orderService = orderService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        this.numberPattern = /^[0-9]*$/;
        this.delivery = 8;
        this.paymentOptions = [
            { label: 'Dinheiro', value: 'MON' },
            { label: 'Cartão de Débito', value: 'DEB' },
            { label: 'Cartão de Refeição', value: 'REF' }
        ];
    }
    OrderComponent_1 = OrderComponent;
    OrderComponent.prototype.ngOnInit = function () {
        this.orderForm = this.formBuilder.group({
            name: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]),
            email: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.emailPattern)]),
            emailConfirmation: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.emailPattern)]),
            address: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]),
            number: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.numberPattern)]),
            optionalAddress: this.formBuilder.control(''),
            paymentOption: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        }, { validator: OrderComponent_1.equalsTo });
    };
    OrderComponent.equalsTo = function (group) {
        var email = group.get('email');
        var emailConfirmation = group.get('emailConfirmation');
        if (!email.value || !emailConfirmation.value) {
            return undefined;
        }
        if (email.value !== emailConfirmation.value) {
            return { emailsNotMatch: true };
        }
        return undefined;
    };
    OrderComponent.prototype.itemsValue = function () {
        return this.orderService.itemsValue();
    };
    OrderComponent.prototype.cartItems = function () {
        return this.orderService.cartItems();
    };
    OrderComponent.prototype.increaseQty = function (item) {
        this.orderService.increaseQty(item);
    };
    OrderComponent.prototype.decreaseQty = function (item) {
        this.orderService.decreaseQty(item);
    };
    OrderComponent.prototype.remove = function (item) {
        this.orderService.remove(item);
    };
    OrderComponent.prototype.isOrderCompleted = function () {
        return this.orderId != undefined;
    };
    OrderComponent.prototype.checkOrder = function (order) {
        var _this = this;
        //console.log(order)
        order.orderItems = this.cartItems()
            .map(function (item) { return new _order_model__WEBPACK_IMPORTED_MODULE_4__["OrderItem"](item.quantity, item.menuItem.id); });
        this.orderService.checkOrder(order)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (orderId) {
            _this.orderId = orderId;
        }))
            .subscribe(function (orderId) {
            //console.log(`Compra concluída: ${orderId}`)
            _this.router.navigate(['/order-summary']);
            _this.orderService.clear();
        });
    };
    OrderComponent = OrderComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/order/order.component.html")
        }),
        __metadata("design:paramtypes", [_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], OrderComponent);
    return OrderComponent;
    var OrderComponent_1;
}());



/***/ }),

/***/ "./src/app/order/order.model.ts":
/*!**************************************!*\
  !*** ./src/app/order/order.model.ts ***!
  \**************************************/
/*! exports provided: Order, OrderItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItem", function() { return OrderItem; });
var Order = /** @class */ (function () {
    function Order(address, number, optionalAddress, paymentOption, orderItems, id) {
        this.address = address;
        this.number = number;
        this.optionalAddress = optionalAddress;
        this.paymentOption = paymentOption;
        this.orderItems = orderItems;
        this.id = id;
    }
    return Order;
}());
var OrderItem = /** @class */ (function () {
    function OrderItem(quantity, menuId) {
        this.quantity = quantity;
        this.menuId = menuId;
    }
    return OrderItem;
}());



/***/ }),

/***/ "./src/app/order/order.module.ts":
/*!***************************************!*\
  !*** ./src/app/order/order.module.ts ***!
  \***************************************/
/*! exports provided: OrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _order_items_order_items_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-items/order-items.component */ "./src/app/order/order-items/order-items.component.ts");
/* harmony import */ var _delivery_costs_delivery_costs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delivery-costs/delivery-costs.component */ "./src/app/order/delivery-costs/delivery-costs.component.ts");
/* harmony import */ var _leave_order_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leave-order.guard */ "./src/app/order/leave-order.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ROUTES = [
    { path: '', component: _order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"], canDeactivate: [_leave_order_guard__WEBPACK_IMPORTED_MODULE_6__["LeaveOrderGuard"]] }
];
var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"], _order_items_order_items_component__WEBPACK_IMPORTED_MODULE_4__["OrderItemsComponent"], _delivery_costs_delivery_costs_component__WEBPACK_IMPORTED_MODULE_5__["DeliveryCostsComponent"]],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ROUTES)]
        })
    ], OrderModule);
    return OrderModule;
}());



/***/ })

}]);
//# sourceMappingURL=order-order-module.js.map