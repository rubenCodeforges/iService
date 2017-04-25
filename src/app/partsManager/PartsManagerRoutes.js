"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ItemOverviewComponent_1 = require("./item/overview/ItemOverviewComponent");
var ItemDetailComponent_1 = require("./item/detail/ItemDetailComponent");
var OrderOverviewComponent_1 = require("./order/overview/OrderOverviewComponent");
var OrderDetailComponent_1 = require("./order/detail/OrderDetailComponent");
var OrderResolver_1 = require("./order/services/OrderResolver");
exports.PartsManagerRoutes = {
    title: "PARTS_MANAGER.NAVIGATION.TITLE",
    routes: [
        { path: 'items', component: ItemOverviewComponent_1.ItemOverviewComponent, linkName: "PARTS_MANAGER.NAVIGATION.ITEMS_OVERVIEW" },
        { path: 'items/:id', component: ItemDetailComponent_1.ItemDetailComponent },
        { path: 'orders', component: OrderOverviewComponent_1.OrderOverviewComponent, linkName: "PARTS_MANAGER.NAVIGATION.ORDERS_OVERVIEW" },
        { path: 'orders/:id', component: OrderDetailComponent_1.OrderDetailComponent, resolve: { order: OrderResolver_1.OrderResolver } },
    ],
    enabled: true
};
