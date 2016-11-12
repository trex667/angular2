import {Routes, RouterModule} from "@angular/router";
import {FlightSearchComponent} from "./flight-search/flight-search.component";
import {FlightEditComponent} from "./flight-edit/flight-edit.component";
import {PassagierSearchComponent} from "./passagier-search/passagier-search.component";

let FLIGHT_BOOKING_ROUTES: Routes = [
    {
        path: 'flight-search',
        component: FlightSearchComponent
    },
    {
        path: 'passenger-search',
        component: PassagierSearchComponent
    },
    {
        path: 'flight-edit/:id',
        component: FlightEditComponent
    }
];

export let FlightBookingRouterModule = RouterModule.forChild(FLIGHT_BOOKING_ROUTES);