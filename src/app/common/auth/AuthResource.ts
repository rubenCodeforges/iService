import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpService} from "../http/HttpService";
import {Api} from "../../config/Api";
import {RequestOptions, URLSearchParams} from "@angular/http";

@Injectable()
export class AuthResource {
    private readonly URL: string = Api.URL + "/auth";

    constructor(private httpService: HttpService) {
    }

    public signInUser(idToken: string): Observable<any> {
        let requestOption = new RequestOptions();
        let searchParams = new URLSearchParams();
        searchParams.set('id_token', idToken);
        requestOption.params = searchParams;

        return this.httpService.get(this.URL + '/signIn', requestOption);
    }
}