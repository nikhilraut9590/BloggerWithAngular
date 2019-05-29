import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { map } from 'rxjs/operators';
import { Blog } from 'src/app/models/blog';
import { FeedbackService } from 'src/app/services/feedback.service';
import { Feedback } from 'src/app/models/feedback';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  Blogs: Blog[] = [];
  activeBlogs: Blog[] = [];
  feedbacks: Feedback[] = [];
  constructor(private blogservice: BlogService, private feedbackService: FeedbackService) {

  }

  ngOnInit() {
    this.getAllBlogs();
    this.getAllFeedbacks();
  }

  private getAllBlogs() {
    this.blogservice.getAllBlogs().subscribe(response => {
      this.Blogs = response;
      this.Blogs.forEach(element => {
        if (element.is_active) {
          this.activeBlogs.push(element);
        }
      });
    });
  }

  private getAllFeedbacks() {
    this.feedbackService.getAllFeedbacks().subscribe(response => {
      this.feedbacks = response;
    })
  }
}
