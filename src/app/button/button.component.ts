import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bs-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() btnText:any = [];
  @Input() routerValue="";

  constructor() { }
  ngOnInit() {
  }

}
