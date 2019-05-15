import { Component, OnInit } from '@angular/core';
import { Blogpost } from '../blogpost';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-blogpost-recent',
  templateUrl: './blogpost-recent.component.html',
  styleUrls: ['./blogpost-recent.component.css']
})
export class BlogpostRecentComponent implements OnInit {
  blogs:Blogpost;

  constructor(private blogpostService:BlogpostService) { }

  ngOnInit() {
    this.blogpostService.getBlogPostLists().subscribe((res:Blogpost)=>{
      this.blogs=res;
      
    })
  }

}
