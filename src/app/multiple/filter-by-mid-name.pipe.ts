import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByMidName'
})
export class FilterByMidNamePipe implements PipeTransform {
  transform(items: any[], midName: string): any[] {
    if (!items) return [];
    if (!midName) return items;
    return items.filter(item => item.mid_name === midName);
  }
}
