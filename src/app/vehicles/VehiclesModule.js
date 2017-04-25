"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var VehiclesRoutes_1 = require("./VehiclesRoutes");
var VehicleOverviewComponent_1 = require("./overview/VehicleOverviewComponent");
var VehicleDetailComponent_1 = require("./details/VehicleDetailComponent");
var VehicleCreateComponent_1 = require("./create/VehicleCreateComponent");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var forms_1 = require("@angular/forms");
var VehicleResource_1 = require("./_internal/VehicleResource");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var VehicleModel_1 = require("./service/VehicleModel");
var VehiclesModule = (function () {
    function VehiclesModule() {
    }
    return VehiclesModule;
}());
VehiclesModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(VehiclesRoutes_1.VehiclesRoutes.routes),
            forms_1.FormsModule,
            common_1.CommonModule,
            http_1.HttpModule,
            ng_bootstrap_1.NgbModule
        ],
        declarations: [
            VehicleOverviewComponent_1.VehicleOverviewComponent,
            VehicleDetailComponent_1.VehicleDetailComponent,
            VehicleCreateComponent_1.VehicleCreateComponent
        ],
        providers: [
            VehicleResource_1.VehicleResource,
            VehicleModel_1.VehicleModel
        ],
        exports: [router_1.RouterModule],
    })
], VehiclesModule);
exports.VehiclesModule = VehiclesModule;
