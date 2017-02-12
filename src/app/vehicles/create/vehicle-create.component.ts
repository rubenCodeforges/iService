import {Component} from "@angular/core";
import {VehicleResource, VehicleDocument, VehicleVendor, VehicleModel} from "../_internal/VehicleResource";
import {Http} from "@angular/http";

@Component({
    selector: 'vehicle-create',
    template: require('./vehicle-create.component.html')
})
export class VehicleCreateComponent {
    public model: VehicleDocument = <VehicleDocument>{};

    public vendors: VehicleVendor[];
    public selectedVendor = <VehicleVendor>{};
    public selectedModel = <VehicleModel>{};

    constructor(private vehicleResource: VehicleResource, private http: Http) {
        http.get('mocks/makes.json').map(res => res.json()||{}).subscribe((data)=>{
            this.vendors = data.makes;
        });
    }

    public onModelChange(vendor) {
        this.selectedVendor = vendor;
    }

    public addVehicle() {
        this.model.vendorNiceName = this.selectedVendor.niceName;
        this.model.model = this.selectedModel;
        console.log(this);
        //this.vehicleResource.add(this.model);
    }
}