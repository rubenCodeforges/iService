"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var OrderOverviewComponent_1 = require("./order/overview/OrderOverviewComponent");
var OrderDetailComponent_1 = require("./order/detail/OrderDetailComponent");
var ItemOverviewComponent_1 = require("./item/overview/ItemOverviewComponent");
var ItemDetailComponent_1 = require("./item/detail/ItemDetailComponent");
var OrderModel_1 = require("./order/services/OrderModel");
var OrderResource_1 = require("./order/services/OrderResource");
var ItemResource_1 = require("./item/services/ItemResource");
var ItemModel_1 = require("./item/services/ItemModel");
var router_1 = require("@angular/router");
var PartsManagerRoutes_1 = require("./PartsManagerRoutes");
var OrderCreateModal_1 = require("./order/create/OrderCreateModal");
var core_2 = require("@ngx-translate/core");
var ItemCreateModal_1 = require("./item/create/ItemCreateModal");
var ItemListComponent_1 = require("./item/overview/list/ItemListComponent");
var OrderResolver_1 = require("./order/services/OrderResolver");
var PartsManagerModule = (function () {
    function PartsManagerModule() {
    }
    return PartsManagerModule;
}());
PartsManagerModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(PartsManagerRoutes_1.PartsManagerRoutes.routes),
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            common_1.CommonModule,
            http_1.HttpModule,
            core_2.TranslateModule.forChild(),
            ng_bootstrap_1.NgbModule
        ],
        declarations: [
            OrderOverviewComponent_1.OrderOverviewComponent,
            OrderDetailComponent_1.OrderDetailComponent,
            OrderCreateModal_1.OrderCreateModal,
            ItemCreateModal_1.ItemCreateModal,
            ItemOverviewComponent_1.ItemOverviewComponent,
            ItemDetailComponent_1.ItemDetailComponent,
            ItemListComponent_1.ItemListComponent
        ],
        providers: [
            OrderModel_1.OrderModel,
            OrderResource_1.OrderResource,
            OrderResolver_1.OrderResolver,
            ItemResource_1.ItemResource,
            ItemModel_1.ItemModel
        ],
        entryComponents: [
            OrderCreateModal_1.OrderCreateModal,
            ItemCreateModal_1.ItemCreateModal
        ]
    })
], PartsManagerModule);
exports.PartsManagerModule = PartsManagerModule;
