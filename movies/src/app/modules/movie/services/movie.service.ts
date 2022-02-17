import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
 movies: Movie[] = [
  new Movie(1, "movie one", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/movie-night-ideas-1608824743.jpg?crop=1.00xw:0.752xh;0,0.209xh&resize=980:*", "descrition"),
  new Movie(2, "movie two", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/movie-night-ideas-1608824743.jpg?crop=1.00xw:0.752xh;0,0.209xh&resize=980:*", "descrition"),
  new Movie(3, "movie three", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/movie-night-ideas-1608824743.jpg?crop=1.00xw:0.752xh;0,0.209xh&resize=980:*", "descrition"),
  new Movie(4, "movie four", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/movie-night-ideas-1608824743.jpg?crop=1.00xw:0.752xh;0,0.209xh&resize=980:*", "descrition"),
  new Movie(5, "movie five", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/movie-night-ideas-1608824743.jpg?crop=1.00xw:0.752xh;0,0.209xh&resize=980:*", "descrition"),
  new Movie(6,"movie six", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/movie-night-ideas-1608824743.jpg?crop=1.00xw:0.752xh;0,0.209xh&resize=980:*", "descrition"),
  new Movie(7, "movie seven", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/movie-night-ideas-1608824743.jpg?crop=1.00xw:0.752xh;0,0.209xh&resize=980:*", "descrition"),
  new Movie(8, "movie eghit", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/movie-night-ideas-1608824743.jpg?crop=1.00xw:0.752xh;0,0.209xh&resize=980:*", "descrition"),
  new Movie(9, "movie nine", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/movie-night-ideas-1608824743.jpg?crop=1.00xw:0.752xh;0,0.209xh&resize=980:*", "descrition"),
  new Movie(10, "movie ten", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/movie-night-ideas-1608824743.jpg?crop=1.00xw:0.752xh;0,0.209xh&resize=980:*", "descrition")
];

  constructor() { 
  }

  getMovies() {
    return this.movies.slice();
  }

  getMoviesById(id:number) {
    return this.movies[id-1];
  }
}
