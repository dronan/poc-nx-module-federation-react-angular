import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'main-shell-angular',
  remotes: [
    ['angular-shell', 'http://localhost:4204'],
    ['react-shell', 'http://localhost:4208'],
  ],
};

export default config;
