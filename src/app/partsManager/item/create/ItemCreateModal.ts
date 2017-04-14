import {Component} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Order} from "../Order";
import {FormControl, FormGroup} from "@angular/forms";
import {OrderModel} from "../services/OrderModel";
import {ItemModel} from "../services/ItemModel";
import {Item} from "../Item";
import {FormService} from "../../../infrastructure/form/FormService";

@Component({
    selector: 'order-create-modal',
    template: require('./orderCreateModal.html')
})
export class ItemCreateModal {
    public item: Item = new Item();

    constructor(private activeModal: NgbActiveModal,
                private itemModel: ItemModel) {
    }

    public onSubmit(form: FormGroup) {
        if (!form.valid) {
            FormService.markFormControllsTouched(form);
            return;
        }
        this.itemModel.createItem(this.item).subscribe(() => {
            this.onClose();
        });
    }

    public onClose() {
        this.activeModal.close();
    }

    public hasError(formControl: FormControl, errorType: string = "required"): boolean {
        return FormService.hasError(formControl, errorType);
    }
}