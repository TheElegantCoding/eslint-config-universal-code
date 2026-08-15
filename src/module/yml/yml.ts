import { PACKAGE_NAME } from '@global/constant/package_name';
import { ymlRule } from '@module/yml/rule/yml_rule';
import pluginYml from 'eslint-plugin-yml';
import * as yamlParser from 'yaml-eslint-parser';

import type { Linter } from 'eslint';

const yml: Linter.Config = {
  files: ['**/*.y?(a)ml'],
  languageOptions: { parser: yamlParser },
  name: `${PACKAGE_NAME}/yml`,
  plugins: { yml: pluginYml as unknown as Plugin },
  rules: ymlRule
};

export { yml };