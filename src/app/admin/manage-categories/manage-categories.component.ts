import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Category } from 'src/app/blogpost/category';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css']
})
export class ManageCategoriesComponent implements OnInit {
  category:Category;
  constructor(private categoryService:BlogService) { }

  ngOnInit() {
    this.categoryService.getCategoryList().subscribe(res=>{
      this.category=res;
    });
  }

}
