import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../sign-up/sign-form/emailvalidator';
import { AppService } from '../app-service.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb:FormBuilder, private appService:AppService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        emailValidator.emailValid
      ])],
      subject: [],
      message: ['', Validators.required]
    })
  }
  onSubmit(){
    console.log(JSON.stringify(this.contactForm.value));
    this.contactForm.reset();
  }

  ngOnInit():any {
    this.appService.changeMenu('Contact');
  }

}
