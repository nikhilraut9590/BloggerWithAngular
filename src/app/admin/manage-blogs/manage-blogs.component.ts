import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Blogpost } from 'src/app/blogpost/blogpost';
import { Blog } from 'src/app/models/blog';

@Component({
  selector: 'app-manage-blogs',
  templateUrl: './manage-blogs.component.html',
  styleUrls: ['./manage-blogs.component.css']
})
export class ManageBlogsComponent implements OnInit {
  error:string;
  blogs:Blog;
  constructor(private blogService:BlogService) { }

  ngOnInit() {
    this.blogService.getAllBlogs().subscribe(response=>{
      this.blogs=response;
    });

    
  }
  onDelete(id: number) {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.blogService.deleteBlog(+id).subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
        error => this.error = error
      );
    }
  }

 
}
