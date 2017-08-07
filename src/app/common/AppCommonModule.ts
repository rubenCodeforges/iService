import {NgModule} from "@angular/core";
import {CurrencyService} from "./currency/CurrencyService";
import {RouterModule} from "@angular/router";
import {AppCommonRoutes} from "./AppCommonRoutes";
import {ErrorPageComponent} from "./errorPages/ErrorPageComponent";
import {ImageResource} from "./media/ImageResource";
import {MediaService} from "./media/MediaService";
import {TranslateModule} from "@ngx-translate/core";

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
        MediaService
    ]
})

export class AppCommonModule {
}
