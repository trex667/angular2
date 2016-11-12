import {Http, Headers, URLSearchParams} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Passagier} from "../../../entities/passagier";

@Injectable()
export class PassagierService {

    constructor(private http: Http) {
    }

    find(searchName: string): Observable<Passagier[]> {
        let url = "http://www.angular.at/api/Passagier";
        let headers = new Headers();
        headers.set('Accept', 'text/json');

        let search = new URLSearchParams();
        if(searchName != undefined) {
            search.set('name', searchName);
        }
        return this
            .http
            .get(url, {headers, search})
            .map(resp => resp.json());
    }
}