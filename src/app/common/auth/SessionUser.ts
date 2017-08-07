import {Roles} from "../user/Roles";

export interface SessionUser {
    authToken: string;
    role: Roles;
}