"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Item_1 = require("../../item/Item");
var _ = require("lodash");
var Order_1 = require("../Order");
var FormService_1 = require("../../../infrastructure/form/FormService");
var OrderCreateModal = (function () {
    function OrderCreateModal(activeModal, itemModel, orderModel) {
        this.activeModal = activeModal;
        this.itemModel = itemModel;
        this.orderModel = orderModel;
        this.order = new Order_1.Order();
        this.newItem = new Item_1.Item();
    }
    OrderCreateModal.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.invalid) {
            FormService_1.FormService.markFormControlsTouched(form);
            return;
        }
        this.orderModel.createOrder(this.order).subscribe(function () {
            _this.onClose();
        });
    };
    OrderCreateModal.prototype.onClose = function () {
        this.activeModal.close();
    };
    OrderCreateModal.prototype.addItem = function () {
        var _this = this;
        if (!this.newItem.title) {
            return;
        }
        this.itemModel.createItem(this.newItem).subscribe(function (item) {
            _this.order.items.push(item);
            _this.newItem = new Item_1.Item();
        });
    };
    OrderCreateModal.prototype.deleteItem = function (item) {
        var _this = this;
        this.itemModel.deleteItem(item.id)
            .subscribe(function () {
            _.remove(_this.order.items, function (i) { return i == item; });
        });
    };
    OrderCreateModal.prototype.hasError = function (formControl, errorType) {
        if (errorType === void 0) { errorType = "required"; }
        return FormService_1.FormService.hasError(formControl, errorType);
    };
    return OrderCreateModal;
}());
OrderCreateModal = __decorate([
    core_1.Component({
        selector: 'order-create-modal',
        template: require('./orderCreateModal.html')
    })
], OrderCreateModal);
exports.OrderCreateModal = OrderCreateModal;
