import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { Blogpost } from '../blogpost';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogpost-featured',
  templateUrl: './blogpost-featured.component.html',
  styleUrls: ['./blogpost-featured.component.css']
})
export class BlogpostFeaturedComponent implements OnInit {
  blogpostList:Blogpost;

  constructor(private blogpostService:BlogpostService, public router:Router) { }

  ngOnInit() {
   this.getBlogpostLists();
    
  }
getBlogpostLists(){
  this.blogpostService.getFeaturedBlogPostLists().subscribe(res=>
    {
      this.blogpostList=res;
      // console.log(this.blogpostList)
    });
}


}
