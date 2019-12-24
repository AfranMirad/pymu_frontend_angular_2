import { Component, OnInit, Input, OnChanges } from '@angular/core';
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

  constructor(private route: ActivatedRoute, private galeryService: GaleryService) {}

  filterBy?: number = 0
  galeries: Galery[];
  ngOnInit() {
    this.getGaleries();
    console.log(this.route.snapshot.params['category'])
    this.filterBy = this.route.snapshot.params['category']
  }
  getGaleries() {
    this.galeryService.getGaleries().subscribe(data => {
      console.log(data)
      this.galeries = data;
    })
  }

}

