import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.scss'],
  providers:[MoviesService]
})
export class MyhomeComponent implements OnInit {

  constructor(private movies: MoviesService) { }

  ngOnInit() {
  }

}
