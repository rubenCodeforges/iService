import {APP_INITIALIZER, NgModule} from "@angular/core";
import {AppComponent} from "./AppComponent";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppRoutes} from "./AppRoutes";
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {Http} from "@angular/http";
import {PartsManagerModule} from "./partsManager/PartsManagerModule";
import {HttpService} from "./common/http/HttpService";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {AppCommonModule} from "./common/AppCommonModule";
import {ToastyModule} from "ng2-toasty";
import {AuthService} from "./common/auth/AuthService";
import {UserService} from "./common/user/UserService";
import {GoogleApiModule, NG_GAPI_CONFIG, NgGapiClientConfig} from "ng-gapi";
import {AuthResource} from "./common/auth/AuthResource";

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
}

let gapiClientConfig: NgGapiClientConfig = {
    client_id: "372063809670-qoggl887ba9vpt7aclf411hhk9f7icil.apps.googleusercontent.com",
    discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
    redirect_uri: location.origin + '/login',
    ux_mode: 'redirect',
    scope: [
        "https://www.googleapis.com/auth/analytics.readonly",
        "https://www.googleapis.com/auth/analytics"
    ].join(" ")
};

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
        ToastyModule.forRoot(),
        GoogleApiModule.forRoot({
            provide: NG_GAPI_CONFIG,
            useValue: gapiClientConfig
        }),
        AppCommonModule,
        PartsManagerModule
    ],
    declarations: [
        AppComponent,
    ],
    exports: [
        BrowserModule,
        FormsModule,
        NgbModule,
        CommonModule,
        ToastyModule,
        RouterModule
    ],
    providers: [
        HttpService,
        {
            provide: APP_INITIALIZER,
            useFactory: AuthService.factory,
            deps: [UserService, AuthResource],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
