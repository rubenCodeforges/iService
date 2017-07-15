import {Component, ViewEncapsulation} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'navbar',
    templateUrl: './navbar.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./navbar.less']
})
export class NavbarComponent {
    public selectedLanguage: string;

    constructor(private translate: TranslateService) {
        this.selectedLanguage = this.translate.defaultLang;
    }

    public changeLanguage(languageCode: string) {
        this.translate.use(languageCode);
        this.selectedLanguage = languageCode;
    }
}