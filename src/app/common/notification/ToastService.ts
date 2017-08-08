import {Injectable} from "@angular/core";
import {ToastOptions, ToastyService} from "ng2-toasty";
import {TranslateService} from "@ngx-translate/core";

@Injectable()
export class ToastService {
    constructor(private toastyService: ToastyService,
                private translateServie: TranslateService) {
    }

    default(options: ToastOptions | string | number): void {
        if (typeof options == "string") {
            this.translateServie.get(options).subscribe((message) => {
                this.toastyService.default(message);
            })
        }
    };

    info(options: ToastOptions | string | number): void {
        if (typeof options == "string") {
            this.translateServie.get(options).subscribe((message) => {
                this.toastyService.info(message);
            })
        }
    };

    success(options: ToastOptions | string | number): void {
        if (typeof options == "string") {
            this.translateServie.get(options).subscribe((message) => {
                this.toastyService.success(message);
            })
        }
    };

    wait(options: ToastOptions | string | number): void {
        if (typeof options == "string") {
            this.translateServie.get(options).subscribe((message) => {
                this.toastyService.wait(message);
            })
        }
    };

    error(options: ToastOptions | string | number): void {
        if (typeof options == "string") {
            this.translateServie.get(options).subscribe((message) => {
                this.toastyService.error(message);
            })
        }
    };

    warning(options: ToastOptions | string | number): void {
        if (typeof options == "string") {
            this.translateServie.get(options).subscribe((message) => {
                this.toastyService.warning(message);
            })
        }
    };
}