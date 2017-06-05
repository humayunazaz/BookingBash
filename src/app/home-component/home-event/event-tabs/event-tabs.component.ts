import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-tabs',
  templateUrl: './event-tabs.component.html',
  styleUrls: ['./event-tabs.component.css']
})
export class EventTabsComponent implements OnInit {
  clickedTab:any = 'This Month';
  tabsHeads:any = [
    {
      title: 'This Month',
      url: 'http://bookingbash.com/server/api/bash/featured_content/?type=event&filter=month',
      id:'thismonth',
      innerItem: 6
    },
    {
      title: 'This Week',
      url: 'http://bookingbash.com/server/api/bash/featured_content/?type=event&filter=week',
      id:"thisweek",
      innerItem: 6
    },
    {
      title: 'Today',
      url: 'http://bookingbash.com/server/api/bash/featured_content/?type=event&filter=today',
      id:"today",
      innerItem: 6
    },
    {
      title: 'Future Events',
      url: 'http://bookingbash.com/server/api/bash/featured_content/?type=event&filter=future',
      id:"futureevents",
      innerItem: 6
    }
  ];
  clicked($event){
    this.clickedTab = $event.target.innerHTML;
  }
  constructor() { }

  ngOnInit() {
  }

}
