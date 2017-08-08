import {Route} from "@angular/router";
import {Roles} from "../user/Roles";

export class ExtendedRoutes {
    public routes: ExtendedRoute[];
    public title: string;
    public enabled: boolean = true;
    roleRequired?: Roles;
}


export interface ExtendedRoute extends Route {
    linkName?: string;
    roleRequired?: Roles;
}
