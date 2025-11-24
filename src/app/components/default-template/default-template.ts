import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from '../header/header';
import {FooterComponent} from '../footer/footer';

@Component({
  styleUrl: './default-template.scss',
  templateUrl: './default-template.html',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  selector: 'app-default-template',
})
export class DefaultTemplateComponent {
}
