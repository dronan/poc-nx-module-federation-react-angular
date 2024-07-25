import { withModuleFederation } from '@nx/angular/module-federation';
import config from './module-federation.config';

console.log('webpack.config for angularB', config);

export default withModuleFederation(config);
