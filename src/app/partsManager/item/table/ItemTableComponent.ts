import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Item} from "../Item";
import {Router} from "@angular/router";
import {ItemCreateModal} from "../create/ItemCreateModal";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {Order} from "../../order/Order";

@Component({
    selector: 'item-table',
    templateUrl: './itemTable.html'
})
export class ItemTableComponent {
    @Input() items: Item[];
    @Input() order?: Order;
    @Output() onCreateItem: EventEmitter<Item> = new EventEmitter<Item>();

    constructor(private router: Router,
                private modalService: NgbModal) {
    }

    public openItemDetail(item: Item) {
        this.router.navigateByUrl('items/' + item.id);
    }

    public openModal() {
        let modalInstance: NgbModalRef = this.modalService.open(ItemCreateModal);
        if (this.order) {
            modalInstance.componentInstance.order = this.order;
        }
        modalInstance.result.then((newItem: Item) => {
            this.onCreateItem.emit(newItem);
        });
    }
}
