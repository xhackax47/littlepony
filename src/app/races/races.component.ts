import { Component, OnInit } from '@angular/core';
import { Race } from '../race';
import { RaceService } from '../race.service';
import { race } from 'rxjs';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  tabRaces: Array<Race>;
  
  constructor(private service: RaceService) {
    this.tabRaces = [];
  }

  ngOnInit() {
    this.service.getAllRaces().subscribe(r =>this.tabRaces = r);
  }

}
