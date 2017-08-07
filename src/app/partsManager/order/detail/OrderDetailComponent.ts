import {Component} from "@angular/core";
import {OrderModel} from "../services/OrderModel";
import {ActivatedRoute} from "@angular/router";
import {Order, OrderState} from "../Order";

@Component({
    selector: 'order-detail',
    templateUrl: './orderDetail.html'
})
export class OrderDetailComponent {
    public order: Order = <Order> {};

    constructor(private route: ActivatedRoute,
                private orderModel: OrderModel) {
        this.onRouteChange();
    }

    public updateOrderState(close: boolean = false) {
        if (this.order.state == OrderState.NEW) {
            this.order.state = OrderState.PAYED;
        } else if (this.order.state == OrderState.PAYED) {
            this.order.state = OrderState.PROCESSED;
        } else if (this.order.state == OrderState.PROCESSED) {
            this.order.state = OrderState.SEND;
        } else if (this.order.state == OrderState.SEND) {
            this.order.state = OrderState.CLOSED;
        }
        if (close) {
            this.order.state = OrderState.CLOSED;
        }
        this.orderModel.updateOrder(this.order).subscribe(order => this.order = order);
    }

    public getOrderActionButtonTranslationKey(): string {
        return OrderModel.getOrderStateTranslationKey(this.order);
    }

    public isOrderClosed(): boolean {
        return this.order.state == OrderState.CLOSED;
    }

    public openModal() {

    }

    public onUpdate() {

    }

    private onRouteChange() {
        this.route.params.subscribe((param) => {
            this.orderModel.getOrder(param['id']).subscribe(order => this.order = order);
        });
    }
}