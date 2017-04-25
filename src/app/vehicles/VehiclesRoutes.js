"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VehicleOverviewComponent_1 = require("./overview/VehicleOverviewComponent");
var VehicleCreateComponent_1 = require("./create/VehicleCreateComponent");
var VehicleDetailComponent_1 = require("./details/VehicleDetailComponent");
exports.VehiclesRoutes = {
    title: "Vehicles",
    routes: [
        { path: 'vehicles', component: VehicleOverviewComponent_1.VehicleOverviewComponent, linkName: "Vehicles Overview" },
        { path: 'vehicles/create', component: VehicleCreateComponent_1.VehicleCreateComponent, linkName: "Create Vehicle" },
        { path: 'vehicles/:id', component: VehicleDetailComponent_1.VehicleDetailComponent },
    ],
    enabled: false
};
