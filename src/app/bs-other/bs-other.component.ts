import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-other',
  templateUrl: './bs-other.component.html',
  styleUrls: ['./bs-other.component.css']
})
export class BsOtherComponent implements OnInit {

  constructor() { }
  firstgroups:any = [
    {
      title: 'Movies',
      icon: 'fa-long-arrow-right'
    },
    {
      title: 'Events',
      icon: 'fa-long-arrow-right'
    },
    {
      title: 'Lifestyle Activities',
      icon: 'fa-long-arrow-right'
    }
  ]
  secondgroups:any = [
    {
      title: 'Nightlife',
      icon: 'fa-long-arrow-right'
    },
    {
      title: 'DJs',
      icon: 'fa-long-arrow-right'
    },
    {
      title: 'Blogs',
      icon: 'fa-long-arrow-right'
    }
  ]
  thirdgroups:any = [
    {
      title: 'Contact us',
      icon: 'fa-long-arrow-right'
    },
    {
      title: 'Policy T&C',
      icon: 'fa-long-arrow-right'
    }
  ]

  ngOnInit() {
  }

}
