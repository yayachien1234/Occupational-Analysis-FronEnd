import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByBigName'
})
export class FilterByBigNamePipe implements PipeTransform {
  transform(items: any[], bigName: string): any[] {
    if (!items) return [];
    if (!bigName) return items;
    return items.filter(item => item.big_name === bigName);
  }
}
