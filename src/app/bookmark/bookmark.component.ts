import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app-service.service';

declare var jQuery:any;

@Component({
  selector: 'bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  @Input() content;
  id;
  userId;
  liked=false;
  likedResponse;
  loading = false;
  constructor(private appService:AppService) {
     this.userId = window.localStorage.getItem('auth_key');
  }

  like(){
    this.id = this.content.id;
    if(this.userId != null){
      this.liked = !this.liked;
      this.loading = true;
      this.appService.like(this.liked, this.userId, this.id).subscribe(
        data => {
          this.likedResponse = data;
        },
        null,
        () => {this.loading = false;}
      )
    } else{
      jQuery('.login-pop-up-reg').modal('show');
    }

  }

  ngOnInit() {
    if(this.content.custom_fields.like_users){
      if(this.content.custom_fields.like_users.toString().search(this.userId) != -1){
        this.liked = true;
      }
    }
  }

}
