import {VehicleOverviewComponent} from "./overview/vehicle-overview.component";
import {VehicleCreateComponent} from "./create/vehicle-create.component";
import {VehicleDetailComponent} from "./details/vehicle-detail.component";
import {ExtendedRoutes} from "../app.routes";

export const vehiclesRoutes: ExtendedRoutes = [
    {path: 'vehicles', component: VehicleOverviewComponent, linkName: "Vehicles Overview"},
    {path: 'vehicles/create', component: VehicleCreateComponent, linkName: "Create Vehicle"},
    {path: 'vehicles/:id', component: VehicleDetailComponent},
];