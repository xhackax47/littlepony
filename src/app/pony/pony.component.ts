import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PonyService } from '../pony.service';
import { Pony } from '../pony';
import { Race } from '../race';

@Component({
  selector: 'app-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css']
})
export class PonyComponent implements OnInit {
  race: Race;
  pony: Pony;
  constructor(private route: ActivatedRoute, private service: PonyService) {
    this.race = new Race();
    this.pony = new Pony();
  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 0);
    this.service.getPony(id).subscribe(p => this.pony = p);
  }

}
