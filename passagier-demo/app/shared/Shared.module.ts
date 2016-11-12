import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {PassengerStatusPipe} from "./pipes/PassengerStatus.pipe";
import {NameValidatorDirective} from "./validation/name.validator";

@NgModule({
    imports: [
        FormsModule, // [(ngModel)]
        CommonModule // ngFor, ngIf, ngStyle, ngClass, date, json
    ],
    providers: [
        // Keine
    ],
    declarations: [
        PassengerStatusPipe,
        NameValidatorDirective
    ],
    exports:[
        PassengerStatusPipe,
        NameValidatorDirective
    ]
})
export class SharedModule {

}