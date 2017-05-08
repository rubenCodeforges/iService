import {Injectable} from "@angular/core";
import {ItemResource} from "./ItemResource";
import {Item} from "../Item";
import {Observable} from "rxjs";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";

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