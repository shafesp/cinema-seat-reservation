import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  form = new FormGroup({
    adminid : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })
  constructor() { }
}
