import { Injectable, OnInit } from '@angular/core';
import { Blogpost } from '../blogpost/blogpost';
import { BlogpostService } from '../blogpost/blogpost.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Blog } from '../models/blog';
import { catchError } from 'rxjs/operators';
import { Category } from '../blogpost/category';



@Injectable({
  providedIn: 'root'
})
export class BlogService {
  adminServerURL = "http://localhost:3000/";

  blogs: Blogpost;

  constructor(private http:HttpClient) {
   
   }

  getBlogs() {
    return this.http.get<Blogpost>(`${this.adminServerURL}blogs`);
    }

    getBlog(id: number) {
    
      return this.http.get<Blog>(this.adminServerURL + 'blogs/' + id).pipe(
        
        catchError(this.handleError)
      );
     
    }
  
    createBlog(blog) {
      return this.http.post<any>(this.adminServerURL + 'blogs', blog)
      .pipe(
        catchError(this.handleError)
      );
    }
  
    updateBlog(blog, id: number) {
      return this.http.post<any>(this.adminServerURL + 'blogs' + id, blog)
      .pipe(
        catchError(this.handleError)
      );
    }
  
    deleteBlog(id: number) {
      return this.http.delete(this.adminServerURL + 'blogs' + id).pipe(
        catchError(this.handleError)
      );
    }
    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
  
        // A client-side or network error occurred. Handle it accordingly.
  
        console.error('An error occurred:', error.error.message);
      } else {
  
        // The backend returned an unsuccessful response code.
  
        // The response body may contain clues as to what went wrong.
  
        console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
      }
  
      // return an observable with a user-facing error message
  
      return throwError('Something bad happened. Please try again later.');
    }

    getCategoryList():Observable<Category>{
     return this.http.get<Category>(`${this.adminServerURL}category`);
    }
    
  }

