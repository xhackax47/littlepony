import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Little Ponies';
  currentUser = new User('PonyUser','password');
  identity: string;

  constructor(){
    sessionStorage.setItem('user', this.currentUser.login);
    this.identity = sessionStorage.getItem('user');
  }
}
