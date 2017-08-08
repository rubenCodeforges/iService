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

@NgModule({
    imports: [
        RouterModule.forChild(AppCommonRoutes),
        TranslateModule
    ],
    declarations: [
        ErrorPageComponent
    ],
    exports: [],
    providers: [
        CurrencyService,
        ImageResource,
        RouteGuard,
        UserService,
        AuthService,
        MediaService
    ]
})

export class AppCommonModule {
}
