import {VehicleOverviewComponent} from "./overview/VehicleOverviewComponent";
import {VehicleCreateComponent} from "./create/VehicleCreateComponent";
import {VehicleDetailComponent} from "./details/VehicleDetailComponent";
import {ExtendedRoutes} from "../AppRoutes";

export const VehiclesRoutes: ExtendedRoutes = [
    {path: 'vehicles', component: VehicleOverviewComponent, linkName: "Vehicles Overview"},
    {path: 'vehicles/create', component: VehicleCreateComponent, linkName: "Create Vehicle"},
    {path: 'vehicles/:id', component: VehicleDetailComponent},
];
