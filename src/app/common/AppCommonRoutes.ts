import {Route} from "@angular/router";
import {ErrorPageComponent} from "./errorPages/ErrorPageComponent";
import {LoginComponent} from "./login/LoginComponent";

export const AppCommonRoutes: Route[] = [
    {path: 'error/:code', component: ErrorPageComponent},
    {path: 'login', component: LoginComponent}
];
