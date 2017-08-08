import {APP_INITIALIZER, NgModule} from "@angular/core";
import {AppComponent} from "./AppComponent";
import {BrowserModule} from "@angular/platform-browser";
import {SideNavComponent} from "./sideNav/SideNavComponent";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppRoutes} from "./AppRoutes";
import {CommonModule, HashLocationStrategy, LocationStrategy} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {Http} from "@angular/http";
import {PartsManagerModule} from "./partsManager/PartsManagerModule";
import {HttpService} from "./common/http/HttpService";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {NavbarComponent} from "./navbar/NavbarComponent";
import {AppCommonModule} from "./common/AppCommonModule";
import {ToastyModule} from "ng2-toasty";
import {AuthService} from "./common/auth/AuthService";
import {UserService} from "./common/user/UserService";

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
        ToastyModule.forRoot(),
        AppCommonModule,
        PartsManagerModule
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
        CommonModule,
        ToastyModule,
        RouterModule
    ],
    providers: [
        HttpService,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        {
            provide: APP_INITIALIZER,
            useFactory: AuthService.factory,
            deps: [UserService],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
