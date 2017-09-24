import {Injectable} from "@angular/core";
import {SessionUser} from "./SessionUser";
import {UserService} from "../user/UserService";
import {Observable} from "rxjs/Observable";
import {AuthResource} from "./AuthResource";

@Injectable()
export class AuthService {
    public static SESSION_USER_KEY: string = 'session_user';

    public static factory(userService: UserService, authResource: AuthResource) {
        return () => new AuthService(userService, authResource);
    }

    constructor(private userService: UserService,
                private authResource: AuthResource) {
        this.init();
    }

    public init() {
        if (this.hasUserInSession()) {
            this.userService.createUserFromSession(this.getSessionUser())
        } else {
            this.userService.createGuestUser();
        }
    }

    public authenticateUser(idTokenFragment: string): Observable<any> {
        return this.authResource.authenticateUser(idTokenFragment.replace('id_token=', ''));
    }

    private hasUserInSession(): boolean {
        return !!this.getSessionUser();
    }

    private getSessionUser(): SessionUser {
        return JSON.parse(sessionStorage.getItem(AuthService.SESSION_USER_KEY));
    }

}