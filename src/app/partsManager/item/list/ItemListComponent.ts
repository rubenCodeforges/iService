import {Component, Input} from "@angular/core";
import {Item} from "../Item";
import * as _ from "lodash";
import {Api} from "../../../config/Api";

@Component({
    selector: "item-list",
    templateUrl: "./ItemList.html"
})
export class ItemListComponent {
    @Input() items: Item[];

    constructor() {
    }

    public getItemFirstImageUrl(item: Item): string {
        return Api.HOST + _.first(item.images).imageUrl;
    }
}