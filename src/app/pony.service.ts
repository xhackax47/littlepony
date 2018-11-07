import { Injectable, OnInit } from '@angular/core';
import { Pony } from './pony';
import { Ponies } from './ponies-mock';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PonyService {
  url: String = 'http://localhost:8094/api/ponies';
  tabPonies: Array<Pony>;

  httpOptions = {
    headers: new HttpHeaders().set('Content-type','application/json')
  }

  constructor(private http: HttpClient, private router: Router) {
    //this.tabPonies = [];
    //this.tabPonies = Ponies;
    //this.http.get<Array<Pony>>(this.url + '/', this.httpOptions).subscribe(p => this.tabPonies = p);
  }

  getAllPonies(): Observable<Array<Pony>> {
    //this.tabPonies = [];
    //this.http.get<Array<Pony>>(this.url + '/', this.httpOptions).subscribe(p => this.tabPonies = p);
    return this.http.get<Array<Pony>>(this.url + '/', this.httpOptions);
    //return of(this.tabPonies);
  }

  getPony(id: number): Observable<Pony> {
    return this.http.get<Pony>(this.url + '/' + id, this.httpOptions);
  }

  addPony(pony: Pony): void{
    //this.tabPonies.push(pony);
    this.http.post(this.url + '/', pony, this.httpOptions).subscribe(() => this.router.navigate(['/Ponies']));
  }

  updatePony(id: number ,pony: Pony): void{
    this.http.put(this.url + '/' + id, pony, this.httpOptions).subscribe(() => this.router.navigate(['/Ponies']));
  }

  deletePony(id: number): void{
    this.http.delete(this.url + '/' + id, this.httpOptions).subscribe(() => this.router.navigate(['/Ponies']));
  }
}
