import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'react-remote-b',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
