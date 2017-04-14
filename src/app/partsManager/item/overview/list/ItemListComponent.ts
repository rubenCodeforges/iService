import {Component, Input} from "@angular/core";
import {Item} from "../../Item";

@Component({
    selector: "item-list",
    template: require("./ItemList.html")
})
export class ItemListComponent {
    @Input() items: Item[];
}