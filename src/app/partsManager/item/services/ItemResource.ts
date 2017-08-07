import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {CrudResource} from "../../../common/crud/CrudResource";
import {Api} from "../../../config/Api";
import {HttpService} from "../../../common/http/HttpService";
import {Item} from "../Item";
import {RequestOptions, URLSearchParams} from "@angular/http";

@Injectable()
export class ItemResource implements CrudResource {
    private readonly URL: string = Api.URL + "/items";

    constructor(private httpService: HttpService) {

    }

    findAll(term?: string): Observable<Item[]> {
        let options: RequestOptions = new RequestOptions();


        if (term) {
            let params: URLSearchParams = new URLSearchParams();
            options.params = params;

            params.set('search', term);
        }

        return this.httpService.get(this.URL, options);
    }

    findById(itemId: string): Observable<Item> {
        return this.httpService.get(this.URL + "/" + itemId);
    }

    create(item: Item): Observable<Item> {
        return this.httpService.post(this.URL, item);
    }

    update(item: Item): Observable<void> {
        return this.httpService.put(this.URL, item);
    }

    delete(itemId: string): Observable<any> {
        return this.httpService.get(`${this.URL}/${itemId}/delete`);
    }
}