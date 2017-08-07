import {Component} from "@angular/core";
import * as _ from "lodash";
import {SideNavConfig} from "../config/SideNavConfig";
import {ExtendedRoute, ExtendedRoutes} from "../common/routes/ExtendedRoutes";
import {UserService} from "../common/user/UserService";

@Component({
    selector: 'side-nav',
    templateUrl: './sideNav.html',
    styleUrls: ['./sideNav.less']
})
export class SideNavComponent {
    public navigationItems: ExtendedRoutes[] = SideNavConfig.RegisteredNavigationRoutes;

    constructor(private userService: UserService) {
    }

    public routeHasLink(route: ExtendedRoute): boolean {
        return !_.isEmpty(route.linkName);
    }

    public isNavigationItemEnabled(item: ExtendedRoutes): boolean {
        return item.enabled && item.roleRequired == undefined ||
            item.enabled && item.roleRequired == this.userService.getCurrentUser().getRole();
    }

    public isRouteEnabled(route: ExtendedRoute): boolean {
        return route.roleRequired == undefined || route.roleRequired == this.userService.getCurrentUser().getRole();
    }
}
