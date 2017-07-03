import {Component, Input} from "@angular/core";
import {Item} from "../../Item";

@Component({
    selector: "item-list",
    templateUrl: "./ItemList.html"
})
export class ItemListComponent {
    @Input() items: Item[];

    constructor() {
        console.log(this.items);
    }
}