import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpService} from "../http/HttpService";
import {Api} from "../../config/Api";

@Injectable()
export class AuthResource {
    private readonly URL: string = Api.URL + "/auth";

    constructor(private httpService: HttpService) {
    }

    public authenticateUser(idToken: string): Observable<any> {
        return this.httpService.post(this.URL, {idToken: idToken});
    }
}