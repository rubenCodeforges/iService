import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {OrderOverviewComponent} from "./order/overview/OrderOverviewComponent";
import {OrderDetailComponent} from "./order/detail/OrderDetailComponent";
import {ItemOverviewComponent} from "./item/overview/ItemOverviewComponent";
import {ItemDetailComponent} from "./item/detail/ItemDetailComponent";
import {OrderModel} from "./services/OrderModel";
import {OrderResource} from "./services/OrderResource";
import {ItemResource} from "./services/ItemResource";
import {ItemModel} from "./services/ItemModel";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        HttpModule,
        NgbModule
    ],
    declarations: [
        OrderOverviewComponent,
        OrderDetailComponent,
        ItemOverviewComponent,
        ItemDetailComponent,
    ],
    providers: [
        OrderModel,
        OrderResource,
        ItemResource,
        ItemModel,
    ]
})
export class PartsManagerModule {
}
