import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Blogpost } from './blogpost';
import { Category } from './category';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {
  //private blogAPI="http://localhost:3000/";

  // private blogAPI="http://localhost:8088/api/blog";

  // blog:Blog[];
  // errorData:{};

  // constructor(private http:HttpClient) {
   
  //   // this.getExtBlog().subscribe((res:Blog[])=>{
  //   //   this.blog=res;
  //   // })
  //  }

  // getBlogPostLists():Observable<Blog>{
  //   return this.http.get<Blog>(`${this.blogAPI}`);
  // }
  // getFeaturedBlogPostLists():Observable<Blogpost>{
  //   return this.http.get<Blogpost>(`${this.blogAPI}featured-blogs`);
  // }

  // getBlogById(id:number){
  //   return this.http.get<Blogpost>(`${this.blogAPI}blogs/`+id);
  // }

  // getCategory():Observable<Category>{
  //   return this.http.get<Category>(`${this.blogAPI}category`);
  // }
  
  
}
