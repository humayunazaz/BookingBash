import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../app-service.service';

@Component({
  selector: 'activity-modal',
  templateUrl: './activity-modal.component.html',
  styleUrls: ['./activity-modal.component.css']
})
export class ActivityModalComponent implements OnInit {

  constructor(private appService:AppService) { }

  @Input() modelId:any = '';
  @Input() modalContent:any = '';
  @Input() modalGallery:any = [];
  @Input() modelTitle:any ='';
  @Input() modelImg:any = '';
  @Input() prevId:any;
  @Input() nextId:any;
  @Input() activityIds;
  @Input() url:any = '';
  @Input() isLoading:any = false;
  @Input() error:any = false;
  @Input() profileView = false;
  @Output() Idmodel = new EventEmitter();

  newContent:any;

  gotoNew(id){
    this.Idmodel.emit({Id : id});
  }

  ngOnInit() {
  }

}
