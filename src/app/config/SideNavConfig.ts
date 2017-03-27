import {VehiclesRoutes} from "../vehicles/VehiclesRoutes";
import {ExtendedRoutes} from "../infrastructure/routes/ExtendedRoutes";

export class SideNavConfig {
    public static readonly RegisteredNavigationRoutes: ExtendedRoutes[] = [
        VehiclesRoutes
    ]
}