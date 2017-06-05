import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


declare var jQuery:any;

@Component({
  selector: 'single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {
  singleMovie;
  isLoading = true;
  error;
  url = 'http://bookingbash.com/server/api/bash/movies/?id=';
  monthlyEvent = 'http://bookingbash.com/server/api/bash/featured_content/?type=event&filter=month';
  id:string;
  singleUrl;
  trailor;
  code;
  trailorThumb;
  modelId = 'singleTrailor';
  movieYear;
  movieDesc;
  rating;
  singleData = [];
  castContent = [];
  eventContent;
  eventLoading = true;
  eventError = false;
  movieContent;
  movieModal = false;
  Movieurl = 'http://bookingbash.com/server/api/bash/movie_timings/?id=';
  timingLoading=true;
  cinemasUrl ='http://bookingbash.com/server/api/bash/movie_shows/?get=cinemas&movie_id=';
  movieTitle;
  cinemaId;
  constructor(private appService:AppService, private route:ActivatedRoute, private router:Router) { }

  getContent(url){
    this.appService.getContent(url).subscribe(
      data => {
        this.singleMovie = data;
        delete this.singleMovie['status'];
        let i = 0;

        while(this.singleMovie.cast[i]){
          this.castContent.push(this.singleMovie.cast[i]);
          i++;
        }
        this.singleMovie = this.singleMovie.post;
        this.trailor = this.singleMovie.custom_fields.trailer.toString();
        this.trailor = this.trailor.replace('watch?v=', 'embed/') + '?autoplay=1';
        this.code = this.trailor.substr(30, 11);
        this.trailorThumb = "http://img.youtube.com/vi/" + this.code + "/sddefault.jpg";
        this.movieYear = this.singleMovie.custom_fields.release_date.toString().substr(2, 4);
        this.movieDesc = this.singleMovie.excerpt.toString().replace("<p>", "").replace("</p>", "");
        this.rating = this.singleMovie.custom_fields.rating;
        this.rating = (this.rating / 10) * 100;
        this.rating = this.rating.toFixed(0);
      },
      err => {this.isLoading = false; this.error = true;},
      () => {this.isLoading = false;}
    )
  }
  getEvent(url){
    this.appService.getContent(url).subscribe(
      data => {
        delete data['status'];
        let i = 0;
        while(data[i]){
          this.eventContent.push(data[i]);
          i++;
        }
      },
      err => {this.eventLoading = false; this.eventError = true;},
      () => {this.eventLoading = false;}
    )
  }
  open_popup(){
    jQuery('.detail-pop-up.video-model').attr('id', '');
    jQuery('.detail-pop-up.video-model').attr('id', this.modelId);
    jQuery('.detail-pop-up.video-model').find('.modal-body').html('<iframe height="400" width="100%" src="' + this.trailor + '"frameborder="0" allowfullscreen></iframe>');
  }
  gotoevents(){
    this.router.navigate(['events']);
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
  movieTiming(){
    this.movieContent = '';
    this.timingLoading = true;
    this.appService.changeDates("true");
    this.appService.changeTimes("false");
    let url = this.cinemasUrl + this.singleMovie.id;
    this.getSingleMovie(url);
    this.movieTitle = this.singleMovie.title;
    this.cinemaId = this.singleMovie.id;
  }
  clicked(){
      jQuery('.detail-pop-up.video-model').on('hidden.bs.modal', function(){
        jQuery(this).find('.modal-body').html('');
      });
    }
  ngOnInit():any {
    this.appService.changeMenu('Movies');
    var subscription = this.route.params.subscribe(
      (params:Params) => {
        this.id = params['id'];
      }
    )
    this.singleUrl = this.url + this.id;

    this.getContent(this.singleUrl);
    this.getEvent(this.monthlyEvent);
  }

}
