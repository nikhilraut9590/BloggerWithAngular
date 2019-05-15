import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  serverURL="http://localhost:3000";
  isLoggedIn=false;
  redirectUrl:string;
  constructor(private http:HttpClient) { }

  login(username:string, password:string){
      return this.http.post<any>(`${this.serverURL}users`,{username:username,password:password})
      .pipe(map(user=>{
        if(user && user.token){
          localStorage.setItem('currentUser',JSON.stringify(user));
          this.isLoggedIn=true;
        }
      }))
  }

  getAuthorizationtoken(){
    const currentUser=JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.token;
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.isLoggedIn=false;
  }

}
