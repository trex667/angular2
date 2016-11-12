import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
    name: "passengerStatus",
    pure: true
})
export class PassengerStatusPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        let long, short;
        switch (value) {
            case "A":
                short = "SEN";
                long = "Senator";
                break;
            case "B":
                short = "FTL";
                long = "Frequent Traveler";
                break;
            default:
                short = "-";
                long = "Passenger";
        }
        if(args != undefined && args[0] == "short") return short;
        return long;
    }

}