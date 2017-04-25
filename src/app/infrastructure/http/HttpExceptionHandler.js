"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var HttpExceptionHandler = (function () {
    function HttpExceptionHandler() {
    }
    HttpExceptionHandler.handleError = function (response) {
        var errMsg = response.status + " - " + response.statusText;
        console.error(errMsg);
        return rxjs_1.Observable.throw({ message: errMsg, code: response.status });
    };
    return HttpExceptionHandler;
}());
HttpExceptionHandler.HTTP_NO_JSON_RESPONSE = "The http response is not of type JSON";
exports.HttpExceptionHandler = HttpExceptionHandler;
