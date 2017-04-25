"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var HttpExceptionHandler_1 = require("./HttpExceptionHandler");
var core_1 = require("@angular/core");
var HttpService = HttpService_1 = (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.get = function (url, options) {
        return this.http.get(url, options)
            .map(HttpService_1.toJsonResponse)
            .catch(HttpExceptionHandler_1.HttpExceptionHandler.handleError);
    };
    //TODO: Create requestBody
    HttpService.prototype.post = function (url, requestBody, options) {
        return this.http.post(url, requestBody, options)
            .map(HttpService_1.toJsonResponse)
            .catch(HttpExceptionHandler_1.HttpExceptionHandler.handleError);
    };
    HttpService.toJsonResponse = function (response) {
        try {
            return response.json();
        }
        catch (e) {
            return response.status;
        }
    };
    return HttpService;
}());
HttpService = HttpService_1 = __decorate([
    core_1.Injectable()
], HttpService);
exports.HttpService = HttpService;
var HttpService_1;
