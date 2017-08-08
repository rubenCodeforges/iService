import {Currency} from "../../common/currency/Currency";
import {Image} from "../../common/media/Image";
import {Order} from "../order/Order";

export class Item {
    public id: string;
    public title: string;
    public description: string;
    public images: Image[] = [];
    public orders: Order[] = [];
    public price: string;
    public currency: Currency;

    constructor() {
        this.title = "";
        this.description = "";
        this.currency = Currency.UAH;
    }

}