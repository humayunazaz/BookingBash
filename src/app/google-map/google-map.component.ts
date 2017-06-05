import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  @Input() mapContent;
  lat=25.2122424;
  lng=55.2480122;
  zoom=10;
  scrollwheel= false;
  constructor() { }

  ngOnInit() {
  }

}
