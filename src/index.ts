/* eslint-disable max-statements */
import { fileIgnore } from '@global/ignores';

import type { ConfigurationOption } from '@global/type/configuration_option';
import { astro } from '@module/astro/astro';
import { html } from '@module/html/html';
import { imports } from '@module/import/import';
import { javascript } from '@module/javascript/javascript';
import { json } from '@module/json/json';
import { node } from '@module/node/node';
import { regex } from '@module/regex/regex';
import { stylistic } from '@module/stylistic/stylistic';
import { typescript } from '@module/typescript/typescript';
import { yml } from '@module/yml/yml';
import type { Linter } from 'eslint';

const eslintSetup = (option: ConfigurationOption, override: Linter.Config | Linter.Config[] = []): Linter.Config[] => {
  const config: Linter.Config[] = [];

  config.push(
    fileIgnore(option.ignore),
    javascript,
    node,
    imports

    /* unicorn,
       perfectionist */

  );

  if (option.stylistic ?? false) { config.push(stylistic); }
  if (option.typescript ?? false) { config.push(...typescript); }
  if (option.html ?? false) { config.push(html); }
  if (option.astro ?? false) { config.push(...astro); }
  if (option.regex ?? false) { config.push(regex); }
  if (option.json ?? false) { config.push(...json); }
  if (option.yml ?? false) { config.push(yml); }

  if (Object.keys(override).length > 0) { config.push(...Array.isArray(override) ? override : [override]); }

  return config;
};

export default eslintSetup;