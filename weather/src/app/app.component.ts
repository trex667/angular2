import { Component } from '@angular/core';
import {Http, URLSearchParams, Headers } from '@angular/http';
import {Forecast} from './entities/Forecast';
import {WeatherService} from './weather.service';
import './rxjs-operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    public city: string = "Trier";
    public forecastList: Array<any> = [];

    errorMessage: string;

    constructor(private weatherService: WeatherService) {
    }


    public search(): void {
     this.weatherService.getForecast()
                     .subscribe(
                       data => this.forecastList = data,
                       error =>  this.errorMessage = <any>error);




            // .map(function(resp) { return resp.json() })

    }
}
