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

@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(AppRoutes),
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
    RouterModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
