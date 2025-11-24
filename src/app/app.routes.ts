import { Routes } from '@angular/router';
import { DefaultTemplateComponent } from './components/default-template/default-template';
import { SecondaryTemplateComponent } from './components/secondary-template/secondary-template';
import { HomepageComponent } from './pages/homepage/homepage';
import { LoginComponent } from './pages/login/login';
import { ProfilComponent } from './pages/profil/profil';
import { AboutComponent } from './pages/about/about';

export const routes: Routes = [
  // Routes avec footer (Default Template)
  {
    path: '',
    component: DefaultTemplateComponent,
    children: [
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  },
  // Routes sans footer (Secondary Template)
  {
    path: '',
    component: SecondaryTemplateComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'profil',
        component: ProfilComponent
      }
    ]
  }
];
