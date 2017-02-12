import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {SideNavComponent} from "./sideNav/side-nav.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {VehiclesModule} from "./vehicles/vehicles.module";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes),
    VehiclesModule
  ],
  declarations: [
    AppComponent,
    SideNavComponent,
    DashboardComponent,
    ToolbarComponent
  ],
  exports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
