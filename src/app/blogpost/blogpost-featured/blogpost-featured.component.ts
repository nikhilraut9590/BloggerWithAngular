import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { Blogpost } from '../blogpost';
import { Router } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogpost-featured',
  templateUrl: './blogpost-featured.component.html',
  styleUrls: ['./blogpost-featured.component.css']
})
export class BlogpostFeaturedComponent implements OnInit {
  blog: Blog[];
  constructor(private blogService: BlogService, public router: Router) { }

  ngOnInit() {
    this.getBlogLists();

  }
  getBlogLists() {
    this.blogService.getAllBlogs().subscribe(response => {
      this.blog = response;
    });
  }
}
