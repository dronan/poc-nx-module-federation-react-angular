import { withModuleFederation } from '@nx/angular/module-federation';
import { container } from 'webpack';
const ModuleFederationPlugin = container.ModuleFederationPlugin;
const { DtsBundleWebpack } = require('@module-federation/dts-plugin');
const config = require('./module-federation.config');
const path = require('path');

module.exports = withModuleFederation({
  ...config,
  plugins: [
    new ModuleFederationPlugin({
      ...config,
    }),
    new DtsBundleWebpack({
      name: config.name,
      baseDir: path.resolve(__dirname, 'src'),
      outFile: path.resolve(__dirname, 'dist/@mf-types.zip'),
    }),
  ],
});
