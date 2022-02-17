import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})

export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];
  orignalMovies: Movie[] = [];
  favoriteMovies: Movie[] = [];
  orignalFavoriteMovies: Movie[] = [];
  selectedValue: string = 'all';
  myControl = new FormControl();
  filteredOptions: Movie[] = [];
  textSearch: string = '';
  constructor(private movieSrv: MovieService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.movies = this.movieSrv.getMovies();
    this.orignalMovies = this.movies;
  }

  onSearchChange() {
    if(this.selectedValue == 'all')
      this.movies = this.orignalMovies.filter(movie => movie.name != null && movie.name.toLowerCase().includes(this.textSearch.toLowerCase()));
    else
      this.favoriteMovies = this.orignalFavoriteMovies.filter(movie => movie.name != null && movie.name.toLowerCase().includes(this.textSearch.toLowerCase()));
  }

  onFavorite(id: number, el: HTMLElement) {
    this.renderer.addClass(el, "active");
    const movie = this.movieSrv.getMoviesById(id);
    if(this.favoriteMovies.includes(movie)) 
      return;
    this.favoriteMovies.push(movie);
    this.orignalFavoriteMovies.push(movie);
  }

}
