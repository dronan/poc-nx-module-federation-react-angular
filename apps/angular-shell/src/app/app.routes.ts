import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'angular-remoteB',
    loadChildren: () =>
      import('angular-remoteB/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'angular-remoteA',
    loadChildren: () =>
      import('angular-remoteA/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
