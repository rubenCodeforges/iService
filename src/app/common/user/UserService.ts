import {Injectable} from "@angular/core";
import {User} from "./User";
import {SessionUser} from "../auth/SessionUser";
import {Roles} from "./Roles";

@Injectable()
export class UserService {
    private currentUser: User;

    public createGuestUser() {
        this.currentUser = new User(
            null,
            Roles.GUEST,
            null
        )
    }

    public createUserFromSession(sessionUser: SessionUser) {
        this.currentUser = new User(
            null,
            sessionUser.role,
            sessionUser.authToken
        )
    }

    public getCurrentUser(): User {
        return this.currentUser;
    }
}