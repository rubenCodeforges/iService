import {ExtendedRoutes} from "../infrastructure/routes/ExtendedRoutes";
import {ItemOverviewComponent} from "./item/overview/ItemOverviewComponent";
import {ItemDetailComponent} from "./item/detail/ItemDetailComponent";
import {OrderOverviewComponent} from "./order/overview/OrderOverviewComponent";
import {OrderDetailComponent} from "./order/detail/OrderDetailComponent";

export const PartsManagerRoutes: ExtendedRoutes = {
    title: "Parts manager",
    routes: [
        {path: 'item', component: ItemOverviewComponent, linkName: "Items"},
        {path: 'item/create', component: ItemDetailComponent, linkName: "Create Item"},
        {path: 'item/:id', component: ItemDetailComponent},
        {path: 'order', component: OrderOverviewComponent, linkName: "Orders"},
        {path: 'order/create', component: OrderDetailComponent, linkName: "Create Order"},
        {path: 'order/:id', component: OrderDetailComponent},
    ],
    enabled: true
};
