import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class headerComponent implements OnInit{
    btnText:any = [
      {
      title: 'Find my Gig',
      redbtn: true
    }
  ]
  signUp = true;
  login = true;
  username = '';
  sessionId = '';
  constructor(private appService:AppService, private router:Router){
    this.username = window.localStorage.getItem('user_name');
    this.sessionId = window.localStorage.getItem('auth_key');
  }
  openModal(data){
    if(data == 'login'){
      this.signUp = false;
      this.login = true;
    } else{
      this.login = false;
      this.signUp = true;
    }
  }
  signout(){
    this.appService.logout();
    this.router.navigate(['home']);
    location.reload();
  }
  gotoProfile(){
    this.router.navigate(['profile']);
  }
  gotoHome(){
    this.router.navigate(['home']);
  }
  ngOnInit():any{
  }
}
