import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {vehiclesRoutes} from "./vehicles.routes";
import {VehicleOverviewComponent} from "./overview/vehicle-overview.component";
import {VehicleDetailComponent} from "./details/vehicle-detail.component";
import {VehicleCreateComponent} from "./create/vehicle-create.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {VehicleResource} from "./_internal/VehicleResource";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        RouterModule.forChild(vehiclesRoutes),
        FormsModule,
        CommonModule,
        HttpModule,
        NgbModule
    ],
    declarations: [
        VehicleOverviewComponent,
        VehicleDetailComponent,
        VehicleCreateComponent
    ],
    providers: [
      VehicleResource
    ],
    exports: [RouterModule],
})
export class VehiclesModule {
}
