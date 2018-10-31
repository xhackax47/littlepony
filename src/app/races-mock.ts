import { Race } from "./race";
import { Competitors } from "./competitors-mock";

export const RACES: Array<Race> = [
    {id:1, location: "Marseille", date: new Date(), ponies: [Competitors[0], Competitors[3]]},
    {id:2, location: "Tokyo", date: new Date(), ponies: [Competitors[1]]},
    {id:3, location: "Shanghai", date: new Date(), ponies: [Competitors[2]]},
    {id:4, location: "Washington D.C.", date: new Date(), ponies: [Competitors[3], Competitors[0]]},

];
