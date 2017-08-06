import {Component} from "@angular/core";
import {CurrencyService} from "../../../common/currency/CurrencyService";
import {Item} from "../Item";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemModel} from "../services/ItemModel";
import {AbstractFormComponent} from "../../../infrastructure/form/AbstractFormComponent";
import {FormGroup} from "@angular/forms";
import {FormService} from "../../../infrastructure/form/FormService";
import {MediaService} from "../../../common/media/MediaService";
import {Image} from "../../../common/media/Image";
import {ToastyService} from "ng2-toasty";

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
                private toastyService: ToastyService,
                private router: Router,
                private model: ItemModel) {
        super();
        this.item = route.snapshot.data['item'];
    }

    public onSubmit(form: FormGroup) {
        if (form.invalid) {
            FormService.markFormControlsTouched(form);
            return;
        }

        if (this.imageFile) {
            this.mediaService.uploadImage(this.imageFile).subscribe((image: Image) => {
                this.item.images[0] = image;
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

    public onDelete() {
        this.model.deleteItem(this.item.id).subscribe(() => {
            this.router.navigateByUrl('items').then(() => this.toastyService.success("Item deleted"));
        });
    }
}