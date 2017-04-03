import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";

export class HttpExceptionHandler {

    public static readonly HTTP_NO_JSON_RESPONSE: string = "The http response is not of type JSON";

    public static handleError(response: Response): ErrorObservable {
        let errMsg: string = `${response.status} - ${response.statusText}`;
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}