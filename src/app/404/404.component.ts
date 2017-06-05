import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service.service';

@Component({
  selector: 'app-404',
  templateUrl: './404.component.html',
  styleUrls: ['./404.component.css']
})
export class notFoundComponent implements OnInit {

  constructor(private appService:AppService) { }

  ngOnInit():any {
    this.appService.changeMenu('');
  }

}
