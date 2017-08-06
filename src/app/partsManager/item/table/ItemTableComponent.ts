import {Component, Input} from "@angular/core";
import {Item} from "../Item";
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
}
