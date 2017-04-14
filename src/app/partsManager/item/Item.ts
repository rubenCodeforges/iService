import {Order} from "../order/Order";
export class Item {
    public id: string;
    public title: string;
    public description: string;
    public orders: Order[];
    public images: string[];
    public price: string;

    constructor() {
        this.title = "";
        this.description = "";
    }
}