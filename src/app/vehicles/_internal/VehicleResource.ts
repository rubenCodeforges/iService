import {Injectable} from "@angular/core";
import {DatabaseAdapter} from "../../common/database/DatabaseAdapter";
import {LocalStorageManager} from "../../common/database/minimongo/LocalStorageManager";
import {Observable} from "rxjs";
import {Http} from "@angular/http";

@Injectable()
export class VehicleResource {
    private manager: LocalStorageManager;
    private collection: string = 'vehicles';

    constructor(private http: Http) {
        this.manager = DatabaseAdapter.get();
        this.manager.addCollection(this.collection);
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

    public getMockedVendor(): Observable<any> {
        return this.http.get('/mocks/makes.json').map(res => res.json() || {})
    }
}

export interface VehicleDocument {
    _id: string;
    vendorNiceName: string;
    model: VehicleType;
    vin: string;
    clientId: string;
}

export interface VehicleVendor {
    id: string;
    name: string;
    niceName: string;
    models: VehicleType[];
}

export interface VehicleType {
    id: string;
    name: string;
    niceName: string;
}