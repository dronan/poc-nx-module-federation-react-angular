const { ModuleFederationPlugin } = require('webpack').container;
import * as pkg from '../../package.json';

const deps = pkg.dependencies;

module.exports = {
  output: {
    uniqueName: 'angular-remote-a',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'angular_remote_a',
      filename: 'remoteEntry.js',
      exposes: {
        './Module':
          './apps/angular-remote-a/src/app/remote-entry/entry.module.ts',
      },
      shared: {
        ...deps,
        '@angular/core': {
          singleton: true,
          strictVersion: true,
          requiredVersion: deps['@angular/core'],
        },
        '@angular/common': {
          singleton: true,
          strictVersion: true,
          requiredVersion: deps['@angular/common'],
        },
        '@angular/router': {
          singleton: true,
          strictVersion: true,
          requiredVersion: deps['@angular/router'],
        },
        'zone.js': {
          singleton: true,
          strictVersion: true,
          requiredVersion: deps['zone.js'],
        },
      },
    }),
  ],
};
