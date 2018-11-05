import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RaceService } from '../race.service';
import { Router } from '@angular/router';
import { Race } from '../race';
import { NgbDate, NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Pony } from '../pony';
import { PonyService } from '../pony.service';

@Component({
  selector: 'app-race-reactive-form',
  templateUrl: './race-reactive-form.component.html',
  styleUrls: ['./race-reactive-form.component.css']
})
export class RaceReactiveFormComponent implements OnInit {
  model: Race;
  srcPonies: Array<Pony>;
  tgtPonies: Array<Pony>;
  dateModel: NgbDateStruct;
  date: Date;
  raceForm = this.fb.group({
    location: ['', Validators.required,],
    date: [new NgbDate(2018, 11, 5), Validators.required],
    ponies: [[]],
  });
  constructor(private fb: FormBuilder, private service: RaceService, private ponySvc: PonyService, private router: Router, private Calendar: NgbCalendar) {
    this.tgtPonies = [];
    this.srcPonies = [];
    this.ponySvc.getAllPonies().subscribe((listPony) => this.srcPonies = listPony);
  }

  ngOnInit() { }

  onSubmit() {
    const r: Race = this.raceForm.value;
    r.ponies = this.tgtPonies;
    this.service.addRace(r);
    //this.router.navigate(['/Races'])
  }

}
