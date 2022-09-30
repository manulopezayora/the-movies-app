import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  public getPopularMovies(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/movie/popular`);
  }

  public getTopRatedMovies(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/movie/top_rated`);
  }

  public getTrendingDayMovies(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/trending/movie/day`);
  }
}
