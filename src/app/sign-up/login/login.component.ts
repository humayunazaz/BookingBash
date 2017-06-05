import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AppService } from '../../app-service.service';
import { emailValidator } from '../sign-form/emailvalidator';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  recoverForm: FormGroup;
  error;
  recover=false;
  message;
  @Input() loginPage = false;

  constructor(private fb:FormBuilder, private appService:AppService, private router:Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])]
    });
    this.recoverForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        emailValidator.emailValid
      ])]
    })
  }
  onSubmit(){
    this.appService.login(this.loginForm.value).subscribe(
      data => {
        if(data.status == 'ok'){
          window.localStorage.setItem('auth_key', data.user_id);
          window.localStorage.setItem('user_name', data.user_name);
          if(this.loginPage){
            this.router.navigate(['home']);
          }
          location.reload();
        }
      },
      err => {this.error = 'The enter the correct username and password';}
    )
  }
  onRecover(){
    this.message = 'System is authenticating your email';
    this.appService.recoverEmail(this.recoverForm.value.email).subscribe(
      data => {
        if(data.message == 'Email sent successfully'){
          this.message = "Please check your email and follow instructions.";
        } else{
          this.message = 'Sorry, incorrect or unregistered email.';
        }
      }
    )
    this.recoverForm.reset();
  }
  ngOnInit() {
  }

}
