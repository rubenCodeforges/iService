import {Component} from "@angular/core";
import {OrderModel} from "../services/OrderModel";
import {ActivatedRoute} from "@angular/router";
import {Order} from "../Order";

@Component({
    selector: 'order-detail',
    template: require('./orderDetail.html')
})
export class OrderDetailComponent {
    public order: Order = <Order> {};

    constructor(private route: ActivatedRoute,
                private orderModel: OrderModel) {
        this.onRouteChange();
    }

    private onRouteChange() {
        this.route.params.subscribe((param) => {
            this.orderModel.getOrder(param['id']).subscribe(order => this.order = order);
        });
    }
}