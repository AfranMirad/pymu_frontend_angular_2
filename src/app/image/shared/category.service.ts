import { Injectable } from '@angular/core'

@Injectable()
export class CategoryService{
    visibleCategories = [];

    getCategorys(){
        return this.visibleCategories = CATEGORİES.slice(0);
    }

    getCategory(id: number){
        return CATEGORİES.slice(0).find(category => category.id == id)
    }
}

const CATEGORİES =[
    
    {"id":1, "category": "all", "caption": "all", "url":"assets/img/hepsi.jpg","aciklama":"all"},
    {"id":2, "category": "camping", "caption": "camping", "url":"assets/img/boya.jpg","aciklama":"sadece camping"},
    {"id":3, "category": "library", "caption": "library", "url":"assets/img/alçı.jpg","aciklama":"sadece library"},
    {"id":4, "category": "boats", "caption": "boats", "url":"assets/img/fayans.jpg","aciklama":"sadece boats"}
]
