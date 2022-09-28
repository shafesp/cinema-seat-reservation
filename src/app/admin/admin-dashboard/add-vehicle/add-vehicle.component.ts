import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent{

  
  form = new FormGroup({
    vehicle_type : new FormControl('', Validators.required),
    cost : new FormControl('', Validators.required)
  })
  constructor() { }

}
