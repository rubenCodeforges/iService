"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Currency_1 = require("../../common/currency/Currency");
var Item = (function () {
    function Item() {
        this.title = "";
        this.description = "";
        this.currency = Currency_1.Currency.UAH;
    }
    return Item;
}());
exports.Item = Item;
