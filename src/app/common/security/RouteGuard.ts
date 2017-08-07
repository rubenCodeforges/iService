import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {UserService} from "../user/UserService";

@Injectable()
export class RouteGuard implements CanActivate {

    constructor(private userService: UserService) {
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return route.routeConfig['roleRequired'] === this.userService.getCurrentUser().getRole();
    }
}