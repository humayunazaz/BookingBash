import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TimingPipe } from '../timing.pipe';
import { AppService } from '../app-service.service';

@Component({
  selector: 'movie-timing',
  templateUrl: './movie-timing.component.html',
  styleUrls: ['./movie-timing.component.css']
})
export class MovieTimingComponent implements OnInit, OnDestroy {
  @Input() movieContent;
  @Input() loading;
  @Input() title;
  @Input() id;
  dates="true";
  datesUrl ='http://bookingbash.com/server/api/bash/movie_shows/?get=dates&movie_id=';
  showUrl = 'http://bookingbash.com/server/api/bash/movie_shows/?get=shows&movie_id=';
  cinemaDates;
  cinemaTimes;
  cinema;
  times="false";
  shows;
  showError = false;
  dateError=false;
  constructor(private appService:AppService) { }

  getDates(url){
    this.appService.getContent(url).subscribe(
      data => {
        this.cinemaDates = data;
        delete this.cinemaDates['status'];
        this.cinemaDates = this.cinemaDates.dates;
      },
      err => {this.dateError = true;},
      () => {this.dates = "false";}
    )
  }
  showDates(value){
    this.times = "false";
    this.dates = "true";
    this.cinema = value;
    if(this.cinema != ""){
      let url = this.datesUrl + this.id + '&cinema=' + this.cinema;
      this.getDates(url);
    } else{
      this.dates = "true";
    }
  }
  getTimes(url){
    this.appService.getContent(url).subscribe(
      data => {
        delete data['status'];
        this.shows = data.shows;
      },
      err => {this.showError = true; this.times = "true";},
      () => {this.times = "true";}
    )
  }
  showTime(value){
    this.shows = '';
    if(value != ""){
      let url = this.showUrl + this.id + '&cinema=' + this.cinema + '&date=' + value;
      this.getTimes(url);
    } else{
      this.times = "false";
    }
  }
  ngOnInit() {
    this.appService.dates.subscribe(
      data => {
        this.dates = data;
      }
    )
    this.appService.times.subscribe(
      data => {
        this.times = data;
      }
    )
  }
  ngOnDestroy(){
  }
}
