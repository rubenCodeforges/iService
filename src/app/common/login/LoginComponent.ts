import {Component, ViewEncapsulation} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../auth/AuthService";

@Component({
    templateUrl: './login.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./login.less']
})
export class LoginComponent {
    constructor(private route: ActivatedRoute,
                private authService: AuthService) {
        this.authService.authenticateUser(this.route.snapshot.fragment).subscribe();
    }
}