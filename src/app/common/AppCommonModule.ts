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

@NgModule({
    imports: [
        RouterModule.forChild(AppCommonRoutes),
        TranslateModule,
    ],
    declarations: [
        GoBackButtonComponent,
        ErrorPageComponent
    ],
    exports: [
        GoBackButtonComponent,
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
