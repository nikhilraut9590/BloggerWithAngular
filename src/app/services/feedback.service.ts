import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Feedback } from '../models/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  feedbackAPI = "http://localhost:8088/api/feedback";
  constructor(private http:HttpClient) { }

  getAllFeedbacks():Observable<Feedback>{
    console.log("feedback service..");
      return this.http.get<Feedback>(this.feedbackAPI);
  }
}
