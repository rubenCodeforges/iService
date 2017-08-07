import {Injectable} from "@angular/core";
import {SessionUser} from "./SessionUser";
import {UserService} from "../user/UserService";

@Injectable()
export class AuthService {
    public static SESSION_USER_KEY: string = 'session_user';

    public static factory(userService: UserService) {
        return () => new AuthService(userService);
    }

    constructor(private userService: UserService) {
        this.init();
    }

    public init() {
        if (this.hasUserInSession()) {
            this.userService.createUserFromSession(this.getSessionUser())
        } else {
            this.userService.createGuestUser();
        }
    }

    private hasUserInSession(): boolean {
        return !!this.getSessionUser();
    }

    private getSessionUser(): SessionUser {
        return JSON.parse(sessionStorage.getItem(AuthService.SESSION_USER_KEY));
    }
}