import {Component} from "@angular/core";
import {CurrencyService} from "../../../common/currency/CurrencyService";
import {Item} from "../Item";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: "item-detail",
    template: require('./itemDetail.html')
})
export class ItemDetailComponent {
    public item: Item;

    constructor(private route: ActivatedRoute) {
        this.item = route.snapshot.data['item'];
    }

    public availableCurrencies: string[] = CurrencyService.getCurrencyAsArray();
}