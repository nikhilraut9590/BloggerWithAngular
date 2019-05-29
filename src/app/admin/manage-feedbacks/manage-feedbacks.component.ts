import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';
import { Feedback } from 'src/app/models/feedback';

@Component({
  selector: 'app-manage-feedbacks',
  templateUrl: './manage-feedbacks.component.html',
  styleUrls: ['./manage-feedbacks.component.css']
})
export class ManageFeedbacksComponent implements OnInit {
   feedback:Feedback[];
  constructor( private feedbackService:FeedbackService) { }

  ngOnInit() {
        this.feedbackService.getAllFeedbacks().subscribe(response=>{
            this.feedback=response;
     });
  }

  // onDelete(id:number){
  //   if(confirm("Are you sure want to delete feedback id "+id)){
  //     this.blogService.deleteFeedback(id).subscribe(
  //       res=>{console.log(res);
  //       this.ngOnInit();},
  //       error=>{
  //         console.log(error);
  //       }
  //     );
  //   }
  // }
}
