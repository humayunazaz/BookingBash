import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../../app-service.service';

declare var jQuery:any;

@Component({
  selector: 'bs-activity',
  templateUrl: './bs-activity.component.html',
  styleUrls: ['./bs-activity.component.css']
})
export class BsActivityComponent implements OnInit {
  constructor(private appService:AppService) { }

  @Input() modelId:any;
  @Input() url:any;
  activityContent:any;
  innerItem:any = 4;
  sortActivitys:any = [];
  sortIds:any = [];
  Smodel:any;
  isLoading=true;
  btnText:any = [
  {
    title: 'explore activities to do',
    retbtn: false
  }
  ];
  error=false;
  modelTitle;
  modelImg;
  modalContent;
  prevId;
  nextId;
  modalGallery=[];
  @Output() singlePage = new EventEmitter();
  @Input() singleUrl:any = '';

  getContent(url){
    this.appService.getContent(url).subscribe(
      activityContent => {
        this.activityContent = activityContent;
        let i = 1;
        let b = 0;
        let c = 0;
        while(i <= this.innerItem){
          this.sortActivitys.push(this.activityContent[c][b]);
          this.sortIds.push(this.activityContent[c][b].id);
          i++;
          b++;
        }
      },
      err => {this.isLoading = false; this.error = true;},
      () => {this.isLoading = false;}
    )
  }
  ngOnInit():any {
    this.getContent(this.url);
  }
  goto($event){
    this.singlePage.emit({$event});
  }
  myModel($event){
    let id = $event.Id;
    let i = 0;
    let content;
    while(this.sortActivitys[i]){
      if(this.sortActivitys[i].id == id){
        content = this.sortActivitys[i];
      }
      i++;
    }
    this.modalMagic(content);
  }
  modalMagic(content){
    this.modelTitle = content.title;
    this.modelImg = content.thumbnail_images.full.url;
    this.modalContent = content.content;
    this.prevId = this.sortIds[this.sortIds.indexOf(content.id) - 1];
    this.nextId = this.sortIds[this.sortIds.indexOf(content.id) + 1];
    let i = 0;
    while(content.custom_fields.gallery[i]){
      this.modalGallery.push(content.gallery[i]);
      i++;
    }
  }
  modelContent($event){
    this.modalMagic($event.Content);
  }
}
