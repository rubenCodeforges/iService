import {NgModule} from "@angular/core";
import {AppComponent} from "./AppComponent";
import {BrowserModule} from "@angular/platform-browser";
import {SideNavComponent} from "./sideNav/SideNavComponent";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppRoutes} from "./AppRoutes";
import {VehiclesModule} from "./vehicles/VehiclesModule";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {Http} from "@angular/http";
import {PartsManagerModule} from "./partsManager/PartsManagerModule";
import {HttpService} from "./infrastructure/http/HttpService";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {NavbarComponent} from "./navbar/NavbarComponent";
import {AppCommonModule} from "./common/AppCommonModule";

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        }),
        NgbModule.forRoot(),
        AppCommonModule,
        PartsManagerModule,
        VehiclesModule
    ],
    declarations: [
        AppComponent,
        SideNavComponent,
        NavbarComponent
    ],
    exports: [
        BrowserModule,
        FormsModule,
        NgbModule,
        RouterModule
    ],
    providers: [
        HttpService,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
