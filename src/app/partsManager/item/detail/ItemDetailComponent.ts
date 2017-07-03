import {Component} from "@angular/core";
import {CurrencyService} from "../../../common/currency/CurrencyService";
import {Item} from "../Item";
import {ActivatedRoute} from "@angular/router";
import {ItemModel} from "../services/ItemModel";
import {AbstractFormComponent} from "../../../infrastructure/form/AbstractFormComponent";
import {FormGroup} from "@angular/forms";
import {FormService} from "../../../infrastructure/form/FormService";
import {MediaService} from "../../../common/media/MediaService";
import {Image} from "../../../common/media/Image";
import * as _ from "lodash";

@Component({
    selector: "item-detail",
    templateUrl: './itemDetail.html'
})
export class ItemDetailComponent extends AbstractFormComponent {
    public item: Item;
    public imageFile: FormData;
    public availableCurrencies: string[] = CurrencyService.getCurrencyAsArray();

    constructor(private route: ActivatedRoute,
                private mediaService: MediaService,
                private model: ItemModel) {
        super();
        this.item = route.snapshot.data['item'];
    }

    public onSubmit(form: FormGroup) {
        if (form.invalid) {
            FormService.markFormControlsTouched(form);
            return;
        }

        if (this.imageFile && _.isEmpty(this.item.images)) {
            this.mediaService.uploadImage(this.imageFile).subscribe((image: Image) => {
                this.item.images.push(image);
                this.model.updateItem(this.item).subscribe();
            })
        } else {
            this.model.updateItem(this.item).subscribe();
        }
    }

    public getImageUrlList(): string[] {
        return this.model.getImageUrlList(this.item);
    }

    public onFileSelect($event: Event) {
        let file = $event.target['files'][0];
        this.imageFile = new FormData();
        this.imageFile.append('file', file);
    }
}