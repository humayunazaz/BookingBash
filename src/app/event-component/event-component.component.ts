import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service.service';
import { briefPipe } from './brief.pipe';
import { DateSeparatorPipe } from '../date-separator-pipe.pipe';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

declare var jQuery:any;

@Component({
  selector: 'event',
  templateUrl: './event-component.component.html',
  styleUrls: ['./event-component.component.css']
})
export class EventComponentComponent implements OnInit {
  constructor(private appService:AppService, private route:ActivatedRoute) { }
  mainSliderUrl:any = 'http://bookingbash.com/server/api/bash/featured_content/?type=event';
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
  url:any = 'http://bookingbash.com/server/api/bash/featured_content/?type=event&count=3';
  filterUrl:any = 'http://bookingbash.com/server/api/bash/filter_results/?event=';
  genreUrl:any = 'http://bookingbash.com/server/api/bash/events/?category=';
  head:any = 'Events';
  icon:any = 'fa-calendar';
  singlePage=true;
  error=false;
  isLoading=true;
  content;
  events=[];
  eventIds=[];
  mapContent;
  mainUrl='http://bookingbash.com/server/api/bash/events/';
  facebook='facebook';
  twitter='twitter';
  modelId='events';
  modalContent;
  modalGallery=[];
  modelTitle;
  modelImg;
  prevId;
  nextId;
  searchId;
  newModalContent;
  singleUrl='http://bookingbash.com/server/api/bash/events/?slug=';

  getContent(url){
    this.appService.getContent(url).subscribe(
      content => {
        this.mainMagic(content);
      },
      err => {this.error = true; this.isLoading = false;},
      () => {this.isLoading = false;}
    )
  }
  mainMagic(content){
    delete content['status'];
    this.content = content;
    let i = 0;
    let a = 0;
    while(this.content[i][a]){
      this.events.push(this.content[i][a]);
      this.eventIds.push(this.content[i][a].id);
      a++;
    }
    this.mapContent = this.content[2];
  }
  viewAll($event){
    this.error = false;
    this.isLoading = true;
    this.getContent(this.mainUrl);
  }
  updateUrl($event){
    this.events = [];
    this.eventIds = [];
    this.isLoading = true;
    this.error = false;
    this.getContent($event.bsUrl);
  }
  updateGenre($event){
    this.events = [];
    this.eventIds = [];
    this.isLoading = true;
    this.error = false;
    this.getContent($event.updateGenre);
  }
  myModel($event){
    let id = $event.Id;
    let i = 0;
    let content;
    while(this.events[i]){
      if(this.events[i].id == id){
        content = this.events[i];
      }
      i++;
    }
    this.modalMagic(content);
  }
  modalMagic(content){
    this.modelTitle = content.title;
    this.modelImg = content.thumbnail_images.full.url;
    this.modalContent = content.content;
    this.prevId = this.eventIds[this.eventIds.indexOf(content.id) - 1];
    this.nextId = this.eventIds[this.eventIds.indexOf(content.id) + 1];
    let i = 0;
    while(content.custom_fields.gallery[i]){
      this.modalGallery.push(content.gallery[i]);
      i++;
    }
  }
  openModel(content){
    this.modalMagic(content);
  }
  gettingSlug(){
    var subscription = this.route.params.subscribe(
      (params:Params) => {
        this.searchId = params['id'];
      }
    )
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
  ngOnInit() {
    this.appService.changeMenu('Events');
    this.gettingSlug();
    if(this.searchId != undefined){
      let url = this.singleUrl + this.searchId;
      this.singleContent(url, this.mainUrl);
      jQuery(".activity-modal").modal('show');
    } else{
      this.getContent(this.mainUrl);
    }
    console.log(this .searchId);
  }

}
