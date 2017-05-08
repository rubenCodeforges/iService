import {Currency} from "../../common/currency/Currency";
import {Image} from "../../common/media/Image";

export class Item {
    public id: string;
    public title: string;
    public description: string;
    public images: Image[] = [];
    public price: string;
    public currency: Currency;

    constructor() {
        this.title = "";
        this.description = "";
        this.currency = Currency.UAH;
    }

}