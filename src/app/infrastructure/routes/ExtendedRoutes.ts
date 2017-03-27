import {Route} from "@angular/router";

export class ExtendedRoutes {
    public routes: ExtendedRoute[];
    public title: string;
    public enabled: boolean = true;
}


export interface ExtendedRoute extends Route {
    linkName?: string;
}
