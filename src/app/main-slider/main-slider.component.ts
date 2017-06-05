import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AppService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css']
})
export class MainSliderComponent implements OnInit, OnDestroy {

  constructor(private appService: AppService, private router:Router) { }
  @Input() url:any;

  sliderContent:any;
  innerItems: any = 3;
  noSlides: any = 3;
  cleanContent:any;
  firstSlide:any = [];
  secondSlide:any = [];
  thirdSlide:any = [];
  maxItem:any;
  isLoading:any = true;
  error=false;
  width;
  responsiveContent=[];
  getSlider(url){
    this.appService.getContent(url).subscribe(
      sliderContent => {
        delete sliderContent['status'];
        if(this.width > 480){
          this.cleanContent = sliderContent;
         this.maxItem = this.innerItems * this.noSlides;
          let i = 1;
          let b = 0;
          while(i <= this.innerItems){
            this.firstSlide.push(this.cleanContent[b]);
            i++;
            b++;
          }
          i = 1;
          if(this.cleanContent[5]){
            while(i <= this.innerItems){
              this.secondSlide.push(this.cleanContent[b]);
              i++;
              b++;
            }
            i = 1;
          }
          if(this.cleanContent[8]){
            while(i <= this.innerItems){
              this.thirdSlide.push(this.cleanContent[b]);
              i++;
              b++;
            }
          }
        } else{
          let i = 0;
          while(sliderContent[i]){
            this.responsiveContent.push(sliderContent[i]);
            i++;
          }
        }
      },
      err => {this.isLoading = false; this.error = true},
      () => {this.isLoading = false;}
    )
  }
  clicked(value){
    if(value.type == 'movie'){
      this.router.navigate(['single-movie', value.slug]);
    } else if(value.custom_fields.is_activity == 'No'){
      this.router.navigate(['events']);
      console.log(value.custom_fields.is_activity);
    } else if(value.custom_fields.is_activity == 'Yes'){
      this.router.navigate(['activities', value.slug]);
      console.log(value.custom_fields.is_activity);
    } else if(value.custom_fields.is_dj == 'No'){
      this.router.navigate(['nightlife', value.slug]);
      console.log(value.custom_fields.is_dj);
    } else if(value.custom_fields.is_dj == 'Yes'){
      this.router.navigate(['djs', value.slug]);
      console.log(value.custom_fields.is_dj);
    }
  }
  ngOnInit():any {
    this.getSlider(this.url);
    this.appService.width.subscribe(
      data => {
        this.width = data;
      }
    )
  }

  ngOnDestroy():any{
    this.isLoading = true;
  }
}
