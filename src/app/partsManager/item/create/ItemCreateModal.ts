import {Component, Input} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup} from "@angular/forms";
import {ItemModel} from "../services/ItemModel";
import {Item} from "../Item";
import {FormService} from "../../../infrastructure/form/FormService";
import {CurrencyService} from "../../../common/currency/CurrencyService";
import {AbstractFormComponent} from "../../../infrastructure/form/AbstractFormComponent";
import {Order} from "../../order/Order";

@Component({
    selector: 'order-create-modal',
    templateUrl: './itemCreateModal.html'
})
export class ItemCreateModal extends AbstractFormComponent {
    @Input() order?: Order;
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

        this.itemModel.createItem(this.item).subscribe((item: Item) => {
            this.onClose(item);
        });
    }

    public onClose(item: Item) {
        this.activeModal.close(item);
    }


    public hasError(formControl: FormControl, errorType: string = "required"): boolean {
        return FormService.hasError(formControl, errorType);
    }
}