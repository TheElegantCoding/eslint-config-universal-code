import { unicornGeneralRule } from '@module/unicorn/rule/unicorn_general_rule';
import pluginUnicorn from 'eslint-plugin-unicorn';

import type { Linter } from 'eslint';

const unicorn: Linter.Config = {
  name: 'unicorn',
  plugins: { unicorn: pluginUnicorn },
  rules: unicornGeneralRule
};

export { unicorn };