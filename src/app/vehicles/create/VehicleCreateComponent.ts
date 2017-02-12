import {Component} from "@angular/core";
import { VehicleDocument, VehicleVendor, VehicleType} from "../_internal/VehicleResource";
import {VehicleModel} from "../service/VehicleModel";

@Component({
    selector: 'vehicle-create',
    template: require('./VehicleCreate.html')
})
export class VehicleCreateComponent {
    public model: VehicleDocument = <VehicleDocument>{};

    public vendors: VehicleVendor[];
    public selectedVendor = <VehicleVendor>{};
    public selectedModel = <VehicleType>{};

    constructor(private vehicleModel: VehicleModel) {
      this.vehicleModel.getMockedVendor().subscribe((data)=> {
        this.vendors = data.makes;
      });
    }

    public onModelChange(vendor) {
        this.selectedVendor = vendor;
    }

    public addVehicle() {
        this.model.vendorNiceName = this.selectedVendor.niceName;
        this.model.model = this.selectedModel;
        this.vehicleModel.addVehicle(this.model);
    }
}
