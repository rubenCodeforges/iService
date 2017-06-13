import {Component} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup} from "@angular/forms";
import {ItemModel} from "../services/ItemModel";
import {Item} from "../Item";
import {FormService} from "../../../infrastructure/form/FormService";
import {CurrencyService} from "../../../common/currency/CurrencyService";
import {AbstractFormComponent} from "../../../infrastructure/form/AbstractFormComponent";

@Component({
    selector: 'order-create-modal',
    templateUrl: './itemCreateModal.html'
})
export class ItemCreateModal extends AbstractFormComponent {
    public item: Item = new Item();
    public availableCurrencies: string[] = CurrencyService.getCurrencyAsArray();

    constructor(private activeModal: NgbActiveModal,
                private itemModel: ItemModel) {
        super();
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