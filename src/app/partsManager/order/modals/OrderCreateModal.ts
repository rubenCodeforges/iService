import {Component} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Item} from "../../item/Item";

@Component({
    selector: 'order-create-modal',
    template: require('./orderCreateModal.html')
})
export class OrderCreateModal {
    public items: Item[] = [];
    public newItem: Item = new Item();

    constructor(private activeModal: NgbActiveModal) {
    }

    public onSubmit() {
    }

    public onClose() {
        this.activeModal.dismiss();
    }

    public addItem() {
        if (!this.newItem.title) {
            return;
        }
        this.items.push(this.newItem);
        this.newItem = new Item();
    }
}