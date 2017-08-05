import {Component} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import {ToastyConfig} from "ng2-toasty";

@Component({
    selector: 'app-root',
    templateUrl: 'app.html',
    styleUrls: ['./app.less']
})
export class AppComponent {
    constructor(translate: TranslateService,
                toastyConfig: ToastyConfig) {
        this.setConfiguration(toastyConfig, translate);
    };

    private setConfiguration(toastyConfig: ToastyConfig, translate: TranslateService) {
        toastyConfig.theme = "bootstrap";
        if (translate.getBrowserLang() == 'rus') {
            translate.setDefaultLang('rus');
        } else {
            translate.setDefaultLang('eng');
        }
    }
}
