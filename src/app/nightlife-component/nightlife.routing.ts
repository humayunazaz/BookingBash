import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NightlifeComponentComponent } from './nightlife-component.component';

const nightlifeRoutes: Routes = [
  {
    path: 'nightlife',
    component: NightlifeComponentComponent
  },
  {
    path: 'nightlife/:id',
    component: NightlifeComponentComponent
  }
]

@NgModule({
  imports: [ RouterModule.forChild(nightlifeRoutes)],
  exports: [ RouterModule ]
})

export class nightlifeRoutingModule{

}
