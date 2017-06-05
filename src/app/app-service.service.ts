import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {CookieService} from 'angular2-cookie/core';

@Injectable()
export class AppService {
  emitter: ReplaySubject<any> = new ReplaySubject(1);
  width: ReplaySubject<any> = new ReplaySubject(1);
  dates: ReplaySubject<any> = new ReplaySubject(1);
  times: ReplaySubject<any> = new ReplaySubject(1);
  constructor(private http: Http, private cookieService:CookieService) {
  }
  changeTimes(value){
    this.times.next(value);
  }
  changeDates(value){
    this.dates.next(value);
  }
  changeMenu(value){
    this.emitter.next(value);
  }
  newWidth(value){
    this.width.next(value);
  }
  getContent(url): Observable<any>{
    return this.http.get(url)
    .map(response => response.json());
  }
  signUp(value): Observable<any>{
    let cred = 'username=' + value.username + '&email=' + value.email + '&password=' + value.password;
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

    return this.http.post('http://bookingbash.com/server/api/bash/user_register/', cred, {headers:headers})
    .map(response => response.json());
  }

  login(value): Observable<any>{
    let cred = 'username=' + value.username + '&password=' + value.password;
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

    return this.http.post('http://bookingbash.com/server/api/bash/user_login/', cred, {headers:headers})
    .map(response => response.json());
  }
  logout(){
    window.localStorage.removeItem('auth_key');
    window.localStorage.removeItem('user_name');
    this.cookieService.remove('auth_key');
    this.cookieService.remove('user_name');
  }
  emailExist(email): Observable<any>{
    return this.http.get('http://bookingbash.com/server/api/bash/check_username?user_email=' + email)
    .map(response => response.json());
  }
  recoverEmail(email): Observable<any>{
    let cred = 'email_id=' + email;
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

    return this.http.post('http://bookingbash.com/server/api/bash/recover_email', cred, {headers:headers})
    .map(response => response.json());
  }
  emailSubscribe(email): Observable<any>{
    let cred = 'email=' + email;
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

    return this.http.post('http://bookingbash.com/server/api/bash/news_letter', cred, {headers:headers})
    .map(response => response.json());
  }

  like(liked, user, postId){
    let data = 'post_id=' + postId + '&user_id=' + user;
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

    if(liked == true){
      return this.http.post('http://bookingbash.com/server/api/bash/like/', data, {headers:headers})
      .map(response => response.json());
    } else if(liked == false){
      return this.http.post('http://bookingbash.com/server/api/bash/unlike/', data, {headers:headers})
      .map(response => response.json());
    }
  }
}
