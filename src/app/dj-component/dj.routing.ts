import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DjComponentComponent } from './dj-component.component';

const djsRoutes: Routes = [
  {
    path: 'djs',
    component: DjComponentComponent
  },
  {
    path: 'djs/:id',
    component: DjComponentComponent
  },
]

@NgModule({
  imports: [ RouterModule.forChild(djsRoutes)],
  exports: [ RouterModule ]
})

export class djsRoutingModule{

}
