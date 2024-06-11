import { Component } from '@angular/core';
import { data } from './data.const';
@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrl: './multiple.component.css'
})
export class MultipleComponent {
  dropdownContainers = [{id: 0}]; // 初始的一個 dropdown-container

  addDropdownContainer() {
    this.dropdownContainers.push({id: this.dropdownContainers.length});
  }

  list = data;
  selectedOptionText0: string = '';
  selectedOptionText1: string = '';
  selectedOptionText2: string = '';

  bigNames: string[] = Array.from(new Set(data.map(item => item.big_name)));
  midNames: string[] = this.getMidNames('');
  smallNames: string[] =this.getSmallNames('','');

  getMidNames(bigName: string): string[] {
    if (!bigName) return Array.from(new Set(data.map(item => item.mid_name)));
    return Array.from(new Set(data.filter(item => item.big_name === bigName).map(item => item.mid_name)));
  }

  getSmallNames(bigName: string, midName: string): string[] {
    return Array.from(new Set(data
      .filter(item => (bigName ? item.big_name === bigName : true) && (midName ? item.mid_name === midName : true))
      .map(item => item.small_name)));
  }



  onDropdownChange0(dropdown: HTMLSelectElement): void {
    this.selectedOptionText0 = dropdown.options[dropdown.selectedIndex].text;

    this.midNames = this.getMidNames(dropdown.value);
    this.selectedOptionText1 = ''; // reset mid_name selection
    this.smallNames = this.getSmallNames(dropdown.value, '');
    this.selectedOptionText2 =''; // reset small_name selection
  }
  onDropdownChange1(dropdown: HTMLSelectElement): void {
    this.selectedOptionText1 = dropdown.options[dropdown.selectedIndex].text;
    this.smallNames = this.getSmallNames(this.selectedOptionText0, dropdown.value);
    this.selectedOptionText2 = ''; // reset small_name selection
  }
  onDropdownChange2(dropdown: HTMLSelectElement): void {
    this.selectedOptionText2 = dropdown.options[dropdown.selectedIndex].text;
  }
}
