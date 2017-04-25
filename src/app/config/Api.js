"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Api = (function () {
    function Api() {
    }
    return Api;
}());
Api.HOST = 'http://localhost:9000';
Api.VERSION = '/v1';
Api.URL = Api.HOST + '/api' + Api.VERSION;
exports.Api = Api;
