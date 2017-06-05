import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cast-slider',
  templateUrl: './cast-slider.component.html',
  styleUrls: ['./cast-slider.component.css']
})
export class CastSliderComponent implements OnInit {
  @Input() content;
  first = [];
  second = [];
  third = [];

  constructor() {
  }

  ngOnInit():any {
    let i = 0;
    while(this.content[i]){
      if(i <= 2){
        this.first.push(this.content[i]);
      } else if(i <= 5){
        this.second.push(this.content[i]);
      } else if(i <= 8){
        this.third.push(this.content[i]);
      }
      i++;
    }
  }

}
