import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'auto-comp',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
filteredList:any = [];
gigs=[];
query="";
url='http://bookingbash.com/server/api/bash/search_bar/';

  constructor(private appService:AppService, private router:Router) {
  }

  getContent(url){
    this.appService.getContent(url).subscribe(
      data => {
        delete data['status'];
        let i = 0;
        while(data[i]){
          if(data[i] != undefined){
            this.gigs.push(data[i]);
          }
          i++;
        }
      }
    )
  }
  filter(){
    if(this.query != ""){
      this.filteredList = this.gigs.filter( gig => {
        return gig.title.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
      });
    } else {
        this.filteredList = [];
    }
  }
  gotoSingle(value){
    this.filteredList = [];
    this.query = '';
    if (value.type == 'movie') {
        let link = ['single-movie', value.slug ];
        this.router.navigate(link);
    }
    if(value.type == 'event'){
        let link = ['events'];
        this.router.navigate(link);
    }
    if(value.type == 'activity'){
        let link = ['activities', value.slug ];
        this.router.navigate(link);
    }
    if(value.type == 'dj'){
        let link = ['djs', value.slug ];
        this.router.navigate(link);
    }
    if(value.type == 'club'){
        let link = ['nightlife', value.slug ];
        this.router.navigate(link);
    }
  }
  ngOnInit():any {
    this.getContent(this.url);
  }

}
