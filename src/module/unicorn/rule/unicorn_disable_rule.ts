import type { Linter } from 'eslint';

const unicornDisableRule: Linter.RulesRecord = {
  'unicorn/prefer-ternary': 'off',
  'unicorn/name-replacements': ['off', {
    allowList: {
      args: true,
      ctx: true,
      props: true,
      Props: true,
      req: true,
      res: true
    },
    checkFilenames: false,
    checkShorthandProperties: true,
    ignore: [
      String.raw`\.e2e$`,
      String.raw`\.e2e-spec$`,
      'env.d',
      'ImportMetaEnv'
    ]
  }]
};

export { unicornDisableRule };