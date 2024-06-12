import { Component } from '@angular/core';
import { departments } from './departments';

interface DropdownContainer {
  id: number;
  selectedOptionText0: string;
  selectedOptionText1: string;
  dropdown1Options: string[];
}

@Component({
  selector: 'app-graduates',
  templateUrl: './graduates.component.html',
  styleUrls: ['./graduates.component.css'] // Correct the property name to 'styleUrls'
})
export class GraduatesComponent {
  dropdownContainers: DropdownContainer[] = [
    {
      id: 0,
      selectedOptionText0: '',
      selectedOptionText1: '',
      dropdown1Options: []
    }
  ]; // Initial dropdown-container

  addDropdownContainer() {
    const newContainer: DropdownContainer = {
      id: this.dropdownContainers.length,
      selectedOptionText0: '',
      selectedOptionText1: '',
      dropdown1Options: []
    };
    this.dropdownContainers.push(newContainer);
  }

  onDropdownChange0(dropdown: HTMLSelectElement, index: number): void {
    const container = this.dropdownContainers[index];
    const selectedField = dropdown.value;
    container.selectedOptionText0 = dropdown.options[dropdown.selectedIndex].text;

    if (selectedField) {
      container.dropdown1Options = Array.from(new Set(departments.map(dept => String(dept[selectedField as keyof typeof departments[0]]))));
    } else {
      container.dropdown1Options = [];
    }

    container.selectedOptionText1 = ''; // Reset the second dropdown selection
  }

  onDropdownChange1(dropdown: HTMLSelectElement, index: number): void {
    const container = this.dropdownContainers[index];
    container.selectedOptionText1 = dropdown.options[dropdown.selectedIndex].text;
  }
}
