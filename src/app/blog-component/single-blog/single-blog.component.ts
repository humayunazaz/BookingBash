import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../../app-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit, OnDestroy {
  blogUrl='http://bookingbash.com/server/api/bash/blog_posts';
  singleUrl='http://bookingbash.com/server/api/bash/blog_posts/?slug=';
  id;
  blogIds=[];
  singleBlog;
  mainSliderUrl:any = 'http://bookingbash.com/server/api/bash/homepage_slider';
  isLoading=true;
  error=false;
  singleDescription;
  singleDate;
  prevId;
  nextId;
  updateUrl;
  slug;
  blogContent=[];

  constructor(private appService:AppService, private route:ActivatedRoute, private router:Router) { }

  getContent(blogUrl, singleUrl){
    var content = Observable.forkJoin(
      this.appService.getContent(blogUrl),
      this.appService.getContent(singleUrl)
    ).subscribe(
      data => {
        let i = 0;
        while(data[0][i]){
          this.blogContent.push(data[0][i]);
          this.blogIds.push(data[0][i].id);
          i++;
        }
        this.blogMagic(data[1]);
      },
      err => {this.isLoading = false; this.error = true;},
      () => {this.isLoading = false;}
    )
  }
  blogMagic(singleBlog){
    this.singleBlog = singleBlog;
    if(this.singleBlog.status){
      delete this.singleBlog['status'];
    }
    if(this.singleBlog.post){
      this.singleBlog = this.singleBlog.post;
    }
    this.id = this.singleBlog.id;
    this.singleDescription = this.singleBlog.excerpt.replace("<p>", " ").replace("</p>", " ");
    this.singleDate = this.singleBlog.date.substr(0, 10);
    this.prevId = this.blogIds[this.blogIds.indexOf(this.id) - 1];
    this.nextId = this.blogIds[this.blogIds.indexOf(this.id) + 1];
    console.log(JSON.stringify(singleBlog));
  }
  gettingContent(url, value){
    this.updateUrl = url + value;
    this.getContent(this.blogUrl, this.updateUrl);
  }

  gotoSingleBlog(id){
      let i = 0;
      let blogSlug;
      let newContent;
      while(this.blogContent[i]){
        if(this.blogContent[i].id == id){
          blogSlug = this.blogContent[i].slug;
          newContent = this.blogContent[i];
        }
        i++;
      }
      console.log(JSON.stringify(newContent));
      this.router.navigate(['single-blog', blogSlug]);
      this.blogMagic(newContent);
  }

  ngOnInit():any {
    this.appService.changeMenu('Blogs');
    var subscription = this.route.params.subscribe(
      (params: Params) => {
        this.slug = params['id'];
      }
    )
    this.gettingContent(this.singleUrl, this.slug);
  }

  ngOnDestroy():any {
  }
}
