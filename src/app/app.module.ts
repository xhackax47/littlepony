import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { PickListModule } from 'primeng/picklist';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { CardModule } from 'primeng/primeng';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PonyDetailsComponent } from './pony-details/pony-details.component';
import { PoniesComponent } from './ponies/ponies.component';
import { RaceDetailsComponent } from './race-details/race-details.component';
import { RacesComponent } from './races/races.component';
import { PonyFormComponent } from './pony-form/pony-form.component';
import { RaceFormComponent } from './race-form/race-form.component';
import { TabMenuComponent } from './tab-menu/tab-menu.component';
import { IntroComponent } from './intro/intro.component';
import { PonyReactiveFormComponent } from './pony-reactive-form/pony-reactive-form.component';
import { RaceReactiveFormComponent } from './race-reactive-form/race-reactive-form.component';
import { PonyComponent } from './pony/pony.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'Races', component: RacesComponent },
  { path: 'Ponies', component: PoniesComponent },
  { path: 'Pony', component: PonyFormComponent },
  { path: 'PonyUpdate/:id', component: PonyFormComponent },
  { path: 'PonyR', component: PonyReactiveFormComponent },
  { path: 'Race', component: RaceFormComponent },
  { path: 'RaceUpdate/:id', component: RaceFormComponent },
  { path: 'RaceR', component: RaceReactiveFormComponent },
  { path: 'PonySolo/:id', component: PonyComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    PonyDetailsComponent,
    PoniesComponent,
    RaceDetailsComponent,
    RacesComponent,
    PonyFormComponent,
    RaceFormComponent,
    TabMenuComponent,
    IntroComponent,
    PonyReactiveFormComponent,
    RaceReactiveFormComponent,
    PonyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    PickListModule,
    ButtonModule,
    TabMenuModule,
    ReactiveFormsModule,
    CardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
