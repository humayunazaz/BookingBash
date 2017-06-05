import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-activity',
  templateUrl: './home-activity.component.html',
  styleUrls: ['./home-activity.component.css']
})
export class HomeActivityComponent implements OnInit {
  constructor(private router:Router) { }

  head:any = 'Activities';
  icon:any = 'fa-video-camera';
  url:any = 'http://bookingbash.com/server/api/bash/activities';
  modelId:any = 'homeactivity';
  router = 'activities';
  singleUrl= 'http://bookingbash.com/server/api/bash/activities/?id=';
  btnText:any = [
    {
      title: 'explore activities to do',
      redbtn: false
    }
  ]
  goto($event){
    this.router.navigate(['activities']);
  }
  ngOnInit() {
  }

}
