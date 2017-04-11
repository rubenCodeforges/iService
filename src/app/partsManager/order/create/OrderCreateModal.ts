import {Component} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Item} from "../../item/Item";
import * as _ from "lodash";
import {Order} from "../Order";
import {FormControl, FormGroup} from "@angular/forms";
import {OrderModel} from "../services/OrderModel";
import {ItemModel} from "../../item/services/ItemModel";

@Component({
    selector: 'order-create-modal',
    template: require('./orderCreateModal.html')
})
export class OrderCreateModal {
    public order: Order = new Order();
    public newItem: Item = new Item();

    constructor(private activeModal: NgbActiveModal,
                private itemModel: ItemModel,
                private orderModel: OrderModel) {
    }

    //TODO: needs to be reusable
    public onSubmit(form: FormGroup) {
        if (!form.valid) {
            form.controls['orderTitle'].markAsTouched(true);
            return;
        }
        this.orderModel.createOrder(this.order).subscribe((response) => {
            this.onClose();
        });
    }

    public onClose() {
        this.activeModal.close();
    }

    public addItem() {
        if (!this.newItem.title) {
            return;
        }
        this.itemModel.createItem(this.newItem).subscribe((item: Item) => {
            this.order.items.push(item);
            this.newItem = new Item();
        });
    }

    public deleteItem(item: Item) {
        this.itemModel.deleteItem(item.id)
            .subscribe(() => {
                _.remove(this.order.items, (i) => i == item);
            });
    }

    public hasError(formControl: FormControl, errorType: string = "required"): boolean {
        if (!formControl) {
            return;
        }
        return formControl.hasError(errorType) && formControl.touched;
    }
}