import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-footer',
  templateUrl: './bs-footer.component.html',
  styleUrls: ['./bs-footer.component.css']
})
export class BsFooterComponent implements OnInit {

  constructor() { }
  icons:any = [
    'fa-google-plus',
    'fa-pinterest-p',
    'fa-facebook',
    'fa-twitter',
    'fa-instagram'
  ];
  footerText:any = 'The Bookingbash 2016. All Rights Reserved.';

  ngOnInit() {
  }

}
