import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActivityComponentComponent } from './activity-component.component';

const activityRoutes: Routes = [
  {
    path: 'activities',
    component: ActivityComponentComponent
  },
  {
    path: 'activities/:id',
    component: ActivityComponentComponent
  }
]

@NgModule({
  imports: [ RouterModule.forChild(activityRoutes)],
  exports: [ RouterModule ]
})

export class activityRoutingModule{

}
