import { Injectable } from '@angular/core';
import { Race } from './race';
import { RACES } from './races-mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  tabRaces: Array<Race>;
  constructor() { 
    this.tabRaces = [];
    this.tabRaces = RACES;
  }

  getAllRaces(): Observable<Array<Race>>{
    return of(this.tabRaces);
  }

  addRace(race: Race): void{
    this.tabRaces.push(race);
  }
}
