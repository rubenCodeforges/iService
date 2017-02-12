import {VehicleResource, VehicleDocument} from "../_internal/VehicleResource";
import {Injectable} from "@angular/core";
import {Subscription, Observable} from "rxjs";

@Injectable()
export class VehicleModel {

    constructor(private vehicleResource: VehicleResource){

    }

    public getMockedVendor(): Observable<any> {
        return this.vehicleResource.getMockedVendor();
    }

    public addVehicle(vehicle: VehicleDocument) {
        this.vehicleResource.add(vehicle);
    }
}
