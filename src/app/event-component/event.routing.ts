import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventComponentComponent } from './event-component.component';

const eventRoutes: Routes = [
  {
    path: 'events',
    component: EventComponentComponent
  },
  {
    path: 'events/:id',
    component: EventComponentComponent
  }
]

@NgModule({
  imports: [ RouterModule.forChild(eventRoutes)],
  exports: [ RouterModule ]
})

export class eventRoutingModule{

}
