"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OrderCreateModal_1 = require("../create/OrderCreateModal");
var _ = require("lodash");
var OrderOverviewComponent = (function () {
    function OrderOverviewComponent(modalService, orderModel) {
        this.modalService = modalService;
        this.orderModel = orderModel;
        this.orders = [];
        this.loadOrders();
    }
    OrderOverviewComponent.prototype.openModal = function () {
        var _this = this;
        this.modalService.open(OrderCreateModal_1.OrderCreateModal)
            .result.then(function () { return _this.loadOrders(); });
    };
    OrderOverviewComponent.prototype.loadOrders = function () {
        var _this = this;
        this.orderModel.getAllOrders().subscribe(function (response) {
            _this.orders = _.reverse(response);
        });
    };
    return OrderOverviewComponent;
}());
OrderOverviewComponent = __decorate([
    core_1.Component({
        selector: 'order-overview',
        template: require('./orderOverview.html')
    })
], OrderOverviewComponent);
exports.OrderOverviewComponent = OrderOverviewComponent;
