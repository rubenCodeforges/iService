import {Component} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-root',
    templateUrl: 'app.html',
    styleUrls: ['app.less']
})
export class AppComponent {
    constructor(translate: TranslateService) {
        translate.setDefaultLang('eng');
    };
}
