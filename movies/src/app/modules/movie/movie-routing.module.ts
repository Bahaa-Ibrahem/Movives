import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetialsComponent } from './components/movie-detials/movie-detials.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';

const routes: Routes = [
  { path: '', redirectTo: "movies" },
  { path: "movies", component: MoviesListComponent },
  { path: "movie/:id", component: MovieDetialsComponent },
  // { path: "**", component: MoviesListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
