import {Component, Input} from "@angular/core";
import {Order} from "../Order";
import {OrderModel} from "app/partsManager/order/services/OrderModel";

@Component({
    templateUrl: 'stateEditButtons.html',
    selector: 'state-edit-buttons'
})
export class StateEditButtonsComponent {
    @Input() order: Order;

    constructor(private orderModel: OrderModel) {
    }

    public updateState() {
        this.orderModel.updateOrderState(this.order);
    }

    public getOrderActionButtonTranslationKey(): string {
        return OrderModel.getOrderStateTranslationKey(this.order);
    }

    public isOrderClosed(): boolean {
        return this.orderModel.isOrderClosed(this.order);
    }
}