import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {VehiclesRoutes} from "./VehiclesRoutes";
import {VehicleOverviewComponent} from "./overview/VehicleOverviewComponent";
import {VehicleDetailComponent} from "./details/VehicleDetailComponent";
import {VehicleCreateComponent} from "./create/VehicleCreateComponent";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {VehicleResource} from "./_internal/VehicleResource";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {VehicleModel} from "./service/VehicleModel";

@NgModule({
    imports: [
        RouterModule.forChild(VehiclesRoutes),
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
        VehicleResource,
        VehicleModel
    ],
    exports: [RouterModule],
})
export class VehiclesModule {
}
