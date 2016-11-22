import { Component } from '@angular/core';
import {Http, URLSearchParams, Headers } from '@angular/http';
import {Forecast} from './entities/Forecast';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    public city: string = "Trier";
    public forecastList: Array<Forecast> = [];

    constructor(private http: Http) {
    }


    public search(): void {
        let url = "http://api.openweathermap.org/data/2.5/forecast?q=Trier,de&mode=json&units=metric&lang=de&APPID=a59c9a186c9eddca27a2f6f157d45275";

        this
            .http
            .get(url)
            .subscribe(
                (weatherList: Array<Forecast>) => {
                    this.forecastList = weatherList;
                },
                (err) => {
                    console.error(err);
                }
            )



            // .map(function(resp) { return resp.json() })

    }
}
