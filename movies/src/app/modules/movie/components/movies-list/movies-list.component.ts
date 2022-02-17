import { Component, OnInit, Renderer2 } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];
  favoriteMovies: Movie[] = [];

  constructor(private movieSrv: MovieService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.movies = this.movieSrv.getMovies();
  }

  onFavorite(id: number, el: HTMLElement) {
    this.renderer.addClass(el, "active");
    const movie = this.movieSrv.getMoviesById(id);
    this.favoriteMovies.push(movie);
  }

}
