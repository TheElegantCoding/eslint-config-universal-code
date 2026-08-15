import { PACKAGE_NAME } from '@global/constant/package_name';
import { unicornRule } from '@module/unicorn/rule/unicorn_rule';
import pluginUnicorn from 'eslint-plugin-unicorn';

import type { Linter } from 'eslint';

const unicorn: Linter.Config = {
  name: `${PACKAGE_NAME}/unicorn`,
  plugins: { unicorn: pluginUnicorn },
  rules: unicornRule
};

export { unicorn };