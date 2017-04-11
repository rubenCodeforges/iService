import {Component} from "@angular/core";
import {OrderModel} from "../services/OrderModel";
import {Order} from "../Order";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {OrderCreateModal} from "../create/OrderCreateModal";

@Component({
    selector: 'order-overview',
    template: require('./orderOverview.html')
})
export class OrderOverviewComponent {
    public orders: Order[] = [];

    constructor(private modalService: NgbModal,
                private orderModel: OrderModel) {
    }

    public openModal() {
        this.modalService.open(OrderCreateModal);
    }

    private loadOrders() {
        this.orderModel.getAllOrders().subscribe((response) => {
            this.orders = response;
        })
    }
}