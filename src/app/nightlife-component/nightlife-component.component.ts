import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

declare var jQuery:any;

@Component({
  selector: 'nightlife',
  templateUrl: './nightlife-component.component.html',
  styleUrls: ['./nightlife-component.component.css']
})
export class NightlifeComponentComponent implements OnInit {

  constructor(private appService:AppService, private route:ActivatedRoute) { }

  mainSliderUrl:any = 'http://bookingbash.com/server/api/bash/featured_content/?type=nightlife-plain';
  filterInput:any = [
    {
      title: 'Search Keywords',
      icon: 'fa-search',
      datePicker: false,
      name: 'keywords'
    },
    {
      title: 'DD/MM/YYYY',
      icon: 'fa-calendar',
      datePicker: true,
      name: 'date'
    },
    {
      title: 'Select Venue',
      icon: 'fa-map-marker',
      datePicker: false,
      name: 'venue'
    }
  ];
  genre:any = [
    {
      title: 'Festival'
    },
    {
      title: 'Music'
    },
    {
      title: 'Rock\'n\'Roll'
    }
  ];
  url:any = "http://bookingbash.com/server/api/bash/featured_content/?type=club";
  filterUrl:any = "http://bookingbash.com/server/api/bash/filter_results/?club=";
  genreUrl:any = 'http://bookingbash.com/server/api/bash/clubs/?genre=';
  head:any = 'Nightlife';
  icon:any = 'fa-calendar';
  activityUrl:any = 'http://bookingbash.com/server/api/bash/clubs/';
  activityContent:any;
  activity:any = [];
  activityIds:any = [];
  modelTitle:any;
  modelImg:any;
  modalContent:any;
  prevId:any;
  nextId:any;
  modalGallery:any = [];
  modelId:any = 'nightlife';
  isLoading=true;
  singleUrl='http://bookingbash.com/server/api/bash/clubs/?slug=';
  error=false;
  mapContent;
  singlePage=true;
  searchId;
  newModalContent;

  updateUrl($event){
    this.activity = [];
    this.activityIds = [];
    this.isLoading = true;
    this.error = false;
    this.getContent($event.bsUrl);
  }
  updateGenre($event){
    this.activity = [];
    this.activityIds = [];
    this.isLoading = true;
    this.error = false;
    this.getContent($event.updateGenre);
  }
  getContent(url){
    this.appService.getContent(url).subscribe(
      activityContent => {
        this.mainMagic(activityContent);
      },
      err => {this.error = true; this.isLoading = false;},
      () => {this.isLoading = false;}
    )
  }
  viewAll($event){
    this.error = false;
    this.isLoading = true;
    this.getContent(this.activityUrl);
  }
  modelContent($event){
    this.modalMagic($event.Content);
  }
  modalMagic(content){
    this.modelTitle = content.title;
    this.modelImg = content.thumbnail_images.full.url;
    this.modalContent = content.content;
    this.prevId = this.activityIds[this.activityIds.indexOf(content.id) - 1];
    this.nextId = this.activityIds[this.activityIds.indexOf(content.id) + 1];
    // let i = 0;
    // while(content.custom_fields.gallery[i]){
    //   this.modalGallery.push(content.gallery[i]);
    //   i++;
    // }
  }
  myModel($event){
    let id = $event.Id;
    let i = 0;
    let content;
    while(this.activity[i]){
      if(this.activity[i].id == id){
        content = this.activity[i];
      }
      i++;
    }
    this.modalMagic(content);
  }
  gettingSlug(){
    var subscription = this.route.params.subscribe(
      (params:Params) => {
        this.searchId = params['id'];
      }
    )
  }
  mainMagic(activityContent){
    delete activityContent['status'];
    this.activityContent = activityContent;
    let i = 0;
    let a = 0;
    while(this.activityContent[i][a]){
      this.activity.push(this.activityContent[i][a]);
      this.activityIds.push(this.activityContent[i][a].id);
      a++;
    }
    this.mapContent = this.activityContent[2];
  }
  singleContent(url, sUrl){
    var subscr = Observable.forkJoin(
      this.appService.getContent(url),
      this.appService.getContent(sUrl)
    ).subscribe(
      data => {
        this.mainMagic(data[1]);
        this.newModalContent = data[0];
        this.newModalContent = this.newModalContent.post;
        this.modalMagic(this.newModalContent);
      },
      err => {this.error = true; this.isLoading = false;},
      () => {this.isLoading = false;}
    )
  }
  ngOnInit():any {
    this.appService.changeMenu('Nightlife');
    this.gettingSlug();
    if(this.searchId != undefined){
      let url = this.singleUrl + this.searchId;
      this.singleContent(url, this.activityUrl);
      jQuery(".activity-modal").modal('show');
    } else{
      this.getContent(this.activityUrl);
    }
  }

}
