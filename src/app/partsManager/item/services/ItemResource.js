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
var ItemResource = (function () {
    function ItemResource(httpService) {
        this.httpService = httpService;
        this.URL = Api_1.Api.URL + "/items";
    }
    ItemResource.prototype.findAll = function () {
        return this.httpService.get(this.URL);
    };
    ItemResource.prototype.findById = function (itemId) {
        return this.httpService.get(this.URL + "/" + itemId);
    };
    ItemResource.prototype.create = function (item) {
        return this.httpService.post(this.URL, item);
    };
    ItemResource.prototype.update = function () {
    };
    ItemResource.prototype.delete = function (itemId) {
        return this.httpService.get(this.URL + "/" + itemId + "/delete");
    };
    return ItemResource;
}());
ItemResource = __decorate([
    core_1.Injectable()
], ItemResource);
exports.ItemResource = ItemResource;
