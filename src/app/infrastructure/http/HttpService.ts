import {Response, RequestOptionsArgs, Http} from "@angular/http";
import {HttpExceptionHandler} from "./HttpExceptionHandler";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class HttpService {

    constructor(private http: Http) {
    }

    public get<T>(url: string, options?: RequestOptionsArgs): Observable<T> {
        return this.http.get(url)
            .map(HttpService.toJsonResponse)
            .catch(HttpExceptionHandler.handleError);
    }

    private static toJsonResponse(response: Response) {
        let body = response.json();
        return body || {};
    }

}