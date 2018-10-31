import { Component, OnInit, Input } from '@angular/core';
import { Pony } from "./../pony";

@Component({
  selector: 'app-pony-details',
  templateUrl: './pony-details.component.html',
  styleUrls: ['./pony-details.component.css']
})
export class PonyDetailsComponent implements OnInit {

  @Input() pony: Pony;
  // @Input() pony2: Pony;
  // @Input() pony3: Pony;
  // @Input() pony4: Pony
  constructor() {
    // this.pony1 = new Pony('Jolly Jumper', 500, 15, 'White');
    // this.pony2 = new Pony('Jolly Black', 400, 10, 'Black');
    // this.pony3 = new Pony('Jolly Red', 800, 20, 'Red');
    // this.pony4 = new Pony('Jolly Orange', 700, 5, 'Orange');
   }

  ngOnInit() {
  }

}
