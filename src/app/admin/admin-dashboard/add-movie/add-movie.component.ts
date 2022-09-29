import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  form = new FormGroup({
    movie_name : new FormControl('', Validators.required),
    area : new FormControl('', Validators.required),
    cast : new FormControl('', Validators.required),
    bannerimage : new FormControl('', Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

}
