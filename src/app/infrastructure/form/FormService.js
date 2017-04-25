"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var FormService = (function () {
    function FormService() {
    }
    FormService.hasError = function (formControl, errorType) {
        if (errorType === void 0) { errorType = "required"; }
        if (!formControl) {
            return;
        }
        return formControl.hasError(errorType) && formControl.touched;
    };
    FormService.markFormControlsTouched = function (form) {
        _.each(form.controls, function (control) {
            control.markAsTouched(true);
        });
    };
    return FormService;
}());
exports.FormService = FormService;
