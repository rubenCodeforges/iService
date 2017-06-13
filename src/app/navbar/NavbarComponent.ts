import {Component} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'navbar',
    templateUrl: './navbar.html'
})
export class NavbarComponent {
    constructor(private translate: TranslateService) {
    };

    public changeLanguage(languageCode: string) {
        this.translate.use(languageCode);
    }
}