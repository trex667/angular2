import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Passagier} from "../../entities/passagier";

@Component({
    selector: "passagier-card",
    templateUrl: "./passagier-card.component.html"
})
export class PassagierCardComponent {
    @Input() item: Passagier;
    @Input() selectedItem: Passagier;
    @Output() selectedItemChange = new EventEmitter<Passagier>();

    select() {
        this.selectedItemChange.emit(this.item);
    }
}