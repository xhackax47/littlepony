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
  votes: Array<number>;

  constructor(private service: RaceService) {
    this.votes = new Array<number>();
    this.tabRaces = [];
    this.service.getAllRaces().subscribe(r => {
      this.tabRaces = r;
      for (const i in this.tabRaces) {
        this.votes.push(0);
      }
    });
  }

  ngOnInit() {
    this.service.getAllRaces().subscribe(r => this.tabRaces = r);
  }

  onClickParent(race: Race) {
    const index = this.tabRaces.indexOf(race);
    this.votes[index] += 1;
    console.log("On a voté pour " + index);

  }

}
