import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bs-modal',
  templateUrl: './bs-modal.component.html',
  styleUrls: ['./bs-modal.component.css']
})
export class BsModalComponent implements OnInit {

  constructor() { }
  @Input() modalId='';
  ngOnInit() {
  }

}
