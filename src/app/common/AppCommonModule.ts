import {NgModule} from "@angular/core";
import {CurrencyService} from "./currency/CurrencyService";
import {RouterModule} from "@angular/router";
import {AppCommonRoutes} from "./AppCommonRoutes";
import {ErrorPageComponent} from "./errorPages/ErrorPageComponent";
import {ImageResource} from "./media/ImageResource";
import {MediaService} from "./media/MediaService";
import {TranslateModule} from "@ngx-translate/core";
import {RouteGuard} from "./security/RouteGuard";
import {UserService} from "./user/UserService";
import {AuthService} from "./auth/AuthService";
import {GoBackButtonComponent} from "./navigation/GoBackButtonComponent";
import {ToastService} from "./notification/ToastService";
import {SideNavComponent} from "./sideNav/SideNavComponent";
import {NavbarComponent} from "./navbar/NavbarComponent";
import {BrowserModule} from "@angular/platform-browser";
import {LoginComponent} from "./login/LoginComponent";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forChild(AppCommonRoutes),
        TranslateModule,
    ],
    declarations: [
        GoBackButtonComponent,
        SideNavComponent,
        NavbarComponent,
        LoginComponent,
        ErrorPageComponent
    ],
    exports: [
        GoBackButtonComponent,
        SideNavComponent,
        NavbarComponent,
        ErrorPageComponent,
    ],
    providers: [
        CurrencyService,
        ImageResource,
        RouteGuard,
        ToastService,
        UserService,
        AuthService,
        MediaService
    ]
})

export class AppCommonModule {
}
