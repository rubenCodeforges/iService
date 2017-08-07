import {Item} from "../Item";
import {ItemModel} from "../services/ItemModel";
import {Component} from "@angular/core";
import * as _ from "lodash";

@Component({
    selector: 'item-overview',
    templateUrl: './itemOverview.html'
})
export class ItemOverviewComponent {
    public items: Item[] = [];

    constructor(private itemModel: ItemModel) {
        this.loadItems();
    }

    public onItemCreate() {
        this.loadItems();
    }

    private loadItems() {
        this.itemModel.getAllItems().subscribe((response) => {
            this.items = _.reverse(response);
        });
    }
}