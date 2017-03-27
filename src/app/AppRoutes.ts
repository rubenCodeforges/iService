import {Route} from "@angular/router";
import {DashboardComponent} from "./dashboard/DashboardComponent";

export const AppRoutes: ExtendedRoutes = [
    {path: 'dashboard', component: DashboardComponent},
];

export declare type ExtendedRoutes = ExtendedRoute[];

export interface ExtendedRoute extends Route {
    linkName?: string;
}
