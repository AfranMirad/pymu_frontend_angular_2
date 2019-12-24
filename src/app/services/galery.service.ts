import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Galery } from './galery';
import { Observable } from 'rxjs';

@Injectable()
export class GaleryService {

  constructor(
    private http: HttpClient
  ) { }
  path: string = "https://constructionworks.herokuapp.com/jobs/"
  getGaleries(): Observable<Galery[]> {
    return this.http.get<Galery[]>(this.path)
  }

  /*
  Bu kısım ikinci bir çözüm içindir


  
  path: string = "https://constructionworks.herokuapp.com/"

  getGaleries(userid):Observable<Galery[]> {
    if (**userid) {                                                                         Bu veri değişecek
      return this.http.get<Galery[]>(this.path + "jobs?userId=" + **userid)
    } else {
      return this.http.get<Galery[]>(this.path + "jobs")
    }

  }
  */
}
