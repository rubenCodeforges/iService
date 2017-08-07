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

    public updateOrderState(order: Order, close: boolean = false) {
        if (order.state == OrderState.NEW) {
            order.state = OrderState.PAYED;
        } else if (order.state == OrderState.PAYED) {
            order.state = OrderState.PROCESSED;
        } else if (order.state == OrderState.PROCESSED) {
            order.state = OrderState.SEND;
        } else if (order.state == OrderState.SEND) {
            order.state = OrderState.CLOSED;
        }
        if (close) {
            order.state = OrderState.CLOSED;
        }
        this.updateOrder(order).subscribe(response => order = response);
    }

    public isOrderClosed(order: Order): boolean {
        return order.state == OrderState.CLOSED;
    }
}