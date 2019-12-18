import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../image/shared/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  visibleCategories: any[] = [];
  constructor(private categoryService: CategoryService) {
    this.visibleCategories = this.categoryService.getCategorys();
  }

  ngOnInit() {
  }

}
