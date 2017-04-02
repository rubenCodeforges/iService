import {Component} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'order-create-modal',
    template: require('./orderCreateModal.html')
})
export class OrderCreateModal {
    constructor(private activeModal: NgbActiveModal) {
    }

    public onSubmit() {
    }

    public onClose() {
        this.activeModal.dismiss();
    }
}