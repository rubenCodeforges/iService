import {Injectable} from "@angular/core";
import {DatabaseAdapter} from "../../common/database/DatabaseAdapter";
import {LocalStorageManager} from "../../common/database/minimongo/LocalStorageManager";
import {Observable} from "rxjs";

@Injectable()
export class VehicleResource {
    private manager: LocalStorageManager;
    private collection: string = 'vehicles';

    constructor() {
        this.manager = DatabaseAdapter.get();
        this.manager.addCollection(this.collection);
        this.manager.put({
            collection: this.collection,
            documents: {
                vendor: 'VW',
                model: 'Golf4',
                vin: '5424234252',
                clientId: 3
            }
        })
    }

    public findAll(): Observable<VehicleDocument[]> {
        return Observable.create((observer)=> {
            observer.next(this.manager.getItems(this.collection));
        });
    }

    public add(vehicle: VehicleDocument) {
        this.manager.put({
            collection: this.collection,
            documents: vehicle
        });
    }
}

export interface VehicleDocument {
    _id: string;
    vendorNiceName: string;
    model: VehicleModel;
    vin: string;
    clientId: string;
}

export interface VehicleVendor {
    id: string;
    name: string;
    niceName: string;
    models: VehicleModel[];
}

export interface VehicleModel {
    id: string;
    name: string;
    niceName: string;
}