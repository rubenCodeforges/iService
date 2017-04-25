"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Item_1 = require("../Item");
var FormService_1 = require("../../../infrastructure/form/FormService");
var CurrencyService_1 = require("../../../common/currency/CurrencyService");
var ItemCreateModal = (function () {
    function ItemCreateModal(activeModal, itemModel) {
        this.activeModal = activeModal;
        this.itemModel = itemModel;
        this.item = new Item_1.Item();
        this.availableCurrencies = CurrencyService_1.CurrencyService.getCurrencyAsArray();
    }
    ItemCreateModal.prototype.onSubmit = function (form) {
        if (form.invalid) {
            FormService_1.FormService.markFormControlsTouched(form);
            return;
        }
        console.log(this.item);
        // this.itemModel.createItem(this.item).subscribe(() => {
        //     this.onClose();
        // });
    };
    ItemCreateModal.prototype.onClose = function () {
        this.activeModal.close();
    };
    ItemCreateModal.prototype.hasError = function (formControl, errorType) {
        if (errorType === void 0) { errorType = "required"; }
        return FormService_1.FormService.hasError(formControl, errorType);
    };
    return ItemCreateModal;
}());
ItemCreateModal = __decorate([
    core_1.Component({
        selector: 'order-create-modal',
        template: require('./itemCreateModal.html')
    })
], ItemCreateModal);
exports.ItemCreateModal = ItemCreateModal;
