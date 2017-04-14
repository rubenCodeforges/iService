import {Component} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup} from "@angular/forms";
import {ItemModel} from "../services/ItemModel";
import {Item} from "../Item";
import {FormService} from "../../../infrastructure/form/FormService";
import {CurrencyService} from "../../../common/currency/CurrencyService";

@Component({
    selector: 'order-create-modal',
    template: require('./itemCreateModal.html')
})
export class ItemCreateModal {
    public item: Item = new Item();
    public availableCurrencies: string[] = CurrencyService.getCurrencyAsArray();

    constructor(private activeModal: NgbActiveModal,
                private itemModel: ItemModel) {
    }

    public onSubmit(form: FormGroup) {
        if (form.invalid) {
            FormService.markFormControlsTouched(form);
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