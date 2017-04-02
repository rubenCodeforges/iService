import {ExtendedRoutes} from "../infrastructure/routes/ExtendedRoutes";
import {ItemOverviewComponent} from "./item/overview/ItemOverviewComponent";
import {ItemDetailComponent} from "./item/detail/ItemDetailComponent";
import {OrderOverviewComponent} from "./order/overview/OrderOverviewComponent";
import {OrderDetailComponent} from "./order/detail/OrderDetailComponent";

export const PartsManagerRoutes: ExtendedRoutes = {
    title: "PARTS_MANAGER.NAVIGATION.TITLE",
    routes: [
        {path: 'item', component: ItemOverviewComponent, linkName: "PARTS_MANAGER.NAVIGATION.ITEMS_OVERVIEW"},
        {path: 'item/:id', component: ItemDetailComponent},
        {path: 'order', component: OrderOverviewComponent, linkName: "PARTS_MANAGER.NAVIGATION.ORDERS_OVERVIEW"},
        {path: 'order/:id', component: OrderDetailComponent},
    ],
    enabled: true
};
