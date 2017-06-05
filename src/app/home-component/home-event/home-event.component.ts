import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'home-event',
  templateUrl: './home-event.component.html',
  styleUrls: ['./home-event.component.css']
})
export class HomeEventComponent implements OnInit {
  head:any = 'Events';
  icon:any = 'fa-calendar';
  btnText:any = [
    {
      title: 'explore and schedule events',
      redbtn: false
    }
  ];

  constructor() { }

  ngOnInit():any {
  }

}
