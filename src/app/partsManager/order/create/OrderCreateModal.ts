import {Component} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Item} from "../../item/Item";
import * as _ from "lodash";
import {Order} from "../Order";
import {FormControl, FormGroup} from "@angular/forms";
import {OrderModel} from "../services/OrderModel";
import {ItemModel} from "../../item/services/ItemModel";
import {FormService} from "../../../infrastructure/form/FormService";

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


    public onSubmit(form: FormGroup) {
        if (form.invalid) {
            FormService.markFormControlsTouched(form);
            return;
        }
        this.orderModel.createOrder(this.order).subscribe(() => {
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
        return FormService.hasError(formControl, errorType);
    }
}