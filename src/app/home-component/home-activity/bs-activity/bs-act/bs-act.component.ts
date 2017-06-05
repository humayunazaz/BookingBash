import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bs-act',
  templateUrl: './bs-act.component.html',
  styleUrls: ['./bs-act.component.css']
})
export class BsActComponent implements OnInit {

  constructor() { }
  @Input() content:any;
  @Input() modelId:any;
  @Output() modelContent = new EventEmitter();
  @Output() lora = new EventEmitter();
  facebook='facebook';
  twitter='twitter';
  gotoModel($event){
    this.modelContent.emit({Content: $event});
  }
  goto(content){
    this.lora.emit({id: content.title});
  }

  ngOnInit() {
  }

}
