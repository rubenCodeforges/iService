"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Api_1 = require("../../../config/Api");
var OrderResource = (function () {
    function OrderResource(httpService) {
        this.httpService = httpService;
        this.URL = Api_1.Api.URL + "/orders";
    }
    OrderResource.prototype.findAll = function () {
        return this.httpService.get(this.URL);
    };
    OrderResource.prototype.findById = function (orderId) {
        return this.httpService.get(this.URL + "/" + orderId);
    };
    OrderResource.prototype.create = function (order) {
        return this.httpService.post(this.URL, order);
    };
    OrderResource.prototype.update = function () {
    };
    OrderResource.prototype.delete = function () {
    };
    return OrderResource;
}());
OrderResource = __decorate([
    core_1.Injectable()
], OrderResource);
exports.OrderResource = OrderResource;
