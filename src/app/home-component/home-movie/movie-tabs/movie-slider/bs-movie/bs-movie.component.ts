import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bs-movie',
  templateUrl: './bs-movie.component.html',
  styleUrls: ['./bs-movie.component.css']
})
export class BsMovieComponent implements OnInit {
  @Input() Smovie:any;
  @Input() btnText:any;
  @Input() modelId:any;
  @Input() profileView = false;
  @Output() modelContent = new EventEmitter();
  @Output() movieId = new EventEmitter();
  @Output() profile = new EventEmitter();
  facebook='facebook';
  twitter='twitter';
  profilePost;
  open_popup(url){
    this.modelContent.emit({videoUrl: url});
  }
  constructor(private router:Router) {
  }
  gotoSingle(Smovie){
    // console.log(JSON.stringify(Smovie));
    let id:string = Smovie.slug.toLowerCase();
    this.router.navigate(['single-movie', id]);
  }
  movieTiming(id){
    this.movieId.emit({movie : id});
  }
  profileClick(content){
    this.profile.emit({book : content});
  }
  ngOnInit() {
    if(this.profileView && this.Smovie.excerpt){
      this.profilePost = this.Smovie.excerpt.toString().replace('<p>', "").replace("</p>", "");
    }
  }

}
