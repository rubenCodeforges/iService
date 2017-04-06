import {Component} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Item} from "../../item/Item";
import * as _ from "lodash";
import {Order} from "../Order";

@Component({
    selector: 'order-create-modal',
    template: require('./orderCreateModal.html')
})
export class OrderCreateModal {
    public order: Order = new Order();
    public newItem: Item = new Item();

    constructor(private activeModal: NgbActiveModal) {
    }

    public onSubmit() {
        console.log(this.order);
    }

    public onClose() {
        this.activeModal.dismiss();
    }

    public addItem() {
        if (!this.newItem.title) {
            return;
        }
        this.order.items.push(this.newItem);
        this.newItem = new Item();
    }

    public deleteItem(item: Item) {
        _.remove(this.order.items, (i) => i == item);
    }
}