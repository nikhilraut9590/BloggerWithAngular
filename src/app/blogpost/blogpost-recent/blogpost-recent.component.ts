import { Component, OnInit } from '@angular/core';
import { Blogpost } from '../blogpost';
import { BlogpostService } from '../blogpost.service';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogpost-recent',
  templateUrl: './blogpost-recent.component.html',
  styleUrls: ['./blogpost-recent.component.css']
})
export class BlogpostRecentComponent implements OnInit {
  blogs:Blog[];

  constructor(private blogService:BlogService) { }

  ngOnInit() {
    this.blogService.getAllBlogs().subscribe(response=>{
      this.blogs=response;
    });
      
    
  }

}
