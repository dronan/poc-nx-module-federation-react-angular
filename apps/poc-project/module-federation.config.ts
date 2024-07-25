import { ModuleFederationConfig } from '@nx/webpack';

const deps = require('../../package.json').dependencies;

const config: ModuleFederationConfig = {
  name: 'poc-project',
  remotes: [
    ['angular-remoteA', 'http://localhost:4210'],
    ['angular-remoteB', 'http://localhost:4211'],
    ['react-remote-a', 'http://localhost:4203'],
    ['react-remote-b', 'http://localhost:4204'],
  ],
  shared: (name, config) => {
    if (name === 'react-router-dom') {
      // Need to specify this custom config for react-router-dom as long as outer-devhub will remain on a mismatching version
      return {
        singleton: false,
        requiredVersion: deps['react-router-dom'],
      };
    }
  },
};

export default config;
