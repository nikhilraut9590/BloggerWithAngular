import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlogpostService } from '../blogpost.service';
import { Observable } from 'rxjs';
import { Blogpost } from '../blogpost';

@Component({
  selector: 'app-blogpost-detail',
  templateUrl: './blogpost-detail.component.html',
  styleUrls: ['./blogpost-detail.component.css']
})
export class BlogpostDetailComponent implements OnInit {
  blog:Observable<Blogpost>;
  constructor(private route:ActivatedRoute, private blogpostService:BlogpostService) { }

  ngOnInit() {
    this.blog=this.route.paramMap.pipe(
      switchMap((params:ParamMap)=>
      this.blogpostService.getBlogById(+params.get('id')))
      );
      // console.log(">>>: "+this.blog);

     
  }

}
