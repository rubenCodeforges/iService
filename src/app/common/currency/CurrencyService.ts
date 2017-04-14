import {Injectable} from "@angular/core";
import {Currency} from "./Currency";

@Injectable()
export class CurrencyService {

    public getCallculatedPrice(price: number, currency: Currency): number {
        return price * this.getCurrencyRate(currency);
    }

    public static getCurrencyAsArray(): string[] {
        return Object.keys(Currency).map(k => Currency[k]);
    }

    private getCurrencyRate(currency: Currency): number {
        // TODO : Load some data from a online service
        return 1;
    }
}