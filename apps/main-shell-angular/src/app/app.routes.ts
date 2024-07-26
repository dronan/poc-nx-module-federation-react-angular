import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'remote-b',
    loadChildren: () => {
      console.log('Loading remote-b module');
      return loadRemoteModule('angular-remote-b', './Module').then((m) => {
        console.log('Loaded remote-b module:', m);
        return m.RemoteEntryModule;
      });
    },
  },
  {
    path: 'remote-a',
    loadChildren: () => {
      console.log('Loading remote-a module');
      return loadRemoteModule('angular-remote-a', './Module').then((m) => {
        console.log('Loaded remote-a module:', m);
        return m.RemoteEntryModule;
      });
    },
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
