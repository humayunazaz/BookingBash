import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponentComponent } from './blog-component.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';

const blogRoutes: Routes = [
  {
    path: 'blogs',
    component: BlogComponentComponent
  },
  {
    path: 'single-blog/:id',
    component: SingleBlogComponent
  },
]

@NgModule({
  imports: [ RouterModule.forChild(blogRoutes)],
  exports: [ RouterModule ]
})

export class blogRoutingModule{

}
