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
  private apiURL="http://localhost:3000/";

  private springBootAPI="http://localhost:8088/api";

  blog:Blog[];
    getExtBlog(){
      console.log("rest>>>");
      return this.http.get(`${this.springBootAPI}/blog`);
    }


  errorData:{};

  constructor(private http:HttpClient) {
   
    this.getExtBlog().subscribe((res:Blog[])=>{
      this.blog=res;
    })
   }

  getBlogPostLists():Observable<Blogpost>{
    return this.http.get<Blogpost>(`${this.apiURL}blogs`);
  }
  getFeaturedBlogPostLists():Observable<Blogpost>{
    return this.http.get<Blogpost>(`${this.apiURL}featured-blogs`);
  }

  getBlogById(id:number){
    return this.http.get<Blogpost>(`${this.apiURL}blogs/`+id);
  }

  getCategory():Observable<Category>{
    return this.http.get<Category>(`${this.apiURL}category`);
  }
  
  
}
