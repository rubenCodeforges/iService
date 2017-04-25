"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var OrderResolver = (function () {
    function OrderResolver(orderModel, router) {
        this.orderModel = orderModel;
        this.router = router;
    }
    OrderResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.params['id'];
        return this.orderModel.getOrder(id).catch(function (err, caught) {
            if (!err.code) {
                _this.router.navigate(['error/500']);
            }
            _this.router.navigate(['error/' + err.code]);
            return rxjs_1.Observable.throw(err);
        });
    };
    return OrderResolver;
}());
OrderResolver = __decorate([
    core_1.Injectable()
], OrderResolver);
exports.OrderResolver = OrderResolver;
