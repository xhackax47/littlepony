import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RaceService } from '../race.service';
import { Race } from '../race';
import { Pony } from '../pony';
import { PonyService } from '../pony.service';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-race-form',
  templateUrl: './race-form.component.html',
  styleUrls: ['./race-form.component.css']
})
export class RaceFormComponent {
  model: Race;
  ponies: Array<Pony>;
  dateModel: NgbDateStruct;
  date: {year: number, month: number, day: number};
  // poniesSelected: Array<boolean>;
  constructor(private raceSvc: RaceService, private router: Router, private ponySvc: PonyService, private calendar: NgbCalendar) {
    this.dateModel = this.calendar.getToday();
    this.model = new Race();
    this.model.ponies = [];
    this.ponySvc.getAllPonies().subscribe((listPony) => this.ponies = listPony);
    // this.poniesSelected = new Array();
  }

  onSubmit() {
    // this.poniesSelected.forEach((e, i) => {
    //   if (e === true) {
    //    this.model.ponies.push(this.ponies[i]);
    //   }
    // }); 
    this.model.date = new Date(this.dateModel.year, this.dateModel.month -1, this.dateModel.day);
    // this.model.date = new Date();
    this.raceSvc.addRace(this.model);
    this.model = new Race();
  }

}
