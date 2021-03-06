import {Component} from "@angular/core";
import {CurrencyService} from "../../../common/currency/CurrencyService";
import {Item} from "../Item";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemModel} from "../services/ItemModel";
import {AbstractFormComponent} from "../../../common/form/AbstractFormComponent";
import {FormGroup} from "@angular/forms";
import {FormService} from "../../../common/form/FormService";
import {MediaService} from "../../../common/media/MediaService";
import {Image} from "../../../common/media/Image";
import {ToastService} from "../../../common/notification/ToastService";

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
                private toastService: ToastService,
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
            this.model.updateItem(this.item).subscribe(() => {
                this.toastService.success("TOAST.UPDATE.ITEM");
            });
        }
    }

    public getImageThumbnailUrlList(): string[] {
        return this.model.getImageThumbnailUrlList(this.item);
    }

    public onFileSelect($event: Event) {
        let file = $event.target['files'][0];
        this.imageFile = new FormData();
        this.imageFile.append('file', file);
    }

    public onDelete() {
        this.model.deleteItem(this.item.id).subscribe(() => {
            this.router.navigateByUrl('items').then(() => this.toastService.success("TOAST.UPDATE.DELETE"));
        });
    }
}