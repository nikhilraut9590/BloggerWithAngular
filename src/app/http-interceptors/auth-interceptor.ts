import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor{
    constructor(private authService:AuthService){}

    intercept(req:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       if(this.authService.isLoggedIn){
           const authToken=this.authService.getAuthorizationtoken();

        //    req=req.clone({
        //        setHeaders:{
        //            Authorization
        //        }
        //    })
       }
       return next.handle(req);

    }
}
