import {Component, ViewEncapsulation} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: './login.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./login.less']
})
export class LoginComponent {
    constructor(private route: ActivatedRoute) {
        console.log(this.route.snapshot.fragment);
    }
}