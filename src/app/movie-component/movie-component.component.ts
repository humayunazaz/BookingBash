import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service.service';

declare var jQuery:any;

@Component({
  selector: 'movie',
  templateUrl: './movie-component.component.html',
  styleUrls: ['./movie-component.component.css']
})
export class MovieComponentComponent implements OnInit {

  constructor(private appService: AppService) { }
  mainSliderUrl:any = 'http://bookingbash.com/server/api/bash/featured_content/?type=movie';
  head:any = 'Movies';
  icon:any = 'fa-video-camera';
  btnText='SELECT';
  modelId='filterMovies';
  tabsHeads:any = [
    {
      title: 'Latest',
      url: 'http://bookingbash.com/server/api/bash/movies/?filter=latest',
      id:'latest',
      innerItem: 8,
      modelId: 'latestTrailer',
      moviePageSlider: true
    },
    {
      title: 'Comming Soon',
      url: 'http://bookingbash.com/server/api/bash/movies/?filter=coming-soon',
      id:"commingsoon",
      innerItem: 8,
      modelId: 'CommingTrailer',
      moviePageSlider: true
    },
    {
      title: 'Top Rated',
      url: 'http://bookingbash.com/server/api/bash/movies/?filter=top-rated',
      id:"toprated",
      innerItem: 8,
      modelId: 'topTrailer',
      moviePageSlider: true
    }
  ];
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
      title: 'Time',
      icon: 'fa-clock-o',
      datePicker: false,
      name: 'time'
    },
    {
      title: 'Cinema',
      icon: 'fa-film',
      datePicker: false,
      name: 'cinema'
    }
  ];
  genre:any = [
    {
      title: 'Action'
    },
    {
      title: 'Adventure'
    },
    {
      title: 'Animation'
    },
    {
      title: 'Thriller'
    }
  ];
  newMaterial=false;
  url:any = 'http://bookingbash.com/server/api/bash/featured_content/?type=movie&count=3';
  filterUrl:any = 'http://bookingbash.com/server/api/bash/filter_results/?movies=';
  genreUrl: any = 'http://bookingbash.com/server/api/bash/movies/?filter=genre&genre=';
  videourl;
  Movieurl = 'http://bookingbash.com/server/api/bash/movie_timings/?id=';
  timingLoading=true;
  filterContent;
  filterLoading=true;
  filterError = false;
  moviemodalContent;
  filterMovies=[];
  singlePage=true;
  cinemasUrl ='http://bookingbash.com/server/api/bash/movie_shows/?get=cinemas&movie_id=';
  movieTitle;
  cinemaId;

  updateUrl($event){
    this.filterLoading = true;
    this.filterError = false;
    this.newMaterial = true;
    this.filterMovies = [];
    this.getnewContent($event.bsUrl);
  }
  updateGenre($event){
    this.filterLoading = true;
    this.filterError = false;
    this.newMaterial = true;
    this.filterMovies = [];
    this.getnewContent($event.updateGenre);
  }
  getnewContent(url){
    this.appService.getContent(url).subscribe(
      data => {
        this.filterContent = data;
        delete this.filterContent['status'];
        let i = 0;
        while(this.filterContent[i]){
          this.filterMovies.push(this.filterContent[i]);
          i++;
        }
      },
      err => {this.filterError = true; this.filterLoading = false;},
      () => {this.filterLoading = false;}
    )
  }
  getSingleMovie(url){
    this.appService.getContent(url).subscribe(
      data => {
        if(data != null){
          this.moviemodalContent = data;
          delete this.moviemodalContent['status'];
          this.moviemodalContent = this.moviemodalContent.cinemas;
        }
      },
      null,
      () => {this.timingLoading = false;}
    )
  }
  movieOpen($event){
    this.moviemodalContent = '';
    this.timingLoading = true;
    this.appService.changeDates("true");
    this.appService.changeTimes("false");
    let url = this.cinemasUrl + $event.movie.id;
    this.getSingleMovie(url);
    this.movieTitle = $event.movie.title;
    this.cinemaId = $event.movie.id;
  }
  modelContent($event){
    jQuery('.detail-pop-up.video-model').attr('id', '');
    jQuery('.detail-pop-up.video-model').attr('id', this.modelId);
    this.videourl = $event.videoUrl[0];
    if(this.videourl != ''){
      this.videourl = this.videourl.replace('watch?v=', 'embed/');
      this.videourl = this.videourl + '?autoplay=1';
      jQuery('.detail-pop-up.video-model').find('.modal-body').html('<iframe width="100%" height="400px" src="'+ this.videourl +'" frameborder="0" allowfullscreen></iframe>');
    } else{
      jQuery('.detail-pop-up.video-model').find('.modal-body').html('<h4>The trailor is Comming Soon.');
    }
  }
  clicked(){
      jQuery('.detail-pop-up.video-model').on('hidden.bs.modal', function(){
        jQuery(this).find('.modal-body').html('');
      });
    }
  viewAll($event){
    this.newMaterial = false;
  }
  ngOnInit():any {
  this.newMaterial = false;
  this.appService.changeMenu('Movies');
  }

}
