import { Injectable } from '@angular/core';
import { Race } from './race';
import { RACES } from './races-mock';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  url: String = 'http://localhost:8094/api/races';
  tabRaces: Array<Race>;

  httpOptions = {
    headers: new HttpHeaders().set('Content-type','application/json')
  }

  constructor(private http: HttpClient, private router: Router) { 
    //this.tabRaces = [];
    //this.tabRaces = RACES;
    //this.http.get<Array<Race>>(this.url + '/', this.httpOptions).subscribe(p => this.tabRaces = p);
  }

  getAllRaces(): Observable<Array<Race>>{
    return this.http.get<Array<Race>>(this.url + '/', this.httpOptions);
    // return of(this.tabRaces);
  }

  addRace(race: Race): void{
    for(const p of race.ponies){}
    //this.tabRaces.push(race);
    this.http.post(this.url + '/', race, this.httpOptions).subscribe(() => this.router.navigate(['/Races']));
  }
}
