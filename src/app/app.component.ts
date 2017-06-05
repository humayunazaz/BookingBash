import { Component, OnInit } from '@angular/core';
import { AppService } from './app-service.service';
import {CookieService} from 'angular2-cookie/core';

declare var jQuery:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(window:resize)' : 'onResize($event)',
    '(document)' : 'clicked()'
  }
})
export class AppComponent implements OnInit{
  constructor(private appService:AppService, private cookieService:CookieService){
    let user = this.getCookie('user_name');
    if(user != undefined && user.toString().indexOf('+')){
      user = user.replace('+', ' ');
    }
    let id = this.getCookie('auth_key');
    if(user != undefined){
      console.log("q chala ab");
      window.localStorage.setItem('user_name', user);
      window.localStorage.setItem('auth_key', id);
    }
  }
  width;
  getCookie(key: string){
    return this.cookieService.get(key);
  }
  clicked(){
      jQuery('.detail-pop-up.video-model').on('hidden.bs.modal', function(){
        jQuery(this).find('.modal-body').html('');
      });
    }
    onResize($event){
      let width = $event.target.innerWidth;
      this.appService.newWidth(width);
    }
    ngOnInit():any{
      this.width = window.innerWidth;
      this.appService.newWidth(this.width);
    }
}
