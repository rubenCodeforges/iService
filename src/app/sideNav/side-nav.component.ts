import {Component} from "@angular/core";
import {vehiclesRoutes} from "../vehicles/vehicles.routes";
import {ExtendedRoute, ExtendedRoutes} from "../app.routes";
import * as _ from 'lodash';

@Component({
    selector: 'side-nav',
    template: require('./side-nav.component.html')
})
export class SideNavComponent {
    public routes: ExtendedRoutes = vehiclesRoutes;

    public routeHasLink(route: ExtendedRoute): boolean {
        return !_.isEmpty(route.linkName);
    }
}
