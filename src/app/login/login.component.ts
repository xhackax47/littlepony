import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenStorage } from '../token.storage';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: User;
  logged: boolean;
  identity: string;
  errorMessage: string;

  constructor(private service: UserService, private router: Router, private token: TokenStorage) {
    this.model = new User();
  }

  ngOnInit() {
  }
  
  logout() {
    this.token.signOut();
  }

  onSubmit() {
    this.service.authToken(this.model.usernameOrEmail, this.model.password).subscribe(
    data => {
    this.token.saveToken(data.accessToken);
    this.router.navigate(['/']);
    }
    );
  this.identity = this.model.usernameOrEmail;
  this.logged = true;
 }
}
