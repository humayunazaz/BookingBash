import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate{
  username;
  userId;
  constructor(private router:Router) {
    this.username = window.localStorage.getItem('user_name');
    this.userId = window.localStorage.getItem('auth_key');
  }
  canActivate(){
    if(this.username && this.userId){
      return true;
    } else{
      this.router.navigate(['login']);
    }
  }
}
