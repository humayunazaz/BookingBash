import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bs-active',
  templateUrl: './bs-active.component.html',
  styleUrls: ['./bs-active.component.css']
})
export class BsActiveComponent implements OnInit {

  constructor() { }
  @Input() activity:any = '';
  @Output() modelContent = new EventEmitter();
  @Input() modelId:any = ' ';
  facebook='facebook';
  twitter='twitter';
  openModel(activity){
      this.modelContent.emit({Content : activity});
  }

  ngOnInit() {
  }

}
