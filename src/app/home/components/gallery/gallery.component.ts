import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../models/MovieResponse.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() title: string;
  @Input() movieList: Result[];

  public isMovieDataPresent: boolean;

  constructor() {
    this.title = this.title ?? 'Movie List';
    this.movieList = [];
  }

  ngOnInit(): void {
    this.isMovieDataPresent = this.movieList.length ? true : false;
  }

}
