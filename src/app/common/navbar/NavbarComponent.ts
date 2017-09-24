import {Component, ViewEncapsulation} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import {GoogleAuthService} from "ng-gapi";

@Component({
    selector: 'navbar',
    templateUrl: './navbar.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./navbar.less']
})
export class NavbarComponent {
    public selectedLanguage: string;

    constructor(private translate: TranslateService, private googleAuth: GoogleAuthService) {
        this.selectedLanguage = this.translate.defaultLang;

    }

    public login() {
        this.googleAuth.getAuth().subscribe((auth) => {
            auth.signIn().then((response) => {
                console.log(response)
            });
        })
    }

    public changeLanguage(languageCode: string) {
        this.translate.use(languageCode);
        this.selectedLanguage = languageCode;
    }
}