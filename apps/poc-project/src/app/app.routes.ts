import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { WebComponentWrapper } from './web-component-wrapper.component';
import { loadRemoteModule } from '@nx/angular/mf';

console.log('App routes is being loaded');

export const appRoutes: Route[] = [
  { path: '', 
    redirectTo: 'remote-a',
    pathMatch: 'full',
  },
  {
    path: 'remoteA',
    loadChildren: () => loadRemoteModule('angular-remoteA', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'remoteB',
    loadChildren: () => loadRemoteModule('angular-remoteB', './Routes').then((m) => m.remoteRoutes),
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
