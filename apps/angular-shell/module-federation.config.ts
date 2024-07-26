import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'angular-shell',
  remotes: [
    'angular-remote-a',
    'angular-remote-b',
  ],
};

export default config;
