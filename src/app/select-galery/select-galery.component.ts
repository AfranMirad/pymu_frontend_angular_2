import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { GaleryService } from '../services/galery.service';
import { Galery } from 'app/services/galery';

@Component({
  selector: 'app-select-galery',
  templateUrl: './select-galery.component.html',
  styleUrls: ['./select-galery.component.css'],
  providers: [GaleryService]
})
export class SelectGaleryComponent implements OnInit {

  constructor(private route: ActivatedRoute, private galeryService: GaleryService) { }
  filterBy?: number = 0
  galeries: Galery[];
  ngOnInit() {
    this.getGaleries();
    console.log(this.route.snapshot.params['galery'])
    this.filterBy = this.route.snapshot.params['galery']
  }
  getGaleries() {
    this.galeryService.getGaleries().subscribe(data => {
      console.log(data)
      this.galeries = data;
    })
  }
}
