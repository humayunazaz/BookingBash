import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'section-head',
  templateUrl: './section-heading.component.html',
  styleUrls: ['./section-heading.component.css']
})
export class SectionHeadingComponent implements OnInit {
  @Input() head:any = 'heading';
  @Input() icon:any;
  @Input() singlePage = false;
  @Output() viewAll = new EventEmitter();

  constructor(private router:Router) { }
  goto(head){
    if(this.singlePage == true){
      this.viewAll.emit({head});
    } else{
      let link = head.toLowerCase();
      this.router.navigate([link]);
    }
  }
  ngOnInit() {
  }

}
