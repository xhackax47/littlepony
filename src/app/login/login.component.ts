import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private service: UserService, private router: Router, private route: ActivatedRoute) {
    this.model = new User();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.service.getUserByName(this.model.login).subscribe(user => {
      if(this.model.password === user.password) {
      sessionStorage.setItem('user', this.model.login);
      this.identity = sessionStorage.getItem('user');
    } else {
      this.errorMessage = "Connexion impossible";
    }
  });

}
}