import {Component} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'toolbar',
    template: require('./toolBar.html')
})
export class ToolBarComponent {
    constructor(private translate: TranslateService) {
    };

    public changeLanguage(languageCode: string) {
        this.translate.use(languageCode);
    }
}