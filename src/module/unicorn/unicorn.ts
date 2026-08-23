import { PACKAGE_NAME } from '@global/constant/package_name';
import { unicornOverride } from '@module/unicorn/rule/unicorn_override';
import { unicornRule } from '@module/unicorn/rule/unicorn_rule';
import pluginUnicorn from 'eslint-plugin-unicorn';

import type { Linter } from 'eslint';

const unicorn: Linter.Config[] = [{
  name: `${PACKAGE_NAME}/unicorn`,
  plugins: { unicorn: pluginUnicorn },
  rules: unicornRule
}, ...unicornOverride];

export { unicorn };
