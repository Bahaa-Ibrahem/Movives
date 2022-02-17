import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieDetialsComponent } from './components/movie-detials/movie-detials.component';
import { MaterialModule } from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    MoviesListComponent,
    MovieDetialsComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MovieModule { }
