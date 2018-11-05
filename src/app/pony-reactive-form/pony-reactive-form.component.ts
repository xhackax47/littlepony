import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Pony } from '../pony';
import { PonyService } from '../pony.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pony-reactive-form',
  templateUrl: './pony-reactive-form.component.html',
  styleUrls: ['./pony-reactive-form.component.css']
})
export class PonyReactiveFormComponent implements OnInit {
  ponyForm = this.fb.group({
    name: ['', Validators.required,],
    age: ['', Validators.required],
    color: ['', Validators.required],
    weight: ['', Validators.required],
  })
  constructor(private fb: FormBuilder, private service: PonyService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    const p: Pony = this.ponyForm.value;
    p.id = 0;
    this.service.addPony(p);
    this.router.navigate(['/Ponies'])
  }

}
