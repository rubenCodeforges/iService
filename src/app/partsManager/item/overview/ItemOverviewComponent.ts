import {Item} from "../Item";
import {ItemModel} from "../services/ItemModel";
import {Component} from "@angular/core";

@Component({
    selector: 'item-overview',
    template: require('./itemOverview.html')
})
export class ItemOverviewComponent {
    public items: Item[] = [];

    constructor(private itemModel: ItemModel) {
        this.itemModel.getAllItems().subscribe((response) => {
            this.items = response;
        })
    }
}