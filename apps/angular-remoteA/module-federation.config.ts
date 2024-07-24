import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'angular-remoteA',
  exposes: {
    './Routes': 'apps/angular-remoteA/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
