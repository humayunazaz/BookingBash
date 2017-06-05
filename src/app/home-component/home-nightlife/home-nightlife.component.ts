import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-nightlife',
  templateUrl: './home-nightlife.component.html',
  styleUrls: ['./home-nightlife.component.css']
})
export class HomeNightlifeComponent implements OnInit {

  constructor(private router:Router) { }
  head:any = 'Nightlife';
  icon:any = 'fa-video-camera';
  url:any = 'http://bookingbash.com/server/api/bash/featured_content/?type=nightlife';
  singleUrl='http://bookingbash.com/server/api/bash/clubs/?id=';
  modelId:any = 'homenightlife';
  leftBtn:any = [
    {
      title: 'explore the nightlife',
      redbtn: false
    }
  ]
  rightBtn:any = [
    {
      title: 'explore town djs',
      redbtn: false
    }
  ];
  goto($event){
    this.router.navigate(['nightlife']);
  }
  ngOnInit() {
  }

}
