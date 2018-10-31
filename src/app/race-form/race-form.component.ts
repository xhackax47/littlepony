import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RaceService } from '../race.service';
import { Race } from '../race';
import { Pony } from '../pony';
import { PonyService } from '../pony.service';

@Component({
  selector: 'app-race-form',
  templateUrl: './race-form.component.html',
  styleUrls: ['./race-form.component.css']
})
export class RaceFormComponent implements OnInit {
  model: Race;
  ponies: Array<Pony>;
  poniesSelected: Array<boolean>;
  constructor(private service: RaceService, private router: Router, private psvc: PonyService) {
    this.model = new Race();
    this.model.ponies = [];
    psvc.getAllPonies().subscribe((listPony) => this.ponies = listPony);
    this.poniesSelected = new Array();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.poniesSelected.forEach((e, i) => {
      if (e === true) {
        this.model.ponies.push(this.ponies[i]);
      }
    });
    this.service.addRace(this.model);
    this.router.navigate(['/Races']);
  }

}
