import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../../app-service.service';

@Component({
  selector: 'movie-tabs',
  templateUrl: './movie-tabs.component.html',
  styleUrls: ['./movie-tabs.component.css']
})
export class MovieTabsComponent implements OnInit {
  @Input() tabsHeads: any=[];
  clickedTab:any = 'Latest';
  btnText:any = [
    {
      title:'Time and Schedule',
      redbtn: true
    }
  ];
  movieContent;
  timingLoading=true;
  cinemasUrl ='http://bookingbash.com/server/api/bash/movie_shows/?get=cinemas&movie_id=';
  movieTitle;
  cinemaId;
  constructor(private appService:AppService) { }

  clicked(content){
    this.clickedTab = content.title;
  }
  getSingleMovie(url){
    this.appService.getContent(url).subscribe(
      data => {
        if(data != null){
          this.movieContent = data;
          delete this.movieContent['status'];
          this.movieContent = this.movieContent.cinemas;
        }
      },
      null,
      () => {this.timingLoading = false;}
    )
  }
  movieId($event){
    this.movieContent = '';
    this.timingLoading = true;
    this.appService.changeDates("true");
    this.appService.changeTimes("false");
    let url = this.cinemasUrl + $event.movie.id;
    this.getSingleMovie(url);
    this.movieTitle = $event.movie.title;
    this.cinemaId = $event.movie.id;
  }
  ngOnInit() {
  }

}
