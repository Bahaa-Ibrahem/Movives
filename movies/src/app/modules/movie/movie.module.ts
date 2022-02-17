import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieDetialsComponent } from './components/movie-detials/movie-detials.component';
import { MovieDetialsModel } from './models/movie-detials/movie-detials.model';


@NgModule({
  declarations: [
    MoviesListComponent,
    MovieDetialsComponent,
    MovieDetialsModel
  ],
  imports: [
    CommonModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
