import pluginNode from 'eslint-plugin-n';

import type { Linter } from 'eslint';
import { PACKAGE_NAME } from '@global/constant/package_name';

export const node: Linter.Config = {
  name: `${PACKAGE_NAME}/node`,
  plugins: { node: pluginNode },
  rules: {
    'node/no-deprecated-api': 'error',
    'node/no-path-concat': 'error',
    'node/prefer-node-protocol': 'error',
    'node/process-exit-as-throw': 'error'
  }
};