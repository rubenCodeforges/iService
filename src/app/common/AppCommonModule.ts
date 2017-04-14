import {NgModule} from "@angular/core";
import {CurrencyService} from "./currency/CurrencyService";
import {RouterModule} from "@angular/router";
import {AppCommonRoutes} from "./AppCommonRoutes";
import {ErrorPageComponent} from "./errorPages/ErrorPageComponent";

@NgModule({
    imports: [
        RouterModule.forChild(AppCommonRoutes)
    ],
    declarations: [
        ErrorPageComponent
    ],
    exports: [],
    providers: [
        CurrencyService
    ]
})

export class AppCommonModule {
}
