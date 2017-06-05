import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'bs-loader',
  templateUrl: './bs-loader.component.html',
  styleUrls: ['./bs-loader.component.css']
})
export class BsLoaderComponent implements OnInit, OnDestroy {
  @Input() isLoading:any = true;
  @Input() error:any = false;
  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy():any {
    this.isLoading = true;
    this.error = false;
  }
}
