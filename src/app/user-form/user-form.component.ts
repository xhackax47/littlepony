import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  model: User;
  add: Boolean;
  constructor(private service: UserService, private router: Router, private route: ActivatedRoute) {
    this.model = new User();
  }

  ngOnInit() {
    if(this.route.snapshot.paramMap.get('id') === null) {
      this.add = true;
    } else {
      this.add = false;
      const id = parseInt(this.route.snapshot.paramMap.get('id'), 0)
      this.service.getUserById(id).subscribe(p => this.model = p)
    }
  }

  onSubmit() {
    if(this.add){
      this.service.addUser(this.model);
      this.model = new User();
    } else{
      const u = this.model;
      this.service.updateUser(u.id, u);
    }
  }

}
