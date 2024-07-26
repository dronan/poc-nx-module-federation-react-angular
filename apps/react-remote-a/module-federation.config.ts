import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'react-remote-a',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
