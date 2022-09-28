import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent {

  form = new FormGroup({
    location_name : new FormControl('', Validators.required),
    area : new FormControl('', Validators.required),
    cast : new FormControl('', Validators.required),
    bannerimage : new FormControl('', Validators.required)
  })
  
  constructor() { }
}
