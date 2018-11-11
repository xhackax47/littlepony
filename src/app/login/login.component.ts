import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenStorage } from '../token.storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

//  model: User;
//  logged: boolean;
//  identity: string;
//  errorMessage: string;
    usernameOrEmail: string;
    password: string;

  constructor(private service: UserService, private router: Router, private token: TokenStorage) {}

  login(): void {
    this.service.authToken(this.usernameOrEmail, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        this.router.navigate(['/']);
      }
    );
  }

  ngOnInit() {
  }

//  onSubmit() {
//    this.service.getUserByName(this.model.login).subscribe(user => {
//      if(this.model.password === user.password) {
//      sessionStorage.setItem('user', this.model.login);
//      this.identity = sessionStorage.getItem('user');
//    } else {
//      this.errorMessage = "Connexion impossible";
//    }
//  });
//  this.service.authToken(this.model.login,this.model.password);
//  this.logged = true;
// }
}