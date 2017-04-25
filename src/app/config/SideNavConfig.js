"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VehiclesRoutes_1 = require("../vehicles/VehiclesRoutes");
var PartsManagerRoutes_1 = require("../partsManager/PartsManagerRoutes");
/**
 * Register here module routes to display them in sidebar
 */
var SideNavConfig = (function () {
    function SideNavConfig() {
    }
    return SideNavConfig;
}());
SideNavConfig.RegisteredNavigationRoutes = [
    VehiclesRoutes_1.VehiclesRoutes,
    PartsManagerRoutes_1.PartsManagerRoutes
];
exports.SideNavConfig = SideNavConfig;
