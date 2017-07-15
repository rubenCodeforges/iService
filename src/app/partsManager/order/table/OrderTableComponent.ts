import {Component, Input} from "@angular/core";
import {Order} from "../Order";

@Component({
    selector: 'order-table',
    templateUrl: './orderTable.html'
})
export class OrderTableComponent {
    @Input() orders: Order[];

    public openDetails(order: Order) {

    }

}
