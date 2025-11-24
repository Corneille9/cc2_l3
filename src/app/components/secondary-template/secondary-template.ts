import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header';

@Component({
  selector: 'app-secondary-template',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './secondary-template.html',
  styleUrl: './secondary-template.scss'
})
export class SecondaryTemplateComponent {}

