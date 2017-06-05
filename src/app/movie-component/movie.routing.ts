import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieComponentComponent } from './movie-component.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';

const movieRoutes: Routes = [
  {
    path: 'movies',
    component: MovieComponentComponent
  },
  {
    path: 'single-movie/:id',
    component: SingleMovieComponent
  }
]
@NgModule({
  imports: [ RouterModule.forChild(movieRoutes) ],
  exports: [ RouterModule ]
})

export class movieRoutingModule{

}
