import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ImageService } from '../image/shared/image.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.css']
})
export class SelectCategoryComponent {

  filterBy?: string = 'all'
  visibleImages: any[] = [];
  image: any
  constructor(private imageService: ImageService, private route: ActivatedRoute) {
    this.visibleImages = this.imageService.getImages();
    console.log(this.route.snapshot.params['category'])
    var filterBy = this.route.snapshot.params['category']

  }

  ngOnInit() {
    this.visibleImages = this.imageService.getImages();
    console.log(this.route.snapshot.params['category'])
    this.filterBy = this.route.snapshot.params['category']
  }

}
