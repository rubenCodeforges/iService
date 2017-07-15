import {ExtendedRoutes} from "../infrastructure/routes/ExtendedRoutes";
import {PartsManagerRoutes} from "../partsManager/PartsManagerRoutes";

/**
 * Register here module routes to display them in sidebar
 */
export class SideNavConfig {
    public static readonly RegisteredNavigationRoutes: ExtendedRoutes[] = [
        PartsManagerRoutes
    ]
}