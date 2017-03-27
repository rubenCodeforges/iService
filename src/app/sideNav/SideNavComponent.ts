import {Component} from "@angular/core";
import {VehiclesRoutes} from "../vehicles/VehiclesRoutes";
import {ExtendedRoute, ExtendedRoutes} from "../AppRoutes";
import * as _ from "lodash";

@Component({
    selector: 'side-nav',
    template: require('./sideNav.html')
})
export class SideNavComponent {
    public routes: ExtendedRoutes = VehiclesRoutes;

    public routeHasLink(route: ExtendedRoute): boolean {
        return !_.isEmpty(route.linkName);
    }
}
