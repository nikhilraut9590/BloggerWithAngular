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
  blogAPI = "http://localhost:8088/api/blog/";

  blogs: Blog;

  constructor(private http: HttpClient) {

  }

  getAllBlogs(): Observable<Blog> {
    return this.http.get<Blog>(`${this.blogAPI}`);
  }

  getBlog(id: number) {

    return this.http.get<Blog>(this.blogAPI+ id).pipe(

      catchError(this.handleError)
    );

  }

  createBlog(blog) {
    alert(blog);
    return this.http.post<any>(this.blogAPI, blog)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateBlog(blog, id: number) {
    return this.http.post<any>(this.blogAPI + '/' + id, blog)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteBlog(id: number) {
    return this.http.delete(this.blogAPI + 'blogs/' + id).pipe(
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

  getCategoryList(): Observable<Category> {
    return this.http.get<Category>(`${this.blogAPI}category`);
  }


  /* // Feedback functions
  getFeedbackList(): Observable<any> {
    return this.http.get<any>(`${this.adminServerURL}contact`);
  }

  deleteFeedback(id: number) {
    return this.http.delete(this.adminServerURL + 'contact/' + id).pipe(
      catchError(this.handleError)
    ); 
  }*/
}

