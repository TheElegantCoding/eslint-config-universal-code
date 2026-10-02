import { flatConfigsToRulesDTS } from 'eslint-typegen/core';
import fs from 'node:fs/promises';

import eslintConfig from '../src/index';

const configs = eslintConfig({
  astro: true,
  html: true,
  perfectionist: true,
  tailwind: true,
  json: true,
  stylistic: true,
  regex: true,
  unicorn: true,
  typescript: true,
  yml: true
});

const configNames = configs.map((index) => { return index.name; }).filter(Boolean) as string[];

let dts = await flatConfigsToRulesDTS(configs, {
  includeAugmentation: false
});

dts += `
// Names of all the configs
export type ConfigNames = ${configNames.map((index) => { return `'${index}'`; }).join(' | ')}
`;

await fs.writeFile('src/typegen.d.ts', dts);