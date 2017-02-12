import {Route} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";

export const appRoutes: ExtendedRoutes = [
    {path: 'dashboard', component: DashboardComponent},
];

export declare type ExtendedRoutes = ExtendedRoute[];

export interface ExtendedRoute extends Route {
    linkName?: string;
}
