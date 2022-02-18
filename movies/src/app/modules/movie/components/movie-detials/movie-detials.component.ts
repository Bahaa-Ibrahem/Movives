import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetails } from '../../models/movie-details.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detials',
  templateUrl: './movie-detials.component.html',
  styleUrls: ['./movie-detials.component.scss']
})
export class MovieDetialsComponent implements OnInit {
  id: number = 0;
  movie: any;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 0;

  constructor(private activeRoter: ActivatedRoute, private movieSrv: MovieService) { 
   
  }

  ngOnInit(): void {
    this.activeRoter.params.subscribe(param => {
      this.id = param['id']; 
      this.movie = this.movieSrv.getMoviesById(this.id);
    })
  }

  countStar(star: number) {
    this.selectedValue = star;
    this.movieSrv.getMoviesById(this.id).rate = star;
  }

}
