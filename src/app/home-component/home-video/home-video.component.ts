import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app-service.service';

declare var jQuery:any;

@Component({
  selector: 'home-video',
  templateUrl: './home-video.component.html',
  styleUrls: ['./home-video.component.css']
})
export class HomeVideoComponent implements OnInit {

  constructor(private appService:AppService) { }

  modelId:any = 'videoModel';
  video:any = [];
  url:any = 'http://bookingbash.com/server/api/bash/bbash_video/';
  videoUrl:any = '';
  @Input() closeModel:any;

  getContent(url){
    this.appService.getContent(url).subscribe(
      video => {
        this.video = video;
      }
    )
  }

  ngOnInit():any {
    this.getContent(this.url);
  }
  openModel(){
      jQuery('.detail-pop-up.video-model').attr('id', '');
      jQuery('.detail-pop-up.video-model').attr('id', this.modelId);
      jQuery('.detail-pop-up.video-model').find('.modal-body').html('<iframe height="400" width="100%" src="' + this.video.video_url + '"frameboder="0" allowfullscreen></iframe>');
  }

}
