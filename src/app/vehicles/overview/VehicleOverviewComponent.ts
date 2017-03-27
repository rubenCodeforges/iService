import {Component} from "@angular/core";
import {VehicleResource} from "../_internal/VehicleResource";

@Component({
    selector: 'vehicle-overview',
    template: '<h2>Hello</h2>'
})
export class VehicleOverviewComponent {
    constructor(private vehicleResource: VehicleResource) {
        this.vehicleResource.findAll().subscribe((items)=>{
            console.log(items);
        });
    }

}