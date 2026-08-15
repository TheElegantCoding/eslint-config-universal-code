import { PACKAGE_NAME } from '@global/constant/package_name';
import pluginHtml from '@html-eslint/eslint-plugin';
import parserHtml from '@html-eslint/parser';
import { htmlRule } from '@module/html/rule/html_rule';

import type { Linter } from 'eslint';

const html: Linter.Config = {
  files: ['**/*.html'],
  languageOptions: {
    parser: parserHtml
  },
  name: `${PACKAGE_NAME}/html`,
  plugins: { html: pluginHtml as unknown as Plugin },
  rules: htmlRule
};

export { html };