import {ExtendedRoutes} from "../common/routes/ExtendedRoutes";
import {ItemOverviewComponent} from "./item/overview/ItemOverviewComponent";
import {ItemDetailComponent} from "./item/detail/ItemDetailComponent";
import {OrderOverviewComponent} from "./order/overview/OrderOverviewComponent";
import {OrderDetailComponent} from "./order/detail/OrderDetailComponent";
import {OrderResolver} from "./order/services/OrderResolver";
import {ItemModel} from "./item/services/ItemModel";
import {Roles} from "../common/user/Roles";
import {RouteGuard} from "../common/security/RouteGuard";

export const PartsManagerRoutes: ExtendedRoutes = {
    title: "PARTS_MANAGER.NAVIGATION.TITLE",
    routes: [
        {
            path: 'items',
            component: ItemOverviewComponent,
            linkName: "PARTS_MANAGER.NAVIGATION.ITEMS_OVERVIEW",
            roleRequired: Roles.ADMIN,
            canActivate: [
                RouteGuard
            ]
        },
        {
            path: 'items/:id',
            component: ItemDetailComponent,
            resolve: {item: ItemModel}
        },
        {
            path: 'orders',
            component: OrderOverviewComponent,
            linkName: "PARTS_MANAGER.NAVIGATION.ORDERS_OVERVIEW"
        },
        {
            path: 'orders/:id',
            component: OrderDetailComponent,
            resolve: {order: OrderResolver}
        },
    ],
    enabled: true,
};
