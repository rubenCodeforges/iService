import {Component, Input} from "@angular/core";
import {Item} from "../Item";
import {Api} from "../../../config/Api";
import * as _ from "lodash";

@Component({
    selector: 'item-table',
    templateUrl: './itemTable.html'
})
export class ItemTableComponent {
    @Input() items: Item[];

    public openItemDetail(item: Item) {

    }

    public getItemFirstImageUrl(item: Item): string {
        console.log(item);
        return Api.HOST + _.first(item.images).imageUrl;
    }
}
