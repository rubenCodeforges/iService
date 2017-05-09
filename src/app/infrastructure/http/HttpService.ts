import {Http, RequestOptionsArgs, Response} from "@angular/http";
import {HttpExceptionHandler} from "./HttpExceptionHandler";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class HttpService {

    constructor(private http: Http) {
    }

    public get<T>(url: string, options?: RequestOptionsArgs): Observable<T> {
        return this.http.get(url, options)
            .map(HttpService.toJsonResponse)
            .catch(HttpExceptionHandler.handleError);
    }


    public post(url: string, requestBody: any, options?: RequestOptionsArgs): Observable<any> {
        return this.http.post(url, requestBody, options)
            .map(HttpService.toJsonResponse)
            .catch(HttpExceptionHandler.handleError)
    }

    public put(url: string, requestBody: any, options?: RequestOptionsArgs): Observable<any> {
        return this.http.put(url, requestBody, options)
            .map(HttpService.toJsonResponse)
            .catch(HttpExceptionHandler.handleError)
    }

    private static toJsonResponse(response: Response): JSON | number {
        try {
            return response.json();
        } catch (e) {
            return response.status;
        }
    }

}