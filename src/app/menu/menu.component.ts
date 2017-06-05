import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app-service.service';

@Component({
  selector: 'my-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router, private appService:AppService){
  }
  menus:any = [
    {
      title: 'Home'
    },
    {
      title: 'Movies'
    },
    {
      title: 'Events'
    },
    {
      title: 'Activities'
    },
    {
      title: 'Nightlife'
    },
    {
      title: "Djs"
    },
    {
      title: 'Blogs'
    }
  ]
  menuName:any;
  clickedMenu(menu){
    let link = [menu.toLowerCase()];
    this.router.navigate(link);
  }

  ngOnInit():any {
    this.appService.emitter.subscribe(data=>{
      this.menuName = data;
    });
  }

}
