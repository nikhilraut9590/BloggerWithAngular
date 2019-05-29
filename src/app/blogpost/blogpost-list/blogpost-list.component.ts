import { Component, OnInit } from '@angular/core';
import { Blogpost } from '../blogpost';
import { BlogpostService } from '../blogpost.service';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {
  title="Blogs";
  blogs:Blog;

  constructor(private blogService:BlogService) { }

  ngOnInit() {
    this.getAllBlogs();
    this.blogService.getBlog(1).subscribe(res=>{
      
    })
  }
  getAllBlogs(){
    this.blogService.getAllBlogs().subscribe(response=>{
      this.blogs=response;
    })
  }
}
