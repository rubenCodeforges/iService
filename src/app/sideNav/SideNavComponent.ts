import {Component} from "@angular/core";
import * as _ from "lodash";
import {SideNavConfig} from "../config/SideNavConfig";
import {ExtendedRoute, ExtendedRoutes} from "../infrastructure/routes/ExtendedRoutes";

@Component({
    selector: 'side-nav',
    templateUrl: './sideNav.html',
    styleUrls: ['./sideNav.less']
})
export class SideNavComponent {
    public navigationItems: ExtendedRoutes[] = SideNavConfig.RegisteredNavigationRoutes;

    public routeHasLink(route: ExtendedRoute): boolean {
        return !_.isEmpty(route.linkName);
    }
}
