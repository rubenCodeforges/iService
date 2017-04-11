import {Item} from "../Item";
import {ItemModel} from "../services/ItemModel";
import {Component} from "@angular/core";
import * as _ from "lodash";

@Component({
    selector: 'item-overview',
    template: require('./itemOverview.html')
})
export class ItemOverviewComponent {
    public items: Item[] = [];

    constructor(private itemModel: ItemModel) {
        this.itemModel.getAllItems().subscribe((response) => {
            this.items = _.reverse(response);
        })
    }

    public openModal() {

    }
}