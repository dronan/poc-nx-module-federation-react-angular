import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';

export const appRoutes: Route[] = [
  {
    path: 'remote-b',
    loadChildren: () =>
      import('angular-remote-b/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'remote-a',
    loadChildren: () =>
      import('angular-remote-a/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'react-remote-a',
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: 'http://localhost:4209/remoteEntry.js',
      remoteName: 'remote-react-a',
      exposedModule: './Module',
      elementName: 'react-remote-a-bootstrap-page',
    } as WebComponentWrapperOptions,
  },
  {
    path: 'react-remote-b',
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: 'http://localhost:4210/remoteEntry.js',
      remoteName: 'remote-react-b',
      exposedModule: './Module',
      elementName: 'react-remote-b-bootstrap-page',
    } as WebComponentWrapperOptions,
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
