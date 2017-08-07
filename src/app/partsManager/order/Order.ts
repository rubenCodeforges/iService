import {Item} from "../item/Item";

export class Order {
    public id: string;
    public title: string;
    public state: OrderState;
    public description: string;
    public createdAt: Date;
    public items: Item[];

    constructor() {
        this.items = [];
    }
}

export enum OrderState{
    NEW = <any> "NEW",
    PAYED = <any> "PAYED",
    PROCESSED = <any> "PROCESSED",
    SEND = <any> "SEND",
    CLOSED = <any> "CLOSED"
}