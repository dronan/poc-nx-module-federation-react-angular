import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'angular-remote-a',
  exposes: {
    './Module': 'apps/angular-remote-a/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
