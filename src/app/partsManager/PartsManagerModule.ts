import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {OrderOverviewComponent} from "./order/overview/OrderOverviewComponent";
import {OrderDetailComponent} from "./order/detail/OrderDetailComponent";
import {ItemOverviewComponent} from "./item/overview/ItemOverviewComponent";
import {ItemDetailComponent} from "./item/detail/ItemDetailComponent";
import {OrderModel} from "./order/services/OrderModel";
import {OrderResource} from "./order/services/OrderResource";
import {ItemResource} from "./item/services/ItemResource";
import {ItemModel} from "./item/services/ItemModel";
import {RouterModule} from "@angular/router";
import {PartsManagerRoutes} from "./PartsManagerRoutes";
import {OrderCreateModal} from "./order/create/OrderCreateModal";
import {TranslateModule} from "@ngx-translate/core";
import {ItemCreateModal} from "./item/create/ItemCreateModal";
import {ItemListComponent} from "./item/overview/list/ItemListComponent";
import {OrderResolver} from "./order/services/OrderResolver";

@NgModule({
    imports: [
        RouterModule.forChild(PartsManagerRoutes.routes),
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpModule,
        TranslateModule.forChild(),
        NgbModule
    ],
    declarations: [
        OrderOverviewComponent,
        OrderDetailComponent,
        OrderCreateModal,
        ItemCreateModal,
        ItemOverviewComponent,
        ItemDetailComponent,
        ItemListComponent
    ],
    providers: [
        OrderModel,
        OrderResource,
        OrderResolver,
        ItemResource,
        ItemModel
    ],
    entryComponents: [
        OrderCreateModal,
        ItemCreateModal
    ]
})
export class PartsManagerModule {
}
