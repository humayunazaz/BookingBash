import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sharer',
  templateUrl: './sharer.component.html',
  styleUrls: ['./sharer.component.css']
})
export class SharerComponent implements OnInit {
  @Input() id;
  @Input() share;
  @Input() content;
  fb_sharer = 'https://www.facebook.com/sharer/sharer.php?u=http://bookingbash.com/server/social-sharer/?post_id=';
  tw_sharer = 'https://twitter.com/home?status=http://bookingbash.com/%23/';

  constructor() { }
  clicked(){
    if(this.share == 'facebook'){
      var url = this.fb_sharer;
    } else{
      if(this.content.type == 'movie'){
        this.tw_sharer = this.tw_sharer + this.content.type + '/';
      } else if(this.content.custom_fields.is_activity == 'Yes'){
        let type = 'activities';
        this.tw_sharer = this.tw_sharer + type + '/';
      } else if(this.content.custom_fields.is_activity == 'No'){
        let type = 'event';
        this.tw_sharer = this.tw_sharer + type + '/';
      } else if(this.content.custom_fields.is_dj == 'Yes'){
        let type = 'djs';
        this.tw_sharer = this.tw_sharer + type + '/';
      } else if(this.content.custom_fields.is_dj == 'No'){
        let type = 'nightlife';
        this.tw_sharer = this.tw_sharer + type + '/';
      }

      url = this.tw_sharer;
    }
    window.open(url + this.id, 'facebook_share', 'height=320, width=640, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no');
  }
  ngOnInit() {
  }

}
