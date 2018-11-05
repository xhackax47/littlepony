import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent implements OnInit{

  links: MenuItem[];

  ngOnInit() {
    this.links = [
      { label: 'Accueil', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/'] },
      { label: 'Courses', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/Races'] },
      { label: 'Ajouter Course (Form)', icon: 'fa fa-fw fa-calendar', routerLink: ['/Race']},
      { label: 'Ajouter Course (ReactiveForm)', icon: 'fa fa-fw fa-calendar', routerLink: ['/RaceR']},
      { label: 'Liste Poneys', icon: 'fa fa-fw fa-book', routerLink: ['/Ponies'] },
      { label: 'Ajouter Poney (Form)', icon: 'fa fa-fw fa-support', routerLink: ['/Pony'] },
      { label: 'Ajouter Poney (ReactiveForm)', icon: 'fa fa-fw fa-support', routerLink: ['/PonyR'] }
    ];
  }
}
