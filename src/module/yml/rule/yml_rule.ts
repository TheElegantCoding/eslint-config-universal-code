import { INDENT } from '@global/constant/format_rules';
import { stylisticRule } from '@module/stylistic/rule/stylistic_rule';

import type { Linter } from 'eslint';

const ymlRule: Linter.RulesRecord = {
  'yml/block-mapping': 'error',
  'yml/block-mapping-colon-indicator-newline': 'error',
  'yml/block-mapping-question-indicator-newline': 'error',
  'yml/block-sequence': 'error',
  'yml/block-sequence-hyphen-indicator-newline': 'error',
  'yml/file-extension': ['error', { caseSensitive: true, extension: 'yml' }],
  'yml/flow-mapping-curly-newline': 'error',
  'yml/flow-mapping-curly-spacing': stylisticRule['style/object-curly-spacing'] ?? 'off',
  'yml/flow-sequence-bracket-newline': stylisticRule['style/array-bracket-newline'] ?? 'off',
  'yml/flow-sequence-bracket-spacing': stylisticRule['style/array-bracket-spacing'] ?? 'off',
  'yml/indent': ['error', INDENT],
  'yml/key-spacing': ['error', {
    afterColon: true,
    beforeColon: false,
    mode: 'strict'
  }],
  'yml/no-empty-document': 'error',
  'yml/no-empty-key': 'error',
  'yml/no-empty-mapping-value': 'error',
  'yml/no-trailing-spaces': 'error',
  'yml/no-empty-sequence-entry': 'error',
  'yml/no-irregular-whitespace': 'error',
  'yml/no-multiple-empty-lines': ['error', { max: 1 }],
  'yml/no-tab-indent': 'error',
  'yml/no-trailing-zeros': 'error',
  'yml/plain-scalar': 'error',
  'yml/quotes': ['error', { avoidEscape: false, prefer: 'single' }],
  'yml/require-string-key': 'error',
  'yml/spaced-comment': 'error',
  'yml/vue-custom-block/no-parsing-error': 'error'
};

export { ymlRule };