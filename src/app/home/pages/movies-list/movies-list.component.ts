import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getPopularMovies().pipe(take(1)).subscribe(
      (response: any) => {
        console.log(response);
      }
    )
  }

}
