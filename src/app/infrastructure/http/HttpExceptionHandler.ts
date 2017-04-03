import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";

export class HttpExceptionHandler {

    public static readonly HTTP_NO_JSON_RESPONSE: string = "The http response is not of type JSON";

    public static handleError(error: Response | any): ErrorObservable {
        let errMsg: string;

        if (error instanceof Response) {
            let body = error.json() || '';
            let err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}