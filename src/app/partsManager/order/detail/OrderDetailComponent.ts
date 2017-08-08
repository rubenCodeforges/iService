import {Component} from "@angular/core";
import {OrderModel} from "../services/OrderModel";
import {ActivatedRoute} from "@angular/router";
import {Order} from "../Order";
import {Item} from "../../item/Item";
import {ToastService} from "../../../common/notification/ToastService";

@Component({
    selector: 'order-detail',
    templateUrl: './orderDetail.html'
})
export class OrderDetailComponent {
    public order: Order = <Order> {};

    constructor(private route: ActivatedRoute,
                private toastService: ToastService,
                private orderModel: OrderModel) {
        this.onRouteChange();
    }

    public onUpdate() {
        this.orderModel.updateOrder(this.order).subscribe(() => this.toastService.success('TOAST.UPDATE.ORDER'));
    }

    public onCreateItem(item: Item) {
        if (item) {
            this.order.items.push(item);
            this.onUpdate();
        }
    }

    private onRouteChange() {
        this.route.params.subscribe((param) => {
            this.orderModel.getOrder(param['id']).subscribe(order => this.order = order);
        });
    }
}