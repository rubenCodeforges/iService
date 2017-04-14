import {FormControl} from "@angular/forms";

export class FormService {
    public static hasError(formControl: FormControl, errorType: string = "required"): boolean {
        if (!formControl) {
            return;
        }
        return formControl.hasError(errorType) && formControl.touched;
    }

    //TODO
    public static formSubmit() {
    }
}