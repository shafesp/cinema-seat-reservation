import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-seat',
  templateUrl: './add-seat.component.html',
  styleUrls: ['./add-seat.component.css']
})
export class AddSeatComponent implements OnInit {

  constructor() { }
  form = new FormGroup({
    seat_type : new FormControl('', Validators.required),
    cost : new FormControl('', Validators.required)
  })
  ngOnInit(): void {
  }

}
