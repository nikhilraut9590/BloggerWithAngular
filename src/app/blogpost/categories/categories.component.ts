import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { Category } from '../category';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:Category;
  constructor(private blogservice:BlogService) { }

  ngOnInit() {
    this.blogservice.getCategoryList().subscribe(response=>{
      this.categories=response}
      )
  }

}
