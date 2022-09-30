import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { MovieResponse, Result } from '../../models/MovieResponse.model';
import { environment } from 'src/environments/environment';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  public mostPopularList: Result[];
  public topRatedList: Result[];
  public trendingDayMoviesList: Result[];

  constructor(private _moviesService: MoviesService) { }

  ngOnInit(): void {
    this._getMostPopularMovieList();
    this._getTopRatedMovieList();
    this._getTrendingDayMoviesList();
  }

  // private _getMostPopularMovieList() {
  //   this._moviesService.getPopularMovies().pipe(take(1)).subscribe(
  //     (response: MovieResponse) => {
  //       this.mostPopularList = response.results.map((movie: Result) => {
  //         return {
  //           ...movie,
  //           poster_path: `${environment.baseUrlImage}${movie.poster_path}`,
  //           backdrop_path: `${environment.baseUrlImage}${movie.backdrop_path}`
  //         };
  //       });
  //     },
  //     (error: HttpErrorResponse) => {
  //       console.error(error);
  //     }
  //   );
  // }

  private _getMostPopularMovieList() {
    this._moviesService.getPopularMovies().pipe(take(1)).subscribe(
      (response: MovieResponse) => {
        this.mostPopularList = response.results.map((movie: Result) => {
          return {
            ...movie,
            poster_path: `${environment.baseUrlImage}${movie.poster_path}`,
            backdrop_path: `${environment.baseUrlImage}${movie.backdrop_path}`
          };
        });
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

  private _getTopRatedMovieList() {
    this._moviesService.getTopRatedMovies().pipe(take(1)).subscribe(
      (response: MovieResponse) => {
        this.topRatedList = response.results.map((movie: Result) => {
          return {
            ...movie,
            poster_path: `${environment.baseUrlImage}${movie.poster_path}`,
            backdrop_path: `${environment.baseUrlImage}${movie.backdrop_path}`
          };
        });
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

  private _getTrendingDayMoviesList() {
    this._moviesService.getTrendingDayMovies().pipe(take(1)).subscribe(
      (response: MovieResponse) => {
        this.trendingDayMoviesList = response.results.map((movie: Result) => {
          return {
            ...movie,
            poster_path: `${environment.baseUrlImage}${movie.poster_path}`,
            backdrop_path: `${environment.baseUrlImage}${movie.backdrop_path}`
          };
        });
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }
}
