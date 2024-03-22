import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote',
  exposes: {
    './component': 'remote/src/app/remote-entry/entry.component.ts',
  },
};

export default config;
