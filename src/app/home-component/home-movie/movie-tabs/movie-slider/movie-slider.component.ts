import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../../../app-service.service';
import { Router } from '@angular/router';

declare var jQuery:any;

@Component({
  selector: 'movie-slider',
  templateUrl: './movie-slider.component.html',
  styleUrls: ['./movie-slider.component.css']
})
export class MovieSliderComponent implements OnInit {

  constructor(private appService:AppService, private router:Router) { }
  @Input() url:any;
  @Input() innerItem:any;
  @Input() btnText:any;
  @Input() modelId:any;
  @Input() moviePageSlider:any;
  @Output() updateId = new EventEmitter();
  @Input() carouselId='';
  sliderContent:any;
  firstSlides:any = [];
  secondSlides:any = [];
  noSlides:any = 2;
  videourl:string;
  isLoading:any = true;
  error=false;
  sbtn:any = [
    {
      title: 'SELECT',
      redbtn: true
    }
  ];
  id;
  width;
  responsiveContent=[];

  getSlider(url){
      this.appService.getContent(url).subscribe(
        sliderContent => {
          delete sliderContent['status'];
          if(this.width > 480){
            this.sliderContent = sliderContent;
            let i = 1;
            let b = 0;
            while(i <= this.innerItem){
              if(this.sliderContent[b]){
                this.firstSlides.push(this.sliderContent[b]);
              }
              i++;
              b++;
            }
            i = 1;
            let secSlidemax = (this.innerItem * 2)-1;
            if(this.sliderContent[secSlidemax]){
              while(i <= this.innerItem){
                this.secondSlides.push(this.sliderContent[b]);
                i++;
                b++;
              }
            }
          } else{
            let i = 0;
            while(sliderContent[i]){
              if(sliderContent[i].thumbnail_images.medium){
                this.responsiveContent.push(sliderContent[i]);
              }
              i++;
            }
          }
        },
        err => {this.isLoading = false; this.error = true;},
        () => {this.isLoading = false;}
      )
  }
  modelContent($event){
    jQuery('.detail-pop-up.video-model').attr('id', '');
    jQuery('.detail-pop-up.video-model').attr('id', this.modelId);
    this.videourl = $event.videoUrl[0];
    if(this.videourl != ''){

      this.videourl = this.videourl.replace('watch?v=', 'embed/');
      this.videourl = this.videourl + '?autoplay=1';
      jQuery('.detail-pop-up.video-model').find('.modal-body').html('<iframe width="100%" height="400px" src="'+ this.videourl +'" frameborder="0" allowfullscreen></iframe>');
    } else{
      jQuery('.detail-pop-up.video-model').find('.modal-body').html('<h4>The trailor is Comming Soon.');
    }
  }
  movieOpen($event){
    this.id = $event.movie;
    this.updateId.emit({movie: $event.movie});
  }
  clicked(value){
    this.router.navigate(['single-movie', value]);
  }
  ngOnInit():any {
    this.getSlider(this.url);
    this.appService.width.subscribe(
      data => {
        this.width = data;
      }
    )
  }

}
