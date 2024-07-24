import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { WebComponentWrapper } from './web-component-wrapper.component';

export const appRoutes: Route[] = [
  { path: '', component: NxWelcomeComponent },
  {
    path: 'remoteA',
    loadChildren: () =>
      import('angular-remoteA/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'remoteB',
    loadChildren: () =>
      import('angular-remoteB/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'remote-a',
    component: WebComponentWrapper,
    data: {
      reactComponentPath: 'react-remote-a/Module', // Nome remoto atualizado
    },
  },
  {
    path: 'remote-b',
    component: WebComponentWrapper,
    data: {
      reactComponentPath: 'react-remote-b/Module', // Nome remoto atualizado
    },
  },
];
