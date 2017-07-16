import {Component, Input} from "@angular/core";
import {Item} from "../Item";
import {Api} from "../../../config/Api";
import * as _ from "lodash";
import {Router} from "@angular/router";

@Component({
    selector: 'item-table',
    templateUrl: './itemTable.html'
})
export class ItemTableComponent {
    @Input() items: Item[];

    constructor(private router: Router) {

    }

    public openItemDetail(item: Item) {
        this.router.navigateByUrl('items/' + item.id);
    }

    public getItemFirstImageUrl(item: Item): string {
        if (_.isEmpty(item.images)) {
            return;
        }
        return Api.HOST + _.first(item.images).imageUrl;
    }
}
