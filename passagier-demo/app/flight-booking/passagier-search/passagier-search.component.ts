import {Component} from "@angular/core";
import {Passagier} from "../../entities/passagier";
import {PassagierService} from "./services/PassagierService";

@Component({
    selector: 'passagier-search',
    templateUrl: './passagier-search.component.html',
    styleUrls: ['./passagier-search.component.css']
})
export class PassagierSearchComponent {

    public name: string = "Muster";
    public passagiers: Array<Passagier> = [];
    public selectedPassagier: Passagier;

    constructor(private passagierService: PassagierService) {
    }

    public select(p: Passagier): void {
        this.selectedPassagier = p;
    }

    public search(): void {
        this.passagierService.find(this.name)
            .subscribe(
                (passagiers: Array<Passagier>) => {
                    this.passagiers = passagiers;
                },
                (err) => {
                    console.error(err);
                }
            )


        // .map(function(resp) { return resp.json() })

    }
}