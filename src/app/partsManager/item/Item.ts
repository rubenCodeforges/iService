import {Order} from "../order/Order";
import {Currency} from "../../common/currency/Currency";

export class Item {
    public id: string;
    public title: string;
    public description: string;
    public orders: Order[];
    public image: string;
    public price: string;
    public currency: Currency;

    constructor() {
        this.title = "";
        this.description = "";
        this.currency = Currency.UAH;
    }

}