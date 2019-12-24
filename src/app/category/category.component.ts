import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from 'app/services/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
  visibleCategories: any[] = [];
  constructor(
    private categoryService: CategoryService
  ) {
        //this.visibleCategories = this.categoryService.getCategorys();
  }
  categories: Category[];
  filterText: string;
  today = new Date(2019, 11, 18)
  ngOnInit() {
    this.getCategories();
  }
   getCategories() {
     this.categoryService.getCategories().subscribe(data => {
       console.log(data)
       this.categories = data;
     })
  }

}
