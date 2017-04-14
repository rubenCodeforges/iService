import {Item} from "../Item";
import {ItemModel} from "../services/ItemModel";
import {Component} from "@angular/core";
import * as _ from "lodash";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ItemCreateModal} from "../create/ItemCreateModal";

@Component({
    selector: 'item-overview',
    template: require('./itemOverview.html')
})
export class ItemOverviewComponent {
    public items: Item[] = [];

    constructor(private itemModel: ItemModel,
                private modalService: NgbModal) {
        this.loadItems();
    }

    public openModal() {
        this.modalService.open(ItemCreateModal)
            .result.then(() => this.loadItems());
    }

    private loadItems() {
        this.itemModel.getAllItems().subscribe((response) => {
            this.items = _.reverse(response);
        });
    }
}