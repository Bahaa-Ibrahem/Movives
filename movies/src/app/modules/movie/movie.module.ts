import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieDetialsComponent } from './components/movie-detials/movie-detials.component';


@NgModule({
  declarations: [
    MoviesListComponent,
    MovieDetialsComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
