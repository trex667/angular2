import {Directive} from "@angular/core";
import {NG_VALIDATORS, Validator, AbstractControl} from "@angular/forms";
@Directive({
    selector: "input[nameValidator]",
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: NameValidatorDirective,
        multi: true
    }]
})
export class NameValidatorDirective implements Validator {
    validate(c: AbstractControl): any {
        let value: string = c.value;
        if (!value) return {};
        var ok = value.match(/^[a-zA-Z\-]*$/);
        if (ok) return {};
        return {"charsOnly": "hier muß ich irgendein objekt zurückgeben. Wichtig ist der key hier charsOnly, der wir in der html in hasError verwendet "};
    }

}