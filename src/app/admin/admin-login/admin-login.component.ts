import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

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
  constructor(private route : Router, private adminService: AdminService) { }


  storeLogin(email){
    sessionStorage.setItem('admin',email);
  }
}
