import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service.service';

declare var jQuery:any;

@Component({
  selector: 'home',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  mainSliderUrl:any = 'http://bookingbash.com/server/api/bash/homepage_slider';
  constructor(private appService:AppService) {
  }
  clicked(){
      jQuery('.detail-pop-up.video-model').on('hidden.bs.modal', function(){
        jQuery(this).find('.modal-body').html('');
      });
    }
  ngOnInit():any {
    this.appService.changeMenu('Home');
  }

}
