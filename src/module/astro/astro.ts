import { PACKAGE_NAME } from '@global/constant/package_name';
import parserTs from '@typescript-eslint/parser';
import * as astroParser from 'astro-eslint-parser';
import pluginAstro from 'eslint-plugin-astro';
import globals from 'globals';

import { astroOverride } from './rule/astro_override';
import { astroRule } from './rule/astro_rule';

import type { Linter } from 'eslint';

const astro: Linter.Config[] = [{
  name: `${PACKAGE_NAME}/astro`,
  plugins: { astro: pluginAstro },
  files: ['**/*.astro'],
  languageOptions: {
    globals: {
      ...globals.node,
      ...globals.browser,
      Astro: 'readonly',
      Fragment: 'readonly'
    },
    parser: astroParser,
    parserOptions: { extraFileExtensions: ['.astro'], parser: parserTs }
  },
  rules: astroRule
}, ...astroOverride];

export { astro };