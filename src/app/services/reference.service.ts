import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Reference } from './reference';
import { Observable } from 'rxjs';

@Injectable()
export class ReferenceService {

  constructor(private http: HttpClient) { }
  path: string = "https://constructionworks.herokuapp.com/reference/"
  getReferences(): Observable<Reference[]> {
    return this.http.get<Reference[]>(this.path)
  }
}
