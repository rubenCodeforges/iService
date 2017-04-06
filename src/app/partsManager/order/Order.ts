import {Item} from "../item/Item";

export class Order {
    public id: string;
    public title: string;
    public status: OrderStatus;
    public items: Item[];

    constructor() {
        this.status = OrderStatus.NEW;
        this.items = [];
    }
}

export enum OrderStatus{
    NEW,
    PAYED,
    PROCESSED,
    SEND,
    CLOSED
}