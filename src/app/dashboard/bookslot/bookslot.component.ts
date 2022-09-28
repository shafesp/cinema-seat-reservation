import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-bookslot',
  templateUrl: './bookslot.component.html',
  styleUrls: ['./bookslot.component.css']
})
export class BookslotComponent {

  
  get today() { return moment().format('YYYY-MM-DD'); }

  
}
