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
}