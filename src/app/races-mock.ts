import { Race } from "./race";
import { Competitors } from "./competitors-mock";
import { Ponies } from "./ponies-mock";
import { NgbDate } from "@ng-bootstrap/ng-bootstrap";

export const RACES: Array<Race> = [
    {id:1, location: "Marseille", date: new NgbDate(2018,11,5), ponies: [Ponies[0], Ponies[3]]},
    {id:2, location: "Tokyo", date: new NgbDate(2018,11,5), ponies: [Ponies[1]]},
    {id:3, location: "Shanghai", date: new NgbDate(2018,11,5), ponies: [Ponies[2]]},
    {id:4, location: "Washington D.C.", date: new NgbDate(2018,11,5), ponies: [Ponies[3], Ponies[0]]},

];
