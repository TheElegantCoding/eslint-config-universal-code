import { PACKAGE_NAME } from '@global/constant/package_name';

import type { Linter } from 'eslint';

const unicornOverride: Linter.Config[] = [{
  name: `${PACKAGE_NAME}/unicorn/overrides`,
  files: ['**/*.github/**'],
  rules: {
    'unicorn/filename-case': 'off'
  }
}];

export { unicornOverride };