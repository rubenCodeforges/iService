import {Component} from "@angular/core";
import {NgbActiveModal, NgbTypeaheadSelectItemEvent} from "@ng-bootstrap/ng-bootstrap";
import {Item} from "../../item/Item";
import * as _ from "lodash";
import {Order} from "../Order";
import {FormControl, FormGroup} from "@angular/forms";
import {OrderModel} from "../services/OrderModel";
import {ItemModel} from "../../item/services/ItemModel";
import {FormService} from "../../../infrastructure/form/FormService";
import {Observable} from "rxjs";

@Component({
    selector: 'order-create-modal',
    template: require('./orderCreateModal.html')
})
export class OrderCreateModal {
    public order: Order = new Order();
    public selectedItem: Item = new Item();
    public itemTitle: string;

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

    public searchForItemTitle = (text$: Observable<string>): Observable<Item[]> => {
        return text$
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap((term) => {
                console.log(term);
                return this.itemModel.getAllItems(term);
            })
    };

    public getItemTitle(item: Item): string {
        return item.title;
    }

    public onItemSelect($event: NgbTypeaheadSelectItemEvent) {
        this.selectedItem = $event.item;
    }

    public addItem() {
        console.log(this.selectedItem);
        if (!this.itemTitle) {
            return;
        }
        if (!this.selectedItem.id) {
            this.selectedItem.title = this.itemTitle;
            this.itemModel.createItem(this.selectedItem).subscribe(item => this.addItemToList(item));
        } else {
            this.addItemToList(this.selectedItem);
        }
    }

    private addItemToList(item: Item) {
        this.order.items.push(item);
        this.selectedItem = new Item();
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