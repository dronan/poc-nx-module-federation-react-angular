import { withModuleFederation } from '@nx/angular/module-federation';
import moduleFederationConfig from './module-federation.config';

console.log('Webpack config is being loaded');

export default withModuleFederation(moduleFederationConfig);
