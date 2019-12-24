import { Component, OnInit } from '@angular/core';
import { ReferenceService } from '../services/reference.service';
import { Reference } from '../services/reference';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css'],
  providers: [ReferenceService]
})
export class ReferenceComponent implements OnInit {

  constructor(private referenceService: ReferenceService) { }
  references: Reference[];
  today = new Date(2019, 11, 18)

  ngOnInit() {
    this.getReference();
  }
   getReference() {
     this.referenceService.getReferences().subscribe(data => {
       console.log(data)
       this.references = data;
     })
  }
}