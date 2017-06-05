import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId;
  url='http://bookingbash.com/server/api/bash/liked_content/?user_id=';
  content=[];
  loading=true;
  error=false;
  profileView=true;
  modelTitle;
  modelImg;
  modalContent;
  modalGallery=[];
  modelId="activity";
  constructor(private appService:AppService, private router:Router) {
    this.userId = window.localStorage.getItem('auth_key');
  }
  getContent(url){
    this.appService.getContent(url).subscribe(
      data => {
        delete data['status'];
        let i = 0;
        while(data[i]){
          this.content.push(data[i]);
          i++;
        }
      },
      err => {this.loading=false; this.error = true;},
      () => {this.loading=false;}
    )
  }
  gotoSingle($event){
    let content = $event.book;
    if(content.type == "movie"){
      this.router.navigate(['single-movie', content.slug]);
    } else{
      this.modelContent(content);
    }
  }
  modelContent(content){
    this.modelTitle = content.title;
    this.modelImg = content.thumbnail_images.full.url;
    this.modalContent = content.content;

    let i = 0;
    while(content.custom_fields.gallery[i]){
      this.modalGallery.push(content.gallery[i]);
      i++;
    }
  }
  ngOnInit():any {
    let url = this.url + this.userId;
    this.getContent(url);
    this.appService.changeMenu('Profile');
  }

}
