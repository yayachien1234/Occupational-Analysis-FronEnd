import { Component } from '@angular/core';
import { data } from '../multiple/data.const';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {
  bigNames: string[] = Array.from(new Set(data.map(item => item.big_name)));

  dropdownContainers: {
    id: number;
    selectedOptionText0: string;
    selectedOptionText1: string;
    selectedOptionText2: string;
    selectedOptionText3: string;
    bigNames: string[];
    midNames: string[];
    smallNames: string[];
    detailNames: string[];
  }[] = [
    {
      id: 0,
      selectedOptionText0: '',
      selectedOptionText1: '',
      selectedOptionText2: '',
      selectedOptionText3: '',
      bigNames: this.bigNames,
      midNames: this.getMidNames(''),
      smallNames: this.getSmallNames('', ''),
      detailNames: this.getDetailNames('', '', '')
    }
  ]; // 初始的一個 dropdown-container

  addDropdownContainer() {
    const newContainer = {
      id: this.dropdownContainers.length,
      selectedOptionText0: '',
      selectedOptionText1: '',
      selectedOptionText2: '',
      selectedOptionText3: '',
      bigNames: this.bigNames,
      midNames: this.getMidNames(''),
      smallNames: this.getSmallNames('', ''),
      detailNames: this.getDetailNames('', '', '')
    };
    this.dropdownContainers.push(newContainer);
  }

  getMidNames(bigName: string): string[] {
    if (!bigName) return [];
    return Array.from(new Set(data.filter(item => item.big_name === bigName).map(item => item.mid_name)));
  }

  getSmallNames(bigName: string, midName: string): string[] {
    if (!bigName || !midName) return [];
    return Array.from(new Set(data.filter(item => item.big_name === bigName && item.mid_name === midName).map(item => item.small_name)));
  }

  getDetailNames(bigName: string, midName: string, smallName: string): string[] {
    if (!bigName || !midName || !smallName) return [];
    return Array.from(new Set(data.filter(item => item.big_name === bigName && item.mid_name === midName && item.small_name === smallName).map(item => item.detail_name)));
  }

  //big_dropdown
  onDropdownChange0(dropdown: HTMLSelectElement, index: number): void {
    const container = this.dropdownContainers[index];
    container.selectedOptionText0 = dropdown.options[dropdown.selectedIndex].text;

    container.midNames = this.getMidNames(dropdown.value);
    container.selectedOptionText1 = ''; // reset mid_name selection
    container.smallNames = this.getSmallNames(dropdown.value, '');
    container.selectedOptionText2 = ''; // reset small_name selection
    container.detailNames = this.getDetailNames(dropdown.value, '', '');
    container.selectedOptionText3 = ''; // reset detail_name selection
  }

  //mid_dropdown
  onDropdownChange1(dropdown: HTMLSelectElement, index: number): void {
    const container = this.dropdownContainers[index];
    container.selectedOptionText1 = dropdown.options[dropdown.selectedIndex].text;
    container.smallNames = this.getSmallNames(container.selectedOptionText0, dropdown.value);
    container.selectedOptionText2 = ''; // reset small_name selection
    container.detailNames = this.getDetailNames(container.selectedOptionText0, dropdown.value, '');
    container.selectedOptionText3 = ''; // reset detail_name selection
  }

  //small_dropdown
  onDropdownChange2(dropdown: HTMLSelectElement, index: number): void {
    const container = this.dropdownContainers[index];
    container.selectedOptionText2 = dropdown.options[dropdown.selectedIndex].text;
    container.detailNames = this.getDetailNames(container.selectedOptionText0, container.selectedOptionText1, dropdown.value);
    container.selectedOptionText3 = ''; // reset detail_name selection
  }

  //detail_dropdown
  onDropdownChange3(dropdown: HTMLSelectElement, index: number): void {
    const container = this.dropdownContainers[index];
    container.selectedOptionText3 = dropdown.options[dropdown.selectedIndex].text; // reset detail_name selection
  }
}
