import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {CrudResource} from "../../../infrastructure/crud/CrudResource";
import {Api} from "../../../config/Api";
import {HttpService} from "../../../infrastructure/http/HttpService";
import {Item} from "../Item";

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