import {Injectable} from "@angular/core";
import {ItemResource} from "./ItemResource";
import {Item} from "../Item";
import {Observable} from "rxjs";

@Injectable()
export class ItemModel {
    constructor(private itemResource: ItemResource) {
    }

    getAllItems(): Observable<Item[]> {
        return this.itemResource.findAll();
    }

    createItem(item: Item): Observable<Item> {
        return this.itemResource.create(item);
    }

    deleteItem(itemId: string): Observable<void> {
        return this.itemResource.delete(itemId);
    }
}