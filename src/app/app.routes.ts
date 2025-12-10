import { Routes } from '@angular/router';
import { DefaultTemplateComponent } from './components/default-template/default-template';
import { SecondaryTemplateComponent } from './components/secondary-template/secondary-template';
import { HomepageComponent } from './pages/homepage/homepage';
import { LoginComponent } from './pages/login/login';
import { ProfilComponent } from './pages/profil/profil';
import { AboutComponent } from './pages/about/about';
import { RegisterComponent } from './pages/register/register';
import { ErrorComponent } from './pages/error/error';
import { IntegrationComponent } from './pages/integration/integration';

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
      },
      {
        path: 'integration',
        component: IntegrationComponent
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
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'error',
        component: ErrorComponent
      }
    ]
  }
];
