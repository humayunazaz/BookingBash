import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service.service';

@Component({
  selector: 'blog',
  templateUrl: './blog-component.component.html',
  styleUrls: ['./blog-component.component.css']
})
export class BlogComponentComponent implements OnInit {

  constructor(private appService: AppService) { }
  mainSliderUrl:any = 'http://bookingbash.com/server/api/bash/homepage_slider';
  blogs:any = [];
  url:any = 'http://bookingbash.com/server/api/bash/blog_posts';
  isLoading= true;
  error=false;

  getContent(url){
    this.appService.getContent(url).subscribe(
        blogs => {
          delete blogs['status'];
          let i = 0;
          while(blogs[i]){
            if(blogs[i].thumbnail_images){
              this.blogs.push(blogs[i]);
            }
            i++
          };
        },
        err => {this.isLoading = false; this.error = true},
        () => {this.isLoading=false;}
    )
  }
  ngOnInit():any {
    this.getContent(this.url);
    this.appService.changeMenu('Blogs');
  }

}
