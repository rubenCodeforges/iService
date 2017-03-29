import {Injectable} from "@angular/core";
import {Api} from "../../config/Api";
import {CrudResource} from "../../infrastructure/crud/CrudResource";
import {Item} from "../item/Item";
import {HttpService} from "../../infrastructure/http/HttpService";
import {Observable} from "rxjs";

@Injectable()
export class ItemResource implements CrudResource {
    private readonly URL: string = Api.URL + "/items";

    constructor(private httpService: HttpService) {

    }

    findAll(): Observable<Item[]> {
        return this.httpService.get<Item[]>(this.URL);
    }

    findById(itemId: string): Observable<Item> {
        return this.httpService.get<Item>(this.URL + "/" + itemId);
    }

    create() {
    }

    update() {
    }

    delete() {
    }
}