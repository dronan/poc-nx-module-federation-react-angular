import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';

const baseConfig = require('./module-federation.config');

const config = {
  ...baseConfig,
};

console.log('webpack.config for react-remote-a', config);


// Nx plugins for webpack to build config object from Nx options and context.
export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config)
);
