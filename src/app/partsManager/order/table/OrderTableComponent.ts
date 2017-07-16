import {Component, Input} from "@angular/core";
import {Order, OrderState} from "../Order";
import {OrderModel} from "../services/OrderModel";

@Component({
    selector: 'order-table',
    templateUrl: './orderTable.html'
})
export class OrderTableComponent {
    @Input() orders: Order[];

    public openDetails(order: Order) {

    }

    public getStateClass(order: Order) {
        console.log(order);
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
