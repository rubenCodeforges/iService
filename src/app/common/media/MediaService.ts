import {Injectable} from "@angular/core";
import {ImageResource} from "./ImageResource";
import {Observable} from "rxjs";
import {Image} from "./Image";

@Injectable()
export class MediaService {
    constructor(private imageResource: ImageResource) {
    }

    uploadImage(file: FormData): Observable<Image> {
        return this.imageResource.createImage(file);
    }
}