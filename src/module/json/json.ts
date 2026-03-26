/* eslint-disable import/no-namespace */
import { PACKAGE_NAME } from '@global/constant/package_name';
import { jsonGeneralRule } from '@module/json/rule/json_general_rule';
import { jsonOverride } from '@module/json/rule/json_override';
import pluginJson from 'eslint-plugin-jsonc';
import * as jsoncParser from 'jsonc-eslint-parser';

import type { Linter } from 'eslint';

const json: Linter.Config[] = [{
  files: [
    '**/*.json',
    '**/*.json5',
    '**/*.jsonc'
  ],
  languageOptions: { parser: jsoncParser },
  name: `${PACKAGE_NAME}/json`,
  plugins: { json: pluginJson as unknown as Plugin },
  rules: jsonGeneralRule
}, ...jsonOverride];

export { json };