import {Injectable} from "@angular/core";
import {CrudResource} from "../../../infrastructure/crud/CrudResource";
import {Api} from "../../../config/Api";
import {HttpService} from "../../../infrastructure/http/HttpService";
import {Observable} from "rxjs";
import {Order} from "../Order";

@Injectable()
export class OrderResource implements CrudResource {
    private readonly URL: string = Api.URL + "/orders";

    constructor(private httpService: HttpService) {

    }

    findAll(): Observable<Order[]> {
        return this.httpService.get<Order[]>(this.URL);
    }

    findById(orderId: string): Observable<Order> {
        return this.httpService.get<Order>(this.URL + "/" + orderId);
    }

    create(order: Order): Observable<void> {
        return this.httpService.post(this.URL, order);
    }

    update(order: Order): Observable<Order> {
        return this.httpService.put(this.URL, order);
    }

    delete() {
    }
}