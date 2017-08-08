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
import {ItemListComponent} from "./item/list/ItemListComponent";
import {OrderResolver} from "./order/services/OrderResolver";
import {ItemTableComponent} from "./item/table/ItemTableComponent";
import {OrderTableComponent} from "./order/table/OrderTableComponent";
import {StateEditButtonsComponent} from "./order/state-edit-buttons/StateEditButtonsComponent";
import {AppCommonModule} from "../common/AppCommonModule";

@NgModule({
    imports: [
        RouterModule.forChild(PartsManagerRoutes.routes),
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpModule,
        TranslateModule.forChild(),
        AppCommonModule,
        NgbModule
    ],
    declarations: [
        OrderOverviewComponent,
        OrderDetailComponent,
        OrderCreateModal,
        OrderTableComponent,
        StateEditButtonsComponent,
        ItemCreateModal,
        ItemOverviewComponent,
        ItemDetailComponent,
        ItemListComponent,
        ItemTableComponent
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
