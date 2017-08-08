import {Component} from "@angular/core";
import {Location} from "@angular/common";

@Component({
    selector: 'button-back',
    templateUrl: 'goBackButton.html'
})
export class GoBackButtonComponent {

    constructor(private location: Location) {
    }

    public goBack() {
        this.location.back();
    }
}