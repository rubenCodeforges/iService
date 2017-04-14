import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Order} from "../Order";
import {Observable} from "rxjs";
import {OrderModel} from "./OrderModel";


@Injectable()
export class OrderResolver implements Resolve<Order> {

    constructor(private orderModel: OrderModel, private router: Router) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order>|Promise<Order>|Order {
        let id: string = route.params['id'];

        return this.orderModel.getOrder(id).catch((err, caught) => {
            if (!err.code) {
                this.router.navigate(['error/500']);
            }
            this.router.navigate(['error/' + err.code]);
            return Observable.throw(err);
        })
    }
}