import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'angular-remote-b',
    loadChildren: () =>
      import('angular-remote-b/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'angular-remote-a',
    loadChildren: () =>
      import('angular-remote-a/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
