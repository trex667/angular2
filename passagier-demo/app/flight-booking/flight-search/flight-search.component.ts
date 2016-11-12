import { Component } from '@angular/core';
import {Flight} from "../../entities/flight";
import {Http, URLSearchParams, Headers } from '@angular/http';

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html'
})
export class FlightSearchComponent {

    public from: string = "Hamburg";
    public to: string = "Graz";
    public flights: Array<Flight> = [];
    public selectedFlight: Flight;

    constructor(private http: Http) {
    }

    public select(f: Flight): void {
        this.selectedFlight = f;
    }

    public search(): void {
        let url = "http://www.angular.at/api/flight";
        let headers = new Headers();
        headers.set('Accept', 'text/json');

        let search = new URLSearchParams();
        search.set('from', this.from);
        search.set('to', this.to);

        this
            .http
            .get(url, {headers, search})
            .map(resp => resp.json())
            .subscribe(
                (flights: Array<Flight>) => {
                    this.flights = flights;
                },
                (err) => {
                    console.error(err);
                }
            )



            // .map(function(resp) { return resp.json() })

    }
}