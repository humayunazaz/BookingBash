import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bs-blog',
  templateUrl: './bs-blog.component.html',
  styleUrls: ['./bs-blog.component.css']
})
export class BsBlogComponent implements OnInit {

  constructor(private router:Router) { }
  @Input() blog:any = '';

  gotoSingleBlog(blog){
    let link = ['/single-blog', blog.slug];
    this.router.navigate(link);
  }
  ngOnInit() {
  }

}
