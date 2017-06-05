import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bs-foot',
  templateUrl: './bs-foot.component.html',
  styleUrls: ['./bs-foot.component.css']
})
export class BsFootComponent implements OnInit {

  constructor(private router:Router) { }
  @Input() content:any = [];
  clicked(value){
    if(value == 'Contact us'){
      this.router.navigate(['contact']);
    } else if(value == 'Lifestyle Activities'){
      this.router.navigate(['activities']);
    } else{
      value = value.toLowerCase();
      this.router.navigate([value]);
    }
  }
  ngOnInit() {
  }

}
