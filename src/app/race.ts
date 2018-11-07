import { Pony } from "./pony";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

export class Race {
    id: number;
    location: string;
    date: Date;
    ponies: Array<Pony>;

    constructor(location?: string, date?: NgbDateStruct) {
        this.id = 0;
        this.ponies = [];
        this.location = location === undefined ? '' : location;
        this.date = new Date();
    }
}
