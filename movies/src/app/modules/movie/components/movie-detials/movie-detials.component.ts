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
  constructor(private activeRoter: ActivatedRoute, private movieSrv: MovieService) { 
   
  }

  ngOnInit(): void {
    this.activeRoter.params.subscribe(param => {
      this.id = param['id']; 
      this.movie = this.movieSrv.getMoviesById(this.id);
    })
  }

}
