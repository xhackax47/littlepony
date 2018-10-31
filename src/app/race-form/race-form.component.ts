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
  constructor(private service: RaceService, private router: Router, private psvc: PonyService) {
    this.model = new Race();
    this.model.ponies=[]; 
    psvc.getAllPonies().subscribe((listPony) => this.ponies = listPony)
  }

  ngOnInit() {
  }

  onSubmit() {
    this.model.ponies.forEach((pony: Pony)=> this.model.ponies.push(pony));
    this.service.addRace(this.model);
    this.router.navigate(['/Races'])
  }

}
