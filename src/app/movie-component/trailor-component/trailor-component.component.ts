import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app-service.service';

declare var jQuery:any;

@Component({
  selector: 'movie-trailor',
  templateUrl: './trailor-component.component.html',
  styleUrls: ['./trailor-component.component.css']
})
export class TrailorComponentComponent implements OnInit {

  constructor(private appService:AppService) { }
  head:any = 'Trailors & Videos';
  icon:any = 'fa-video-camera';
  url:any = 'http://bookingbash.com/server/api/bash/featured_content/?type=movie&count=5';
  trailors: any;
  trailorsImgs: any = [];
  trailorId:any = 'youtube';
  isLoading=true;
  error=false;

  getContent(url){
    this.appService.getContent(url).subscribe(
      trailors => {
        this.trailors = trailors;
        let i=0;
        while(i < 5){
          let movieUrl:string = this.trailors[i].custom_fields.trailer;
          let movieImg = movieUrl.toString().substr(32, 11);
          this.trailorsImgs.push({'Thumb': "http://img.youtube.com/vi/" + movieImg + "/mqdefault.jpg", 'url': movieUrl});
          i++;
        }
      },
      err => {this.isLoading = false; this.error = true;},
      () => {this.isLoading = false;}
    )
  }

  ngOnInit():any {
    this.getContent(this.url);
    console.log('is loading: ' + this.isLoading);
  }

  open(trailor){
    console.log('chal raha hai');
    jQuery('.detail-pop-up').attr('id', '');
    jQuery('.detail-pop-up').attr('id', this.trailorId);

    let url = trailor.url.toString().replace('watch?v=', 'embed/');
    url = url + '?autoplay=1';
    jQuery('.detail-pop-up').find('.modal-body').html('<iframe width="100%" height="400px" src="'+ url +'" frameborder="0" allowfullscreen></iframe>');
  }

}
