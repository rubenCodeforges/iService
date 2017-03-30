import {Injectable} from "@angular/core";
import {OrderResource} from "./OrderResource";
import {Observable} from "rxjs";
import {Order} from "../Order";

@Injectable()
export class OrderModel {

    constructor(private orderResource: OrderResource) {
    }

    getAllOrders(): Observable<Order[]> {
        return this.orderResource.findAll();
    }
}