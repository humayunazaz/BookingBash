import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../app-service.service';
import { DateSeparatorPipe } from '../../date-separator-pipe.pipe';

declare var jQuery:any;

@Component({
  selector: 'bs-nav-menu',
  templateUrl: './bsnav-menu.component.html',
  styleUrls: ['./bsnav-menu.component.css']
})
export class BsnavMenuComponent implements OnInit {

  constructor(private appService:AppService) { }

  @Input() filterInput: any;
  @Input() genre:any;
  @Input() url:any;
  @Input() filterUrl:any = '';
  @Input() genreUrl:any = '';
  @Output() updateUrl = new EventEmitter();
  @Output() updateGenre = new EventEmitter();
  featured:any = [];
  sortFeatured:any = [];
  newUrl;
  empty;
  submit(form){
    this.empty = true;
    let i = 0;

    while(this.filterInput[i]){
      let FilterValue = form.controls[this.filterInput[i].name].value;
      let FilterName =  this.filterInput[i].name;
      if(this.filterInput[i].datePicker){
        if(FilterValue.formatted == undefined){
          FilterValue = '';
        } else{
          FilterValue = FilterValue.formatted;
        }
      }
      if(form.controls[this.filterInput[0].name].value != ''){
        this.empty = false;
      }
      if(i == 0){
        this.newUrl = this.filterUrl + FilterValue;
      } else if(FilterValue != ''){
        this.newUrl = this.newUrl + '&' + FilterName + '=' + FilterValue;
      } else{
        this.newUrl = this.newUrl + '&' + FilterName + '=NA';
      }
      i++;
    }
    if(!this.empty){
      this.updateUrl.emit({bsUrl: this.newUrl});
    } else{
      this.newUrl = '';
      i = 0;
    }
  }
  genreClick(content){
    let url = this.genreUrl + content.title.toLowerCase();
    this.updateGenre.emit({updateGenre : url});
    console.log(content.title.toLowerCase());
  }

  getContent(url){
    this.appService.getContent(url).subscribe(
      featured => {
        delete featured['status'];
        this.featured = featured;

        let i = 0;
        while(i <= 2){
          this.sortFeatured.push(this.featured[i]);
          i++;
        };
      }
    )
  }
  ngOnInit():any {
    this.getContent(this.url);
  }

}
