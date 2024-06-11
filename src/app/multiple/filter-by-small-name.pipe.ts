import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBySmallName'
})
export class FilterBySmallNamePipe implements PipeTransform {
  transform(items: any[], smallName: string): any[] {
    if (!items) return [];
    if (!smallName) return items;
    return items.filter(item => item.small_name === smallName);
  }
}
