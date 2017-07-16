import {Injectable} from "@angular/core";
import {OrderResource} from "./OrderResource";
import {Observable} from "rxjs";
import {Order, OrderState} from "../Order";

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

    public static getOrderStateTranslationKey(order: Order): string {
        if (order.state == OrderState.NEW) {
            return 'PARTS_MANAGER.ORDER.DETAIL.ORDER_STATE.NEW';
        } else if (order.state == OrderState.PAYED) {
            return 'PARTS_MANAGER.ORDER.DETAIL.ORDER_STATE.PAY';
        } else if (order.state == OrderState.PROCESSED) {
            return 'PARTS_MANAGER.ORDER.DETAIL.ORDER_STATE.PROCESS';
        } else if (order.state == OrderState.SEND) {
            return 'PARTS_MANAGER.ORDER.DETAIL.ORDER_STATE.SEND';
        } else if (order.state == OrderState.CLOSED) {
            return 'PARTS_MANAGER.ORDER.DETAIL.ORDER_STATE.CLOSE';
        }
    }
}