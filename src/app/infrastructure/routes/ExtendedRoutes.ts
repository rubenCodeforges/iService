import {Route} from "@angular/router";

export class ExtendedRoutes {
    public routes: ExtendedRoute[];
    public enabled: boolean = true;
}
;


export interface ExtendedRoute extends Route {
    linkName?: string;
}
