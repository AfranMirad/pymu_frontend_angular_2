import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Category } from './category';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }
  path: string = "https://constructionworks.herokuapp.com/category/"
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path)
  }
}
