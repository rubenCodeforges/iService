import {Injectable} from "@angular/core";
import {ItemResource} from "./ItemResource";
import {Item} from "../Item";
import {Observable} from "rxjs";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";

@Injectable()
export class ItemModel implements Resolve<Item> {
    constructor(private itemResource: ItemResource) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item>|Promise<Item>|Item {
        return this.getItemById(route.params['id']);
    }

    getItemById(id: string): Observable<Item> {
        return this.itemResource.findById(id);
    }

    getAllItems(term?: string): Observable<Item[]> {
        return this.itemResource.findAll(term);
    }

    createItem(item: Item): Observable<Item> {
        return this.itemResource.create(item);
    }

    updateItem(item: Item): Observable<void> {
        return this.itemResource.update(item);
    }

    deleteItem(itemId: string): Observable<void> {
        return this.itemResource.delete(itemId);
    }
}