import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @Input() signUp = false;
  @Input() login = false;
  constructor() {
  }
  signupwindow(){
    this.login = false;
    this.signUp = true;
  }
  ngOnInit() {
  }

}
