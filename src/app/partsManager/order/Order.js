"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Order = (function () {
    function Order() {
        this.state = OrderState.NEW;
        this.items = [];
    }
    return Order;
}());
exports.Order = Order;
var OrderState;
(function (OrderState) {
    OrderState[OrderState["NEW"] = "NEW"] = "NEW";
    OrderState[OrderState["PAYED"] = "PAYED"] = "PAYED";
    OrderState[OrderState["PROCESSED"] = "PROCESSED"] = "PROCESSED";
    OrderState[OrderState["SEND"] = "SEND"] = "SEND";
    OrderState[OrderState["CLOSED"] = "CLOSED"] = "CLOSED";
})(OrderState = exports.OrderState || (exports.OrderState = {}));
