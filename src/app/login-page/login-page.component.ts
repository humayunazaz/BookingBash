import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginPage=true;
  constructor(private appService:AppService) { }

  ngOnInit() {
    this.appService.changeMenu('Login');
  }

}
