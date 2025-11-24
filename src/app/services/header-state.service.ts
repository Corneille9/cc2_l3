import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderStateService {
  isToggled = signal(false);

  toggle() {
    this.isToggled.update(value => !value);
  }
}

