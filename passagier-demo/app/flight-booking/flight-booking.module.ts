import {NgModule} from "@angular/core";
import {FlightSearchComponent} from "./flight-search/flight-search.component";
import {FlightEditComponent} from "./flight-edit/flight-edit.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/Shared.module";
import {FlightBookingRouterModule} from "./flight-booking.routes";
import {PassagierSearchComponent} from "./passagier-search/passagier-search.component";
import {PassagierCardComponent} from "./passagier-card/passagier-card.component";
import {PassagierService} from "./passagier-search/services/PassagierService";

@NgModule({
    imports: [
        CommonModule, // ngFor
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        FlightBookingRouterModule
    ],
    declarations: [
        FlightSearchComponent,
        FlightEditComponent,
        PassagierSearchComponent,
        PassagierCardComponent
    ],
    providers: [
        PassagierService
    ],
    exports: [
    ]
})
export class FlightBookingModule {

}