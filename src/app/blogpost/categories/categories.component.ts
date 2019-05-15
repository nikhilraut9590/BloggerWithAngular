import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { Category } from '../category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:Category;
  constructor(private blogpostservice:BlogpostService) { }

  ngOnInit() {
    this.blogpostservice.getCategory().subscribe(response=>{
      this.categories=response}
      )
  }

}
