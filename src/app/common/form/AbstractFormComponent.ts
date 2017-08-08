import {FormControl, FormGroup} from "@angular/forms";
import {FormService} from "./FormService";
export abstract class AbstractFormComponent {

    public abstract onSubmit(form: FormGroup);

    public hasError(formControl: FormControl, errorType: string = "required"): boolean {
        return FormService.hasError(formControl, errorType);
    }
}