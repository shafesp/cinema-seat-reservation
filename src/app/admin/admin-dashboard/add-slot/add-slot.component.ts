import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-slot',
  templateUrl: './add-slot.component.html',
  styleUrls: ['./add-slot.component.css']
})
export class AddSlotComponent {
  
  form = new FormGroup({
    locationid : new FormControl('', Validators.required),
    slotid : new FormControl('', Validators.required),
    slotno : new FormControl('', Validators.required)
  })
  constructor() { }

  
}
