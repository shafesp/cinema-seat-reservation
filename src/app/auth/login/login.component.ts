import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', Validators.required)
  })
  constructor(private usersService: UsersService, public router: Router) { }

  
}
