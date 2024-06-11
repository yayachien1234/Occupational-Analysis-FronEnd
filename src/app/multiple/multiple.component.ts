import { Component } from '@angular/core';
import { data } from './data.const';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.css']
})
export class MultipleComponent {
  bigNames: string[] = Array.from(new Set(data.map(item => item.big_name)));

  dropdownContainers: {
    id: number;
    selectedOptionText0: string;
    selectedOptionText1: string;
    selectedOptionText2: string;
    bigNames: string[];
    midNames: string[];
    smallNames: string[];
  }[] = [
    {
      id: 0,
      selectedOptionText0: '',
      selectedOptionText1: '',
      selectedOptionText2: '',
      bigNames: this.bigNames,
      midNames: this.getMidNames(''),
      smallNames: this.getSmallNames('', '')
    }
  ]; // 初始的一個 dropdown-container

  addDropdownContainer() {
    const newContainer = {
      id: this.dropdownContainers.length,
      selectedOptionText0: '',
      selectedOptionText1: '',
      selectedOptionText2: '',
      bigNames: this.bigNames,
      midNames: this.getMidNames(''),
      smallNames: this.getSmallNames('', '')
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

  onDropdownChange0(dropdown: HTMLSelectElement, index: number): void {
    const container = this.dropdownContainers[index];
    container.selectedOptionText0 = dropdown.options[dropdown.selectedIndex].text;

    container.midNames = this.getMidNames(dropdown.value);
    container.selectedOptionText1 = ''; // reset mid_name selection
    container.smallNames = this.getSmallNames(dropdown.value, '');
    container.selectedOptionText2 = ''; // reset small_name selection
  }

  onDropdownChange1(dropdown: HTMLSelectElement, index: number): void {
    const container = this.dropdownContainers[index];
    container.selectedOptionText1 = dropdown.options[dropdown.selectedIndex].text;
    container.smallNames = this.getSmallNames(container.selectedOptionText0, dropdown.value);
    container.selectedOptionText2 = ''; // reset small_name selection
  }

  onDropdownChange2(dropdown: HTMLSelectElement, index: number): void {
    const container = this.dropdownContainers[index];
    container.selectedOptionText2 = dropdown.options[dropdown.selectedIndex].text;
  }
}
