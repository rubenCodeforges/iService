import {Component} from "@angular/core";
import {OrderModel} from "../services/OrderModel";
import {Order} from "../Order";

@Component({
    selector: 'order-overview',
    template: require('./orderOverview.html')
})
export class OrderOverviewComponent {
    public orders: Order[] = [];

    constructor(private orderModel: OrderModel) {
        this.orderModel.getAllOrders().subscribe((response) => {
            this.orders = response;
        })
    }
}