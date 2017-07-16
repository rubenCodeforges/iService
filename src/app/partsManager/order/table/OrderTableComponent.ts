import {Component, Input} from "@angular/core";
import {Order, OrderState} from "../Order";
import {OrderModel} from "../services/OrderModel";
import {Router} from "@angular/router";

@Component({
    selector: 'order-table',
    templateUrl: './orderTable.html'
})
export class OrderTableComponent {
    @Input() orders: Order[];

    constructor(private router: Router) {
    }

    public openDetails(order: Order) {
        this.router.navigateByUrl('orders/' + order.id);
    }

    public getStateClass(order: Order) {
        if (order.state == OrderState.PAYED) {
            return "badge-success";
        } else if (order.state == OrderState.PROCESSED) {
            return "badge-primary";
        } else if (order.state == OrderState.SEND) {
            return "badge-info";
        } else if (order.state == OrderState.CLOSED) {
            return "badge-default";
        } else {
            return "badge-danger";
        }
    }

    public getOrderStateTranslationKey(order: Order) {
        return OrderModel.getOrderStateTranslationKey(order);
    }
}
