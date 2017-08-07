import {Roles} from "./Roles";

export class User {
    private id: string;
    private email: string;
    private role: Roles;
    private token: string;


    constructor(email: string, role: Roles, token: string) {
        this.email = email;
        this.role = role;
        this.token = token;
    }

    public getRole(): Roles {
        return this.role;
    }

    public setRole(role: Roles) {
        this.role = role;
    }

    public setToken(token: string) {
        this.token = token;
    }

    public getToken(): string {
        return this.token;
    }

}