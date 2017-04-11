import {Component} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Item} from "../../item/Item";
import * as _ from "lodash";
import {Order} from "../Order";
import {FormGroup, FormControl} from "@angular/forms";

@Component({
    selector: 'order-create-modal',
    template: require('./orderCreateModal.html')
})
export class OrderCreateModal {
    public order: Order = new Order();
    public newItem: Item = new Item();

    constructor(private activeModal: NgbActiveModal) {
    }

    //TODO: needs to be reusable
    public onSubmit(form: FormGroup) {
        if (!form.valid) {
            form.controls['orderTitle'].markAsTouched(true);
            return;
        }
        console.log("form valid");
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

    public hasError(formControl: FormControl, errorType: string = "required"): boolean {
        if (!formControl) {
            return;
        }
        return formControl.hasError(errorType) && formControl.touched;
    }
}