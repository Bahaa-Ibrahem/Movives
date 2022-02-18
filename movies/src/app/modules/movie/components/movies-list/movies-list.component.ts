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
  orignalMovies: Movie[] = [];
  dataSource: MatTableDataSource<Movie> = new MatTableDataSource<Movie>(this.movies);
  favoriteMovies: Movie[] = [];
  orignalFavoriteMovies: Movie[] = [];
  rateMovies: Movie[] = [];
  orignalRateMovies: Movie[] = [];
  selectedValue: string = 'all';
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

  onSelect() {
    debugger
    if(this.selectedValue == 'all') {
      this.dataSource = new MatTableDataSource<Movie>(this.movies);
      this.changeDetectorRef.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
    } else if(this.selectedValue == 'rate') {
      this.rateMovies = this.orignalMovies.sort((a, b) => (a.rate) - (b.rate)).reverse();
      this.orignalRateMovies = this.rateMovies;
      this.dataSource = new MatTableDataSource<Movie>(this.rateMovies);
      this.changeDetectorRef.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
    } else {
      this.dataSource = new MatTableDataSource<Movie>(this.orignalFavoriteMovies.filter(movie => movie.name != null && movie.name.toLowerCase().includes(this.textSearch.toLowerCase())));
      this.changeDetectorRef.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
    }
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
    } else if (this.selectedValue == 'rate') {
      this.dataSource = new MatTableDataSource<Movie>(this.orignalRateMovies.filter(movie => movie.name != null && movie.name.toLowerCase().includes(this.textSearch.toLowerCase())));
      this.changeDetectorRef.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
    }
    else {
      this.dataSource = new MatTableDataSource<Movie>(this.orignalFavoriteMovies.filter(movie => movie.name != null && movie.name.toLowerCase().includes(this.textSearch.toLowerCase())));
      this.changeDetectorRef.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
    }
  }

  onFavorite(id: number) {
    this.movieSrv.getMoviesById(id).isFavorite = true;
    this.favoriteMovies = this.movies.filter(movie => movie.isFavorite == true);
    this.orignalFavoriteMovies = this.favoriteMovies;
  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }

}
