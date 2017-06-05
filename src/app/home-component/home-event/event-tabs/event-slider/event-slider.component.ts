import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../../../app-service.service';

@Component({
  selector: 'event-slider',
  templateUrl: './event-slider.component.html',
  styleUrls: ['./event-slider.component.css']
})
export class EventSliderComponent implements OnInit {
  @Input() url:any;
  @Input() innerItem:any;
  sliderContent:any;
  firstSlides:any = [];
  secondSlides:any = [];
  secSlidemax:any = 2;
  btnText:any = 'View More';
  isLoading= true;
  error=false;
  constructor(private appService:AppService) { }

  getSlider(url){
      this.appService.getContent(url).subscribe(
        sliderContent => {
          delete sliderContent['status'];
          this.sliderContent = sliderContent;
          let i = 1;
          let b = 0;
          while(i <= this.innerItem){
            this.firstSlides.push(this.sliderContent[b]);
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
        },
        err => {this.isLoading = false; this.error = true},
        () => {this.isLoading = false;}
      )
  }

  ngOnInit():any {
    this.getSlider(this.url);
  }

}
