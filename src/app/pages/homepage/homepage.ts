import {Component, inject} from '@angular/core';

import {RouterLink} from '@angular/router';
import {LaunchButton} from '../../launch-button/launch-button';
import {HeaderStateService} from '../../services/header-state.service';

@Component({
  styleUrl: './homepage.scss',
  templateUrl: './homepage.html',
  imports: [RouterLink, LaunchButton],
  selector: 'app-homepage',
})

export class HomepageComponent {
  headerState = inject(HeaderStateService);

  toggleHeader() {
    this.headerState.toggle();
  }
}
