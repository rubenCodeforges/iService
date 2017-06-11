import {Injectable} from "@angular/core";
import {OrderResource} from "./OrderResource";
import {Observable} from "rxjs";
import {Order} from "../Order";

@Injectable()
export class OrderModel {

    constructor(private orderResource: OrderResource) {
    }

    public getAllOrders(): Observable<Order[]> {
        return this.orderResource.findAll();
    }

    public getOrder(id: string): Observable<Order> {
        return this.orderResource.findById(id);
    }

    public createOrder(order: Order): Observable<void> {
        return this.orderResource.create(order);
    }

    public updateOrder(order: Order): Observable<Order> {
        return this.orderResource.update(order);
    }
}