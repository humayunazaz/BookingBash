import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-movie',
  templateUrl: './home-movie.component.html',
  styleUrls: ['./home-movie.component.css']
})
export class HomeMovieComponent implements OnInit {
  head:any = 'Movies';
  icon:any = 'fa-video-camera';
  btnText:any = [
    {
      title: 'explore and schedule movies',
      redbtn: false
    }
  ];
  tabsHeads:any = [
    {
      title: 'Latest',
      url: 'http://bookingbash.com/server/api/bash/movies/?filter=latest',
      id:'latest',
      innerItem: 5,
      modelId: 'latestTrailer',
      moviePageSlider: false
    },
    {
      title: 'Comming Soon',
      url: 'http://bookingbash.com/server/api/bash/movies/?filter=coming-soon',
      id:"commingsoon",
      innerItem: 5,
      modelId: 'CommingTrailer',
      moviePageSlider: false
    },
    {
      title: 'Top Rated',
      url: 'http://bookingbash.com/server/api/bash/movies/?filter=top-rated',
      id:"toprated",
      innerItem: 5,
      modelId: 'topTrailer',
      moviePageSlider: false
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
