import { Component, OnInit } from '@angular/core';
import { Blogpost } from '../blogpost';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {
  title="Blogs";
  blogs:Blogpost;

  constructor(private blogpostService:BlogpostService) { }

  ngOnInit() {
    this.getBlogpostList();
    this.blogpostService.getBlogById(1).subscribe(res=>{
      
    })
  }
  getBlogpostList(){
    this.blogpostService.getBlogPostLists().subscribe(response=>{
      this.blogs=response;
    })
  }
}
