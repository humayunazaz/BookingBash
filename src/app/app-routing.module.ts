import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponentComponent } from './home-component/home-component.component';
import { notFoundComponent } from './404/404.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth-guard.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponentComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: notFoundComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})

export class appRoutingModule{

}
