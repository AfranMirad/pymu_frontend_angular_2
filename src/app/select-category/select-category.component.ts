import { Component, OnInit, Input, OnChanges } from '@angular/core';
//import { ImageService } from '../image/shared/image.service';
import { ActivatedRoute } from '@angular/router'
import { GaleryService } from '../services/galery.service';
import { Galery } from 'app/services/galery';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.css'],
  providers: [GaleryService]
})
export class SelectCategoryComponent implements OnInit {

  constructor(private route: ActivatedRoute,private galeryService: GaleryService) {
    console.log(this.filterBy)
    console.log(this.route.snapshot.params['category'])
  }
  
  filterBy?: number = 0
  galeries: Galery[];
  filterText: number;
  today = new Date(2019, 11, 18)
  ngOnInit() {

    if (this.route.snapshot.params['category']==null) {
      console.log("bi bok yok burda")
    }else{
      console.log(this.route.snapshot.params['category'])
    }

    this.getGaleries();
  }
  getGaleries() {
     this.galeryService.getGaleries().subscribe(data => {
       console.log(data)
       this.galeries = data;
     })
  }

}

