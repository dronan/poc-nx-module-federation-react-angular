import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'angular-remote-b',
  exposes: {
    './Module': 'apps/angular-remote-b/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
