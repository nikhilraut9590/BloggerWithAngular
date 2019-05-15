import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CmspageService {
contactURL="http://localhost:3000/contact";

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  contactForm(formdata: Contact) {
    console.log(formdata);
    return this.http.post<Contact>(this.contactURL, formdata);
  }

}
