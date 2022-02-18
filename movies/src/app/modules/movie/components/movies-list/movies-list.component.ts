import { ChangeDetectorRef, Component, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map, Observable, startWith } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})

export class MoviesListComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  obs: Observable<any> | undefined;
  movies: Movie[] = [];
  dataSource: MatTableDataSource<Movie> = new MatTableDataSource<Movie>(this.movies);
  orignalMovies: Movie[] = [];
  favoriteMovies: Movie[] = [];
  orignalFavoriteMovies: Movie[] = [];
  selectedValue: string = 'all';
  myControl = new FormControl();
  filteredOptions: Movie[] = [];
  textSearch: string = '';
  constructor(private movieSrv: MovieService, private renderer: Renderer2, private changeDetectorRef: ChangeDetectorRef) { 
  }

  ngOnInit(): void {
    this.getMovies();
    this.dataSource = new MatTableDataSource<Movie>(this.movies);
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

  getMovies() {
    this.movies = this.movieSrv.getMovies();
    this.orignalMovies = this.movies;
  }

  onSearchChange() {
    if(this.selectedValue == 'all') {
      this.dataSource = new MatTableDataSource<Movie>(this.orignalMovies.filter(movie => movie.name != null && movie.name.toLowerCase().includes(this.textSearch.toLowerCase())));
      this.changeDetectorRef.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
    }
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

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }

}
