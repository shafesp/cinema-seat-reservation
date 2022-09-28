import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { BookingService } from 'src/app/bookings.service';

@Component({
  selector: 'app-booking',
  templateUrl: './bookslot.component.html',
  styleUrls: ['./bookslot.component.css']
})
export class BookslotComponent implements OnInit {

  seatData: any;
  isSeatSelected: boolean = false;
  constructor(
    private bookingService: BookingService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getSeatDetails();
  }

  get today() { return moment().format('YYYY-MM-DD'); }

  getSeatDetails() {
    let count = 0;
    this.bookingService.getSeatDetails().subscribe((data => {
      this.seatData = data;
    }))
    this.seatData.map((data: any) => {
      data.selected = false;
    });

    this.seatData.forEach((element: any) => {
      if (element.isSelected === true) {
        count = count+1;
      }
    });
    this.isSeatSelected = count > 0 ? true : false;
  }

  addSeat(seat: any) {
    let count = 0;
    for (let i = 0; i < this.seatData.length; i++) {
      if (this.seatData[i].seatNumber === seat.seatNumber) {
        this.seatData[i].isSelected = !this.seatData[i].isSelected;
      }
    }
    this.seatData.forEach((element: any) => {
      if (element.isSelected === true) {
        count = count+1;
      }
    });
    this.isSeatSelected = count > 0 ? true : false;
  }

  addTickets() {
    this.router.navigate(['/dashboard/payment']);
  }

}

