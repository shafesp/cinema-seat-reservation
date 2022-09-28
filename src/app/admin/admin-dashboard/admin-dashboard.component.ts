import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent{

  constructor(private route: Router) { }

  

  logout(){
    sessionStorage.clear()
    this.route.navigate(['admin'])
  }

}
