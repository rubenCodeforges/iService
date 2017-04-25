"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Currency_1 = require("./Currency");
var CurrencyService = (function () {
    function CurrencyService() {
    }
    CurrencyService.prototype.getCallculatedPrice = function (price, currency) {
        return price * this.getCurrencyRate(currency);
    };
    CurrencyService.getCurrencyAsArray = function () {
        return Object.keys(Currency_1.Currency).map(function (k) { return Currency_1.Currency[k]; });
    };
    CurrencyService.prototype.getCurrencyRate = function (currency) {
        // TODO : Load some data from a online service
        return 1;
    };
    return CurrencyService;
}());
CurrencyService = __decorate([
    core_1.Injectable()
], CurrencyService);
exports.CurrencyService = CurrencyService;
