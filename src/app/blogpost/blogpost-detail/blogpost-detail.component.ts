import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlogpostService } from '../blogpost.service';
import { Observable } from 'rxjs';
import { Blogpost } from '../blogpost';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogpost-detail',
  templateUrl: './blogpost-detail.component.html',
  styleUrls: ['./blogpost-detail.component.css']
})
export class BlogpostDetailComponent implements OnInit {
  blog:Observable<Blog>;
  constructor(private route:ActivatedRoute, private blogService:BlogService) { }

  ngOnInit() {
    this.blog=this.route.paramMap.pipe(
      switchMap((params:ParamMap)=>
      this.blogService.getBlog(+params.get('id')))
      );
      // console.log(">>>: "+this.blog);

     
  }

}
