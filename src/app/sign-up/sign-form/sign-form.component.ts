import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { emailValidator } from './emailvalidator';
import { AppService } from '../../app-service.service';
import { Response, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.css']
})
export class SignFormComponent implements OnInit {

  signupForm: FormGroup;
  emailStatus;
  userStatus;

  constructor(private fb:FormBuilder, private appService:AppService, private http:Http) {
    this.signupForm = this.fb.group({
      username: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]), this.userexisit.bind(this)],
      email: ['', Validators.compose([
        Validators.required,
        emailValidator.emailValid
      ]), this.emailexisit.bind(this)],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])],
      phone: [''],
      day: ['', Validators.compose([
        Validators.required,
        emailValidator.dayValid
      ])],
      month: ['', Validators.compose([
        Validators.required,
        emailValidator.monthValid
      ])],
      year: ['', Validators.compose([
        Validators.required,
        emailValidator.yearValid
      ])]

    });
  }
  emailexisit(control:FormControl){
      const promise = new Promise<any>(
        (resolve, reject) => {
          this.http.get('http://bookingbash.com/server/api/bash/check_username?user_email=' + control.value)
          .map(response => response.json())
          .subscribe(
            (res: Response) => {
              this.emailStatus = res;
              if(this.emailStatus.status == 'ok'){
                resolve(null);
              }
            },
            (err) => {
              resolve({emailexisit:true});
            }
          )
        }
      );
      return promise;
  }
  userexisit(control:FormControl){
    const promise = new Promise<any>(
      (resolve, reject) => {
        this.http.get('http://bookingbash.com/server/api/bash/check_username?user_name=' + control.value)
        .map(response => response.json())
        .subscribe(
          (res: Response) => {
            this.userStatus = res;
            if(this.userStatus.status == 'ok'){
              resolve(null);
            }
          },
          (err) => {
            resolve({userexisit:true});
          }
        )
      }
    );
    return promise;
  }
  onSubmit(){
    this.appService.signUp(this.signupForm.value).subscribe(
      data => {
        if(data.Status == 'ok'){
          window.localStorage.setItem('auth_key', data.User_id);
          window.localStorage.setItem('user_name', data.username);
          location.reload();
        }
      }
    )
  }
  ngOnInit() {
  }

}
