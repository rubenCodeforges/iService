"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var VehicleCreateComponent = (function () {
    function VehicleCreateComponent(vehicleModel) {
        var _this = this;
        this.vehicleModel = vehicleModel;
        this.model = {};
        this.selectedVendor = {};
        this.selectedModel = {};
        this.vehicleModel.getMockedVendor().subscribe(function (data) {
            _this.vendors = data.makes;
        });
    }
    VehicleCreateComponent.prototype.onModelChange = function (vendor) {
        this.selectedVendor = vendor;
    };
    VehicleCreateComponent.prototype.addVehicle = function () {
        this.model.vendorNiceName = this.selectedVendor.niceName;
        this.model.model = this.selectedModel;
        this.vehicleModel.addVehicle(this.model);
    };
    return VehicleCreateComponent;
}());
VehicleCreateComponent = __decorate([
    core_1.Component({
        selector: 'vehicle-create',
        template: require('./VehicleCreate.html')
    })
], VehicleCreateComponent);
exports.VehicleCreateComponent = VehicleCreateComponent;
