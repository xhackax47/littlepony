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
      { label: 'Accueil', routerLink: ['/'] },
      { label: 'Creer Utilisateur (Form)', routerLink: ['/User'] },
      { label: 'Creer Utilisateur (ReactiveForm)', routerLink: ['/UserR'] },
      { label: 'Courses', routerLink: ['/Races'] },
      { label: 'Ajouter Course (Form)', routerLink: ['/Race']},
      { label: 'Ajouter Course (ReactiveForm)', routerLink: ['/RaceR']},
      { label: 'Poneys', routerLink: ['/Ponies'] },
      { label: 'Ajouter Poney (Form)', routerLink: ['/Pony'] },
      { label: 'Ajouter Poney (ReactiveForm)', routerLink: ['/PonyR'] }
    ];
  }
}
