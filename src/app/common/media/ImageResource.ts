import {Injectable} from "@angular/core";
import {HttpService} from "../http/HttpService";
import {Observable} from "rxjs";
import {Image} from "./Image";
import {Api} from "../../config/Api";

@Injectable()
export class ImageResource {
    private readonly URL: string = Api.URL + "/images";

    constructor(private httpService: HttpService) {
    }

    createImage(image: FormData): Observable<Image> {
        return this.httpService.post(this.URL, image);
    }
}