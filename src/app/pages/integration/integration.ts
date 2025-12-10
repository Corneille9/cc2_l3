import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-integration',
  imports: [],
  templateUrl: './integration.html',
  styleUrl: './integration.scss'
})
export class IntegrationComponent {
  hoveredItem = signal<number | null>(25);

  setHover(value: number) {
    this.hoveredItem.set(value);
  }
}

