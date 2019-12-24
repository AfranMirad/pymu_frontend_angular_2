import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'imageFilter'})
export class ImageFilterPipe implements PipeTransform {
  transform(items: any[], criteria: number): any {
    if(criteria === 0){ return items } else
    return items.filter(item =>{
      return item.category === criteria;
    });
  }
}
