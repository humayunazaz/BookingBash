import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

declare var jQuery:any;

@Component({
  selector: 'djs',
  templateUrl: './dj-component.component.html',
  styleUrls: ['./dj-component.component.css']
})
export class DjComponentComponent implements OnInit {

  constructor(private appService:AppService, private route:ActivatedRoute) { }
  mainSliderUrl: any = 'http://bookingbash.com/server/api/bash/featured_content/?type=dj';
  filterInput:any = [
    {
      title: 'DJ name',
      icon: 'fa-search',
      datePicker: false,
      name: 'dj'
    },
    {
      title: 'Music Genre',
      icon: 'fa-tags',
      datePicker: false,
      name: 'genre'
    },
    {
      title: 'Venue',
      icon: 'fa-map-marker',
      datePicker: false,
      name: 'venue'
    }
  ];
  genre:any = [
    {
      title: 'Classical'
    },
    {
      title: 'Rock'
    },
    {
      title: 'Country'
    },
    {
      title: 'Reggage'
    }
  ];
  filterUrl:any = 'http://bookingbash.com/server/api/bash/filter_results/?dj=';
  genreUrl:any = 'http://bookingbash.com/server/api/bash/djs/?genre=';
  url:any = 'http://bookingbash.com/server/api/bash/featured_content/?type=dj&count=3';
  head:any = 'Djs';
  icon:any = 'fa-video-camera';
  djUrl:any = 'http://bookingbash.com/server/api/bash/djs/';
  djContent:any = [];
  modelId:any = 'dj';
  modelTitle:any;
  modalContent:any;
  modelImg:any;
  modalGallery:any = [];
  prevId:any;
  nextId:any;
  djIds:any = [];
  isLoading=true;
  singleUrl:any = 'http://bookingbash.com/server/api/bash/djs/?slug=';
  error=false;
  facebook='facebook';
  twitter='twitter';
  singlePage=true;
  searchId;
  newModalContent;

  updateUrl($event){
    this.djContent = [];
    this.djIds = [];
    this.isLoading = true;
    this.error = false;
    this.getContent($event.bsUrl);
  }
  updateGenre($event){
    this.djContent = [];
    this.djIds = [];
    this.isLoading = true;
    this.error = false;
    this.getContent($event.updateGenre);
  }
  getContent(url){
    this.appService.getContent(url).subscribe(
      Content =>{
        this.mainMagic(Content);
      },
      err => {this.isLoading = false; this.error = true;},
      () => {this.isLoading=false;}
    );
  }
  viewAll($event){
    this.error = false;
    this.isLoading = true;
    this.getContent(this.djUrl);
  }
  openModal(content){
    this.modalMagic(content);
  }
  modalMagic(content){
    this.modelTitle = content.title;
    this.modelImg = content.thumbnail_images.full.url;
    this.modalContent = content.content;
    this.prevId = this.djIds[this.djIds.indexOf(content.id) - 1];
    this.nextId = this.djIds[this.djIds.indexOf(content.id) + 1];

    let i = 0;
    while(content.custom_fields.gallery[i]){
      this.modalGallery.push(content.gallery[i]);
      i++;
    }
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
  mainMagic(Content){
    delete Content['status'];
    let i = 0;
    let a = 0;
    while(Content[i][a]){
      this.djContent.push(Content[i][a]);
      this.djIds.push(Content[i][a].id);
      a++;
    };
  }
  myModel($event){
    let id = $event.Id;
    let i = 0;
    let content;
    while(this.djContent[i]){
      if(this.djContent[i].id == id){
        content = this.djContent[i];
      }
      i++;
    }
    this.modalMagic(content);
  }
  ngOnInit():any {
    this.appService.changeMenu('Djs');
    this.gettingSlug();
    if(this.searchId != undefined){
      let url = this.singleUrl + this.searchId;
      this.singleContent(url, this.djUrl);
      jQuery(".activity-modal").modal('show');
    } else{
      this.getContent(this.djUrl);
    }
  }

}
