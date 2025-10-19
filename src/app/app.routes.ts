import { Routes } from '@angular/router';
import { ShellLayoutComponent } from './features/dashboard/components/shell-layout/shell-layout.component';
import { HomeComponent } from './features/dashboard/pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
      }
    ]
  }
];
