import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'angular-remoteB',
  exposes: {
    './Routes': 'apps/angular-remoteB/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
