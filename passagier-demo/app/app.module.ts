import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "./shared/Shared.module";
import {HomeComponent} from "./home/home.component";
import {FlightBookingModule} from "./flight-booking/flight-booking.module";
import {AppRouterModule} from "./app.routes";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        SharedModule,
        FlightBookingModule,
        AppRouterModule
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}