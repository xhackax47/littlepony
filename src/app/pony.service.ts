import { Injectable } from '@angular/core';
import { Pony } from './pony';
import { Ponies } from './ponies-mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PonyService {
  tabPonies: Array<Pony>;
  constructor() {
    this.tabPonies = [];
    this.tabPonies = Ponies;
  }
  getAllPonies(): Observable<Array<Pony>> {
    return of(this.tabPonies);
  }
  addPony(pony: Pony): void{
    this.tabPonies.push(pony);
  }
}
