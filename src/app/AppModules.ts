import {NgModule} from "@angular/core";
import {AppComponent} from "./AppComponent";
import {BrowserModule} from "@angular/platform-browser";
import {SideNavComponent} from "./sideNav/SideNavComponent";
import {ToolBarComponent} from "./toolbar/ToolBarComponent";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppRoutes} from "./AppRoutes";
import {DashboardComponent} from "./dashboard/DashboardComponent";
import {VehiclesModule} from "./vehicles/VehiclesModule";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {Http} from "@angular/http";
import {PartsManagerModule} from "./partsManager/PartsManagerModule";
import {HttpService} from "./infrastructure/http/HttpService";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

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
        PartsManagerModule,
        VehiclesModule
    ],
    declarations: [
        AppComponent,
        SideNavComponent,
        DashboardComponent,
        ToolBarComponent
    ],
    exports: [
        BrowserModule,
        FormsModule,
        TranslateModule,
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
