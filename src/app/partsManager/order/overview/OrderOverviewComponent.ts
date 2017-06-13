import {Component} from "@angular/core";
import {OrderModel} from "../services/OrderModel";
import {Order} from "../Order";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {OrderCreateModal} from "../create/OrderCreateModal";
import * as _ from "lodash";

@Component({
    selector: 'order-overview',
    templateUrl: './orderOverview.html'
})
export class OrderOverviewComponent {
    public orders: Order[] = [];

    constructor(private modalService: NgbModal,
                private orderModel: OrderModel) {
        this.loadOrders();
    }

    public openModal() {
        this.modalService.open(OrderCreateModal)
            .result.then(() => this.loadOrders());
    }

    private loadOrders() {
        this.orderModel.getAllOrders().subscribe((response) => {
            this.orders = _.reverse(response);
        })
    }
}