import { INDENT } from '@global/constant/format_rules';
import { stylisticRule } from '@module/stylistic/rule/stylistic_rule';

import type { Linter } from 'eslint';

const jsonRule: Linter.RulesRecord = {
  'json/array-bracket-newline': stylisticRule['style/array-bracket-newline'] ?? 'off',
  'json/array-bracket-spacing': stylisticRule['style/array-bracket-spacing'] ?? 'off',
  'json/array-element-newline': stylisticRule['style/array-element-newline'] ?? 'off',
  'json/comma-dangle': stylisticRule['style/comma-dangle'] ?? 'off',
  'json/comma-style': stylisticRule['style/comma-style'] ?? 'off',
  'json/indent': ['error', INDENT],
  'json/key-spacing': stylisticRule['style/key-spacing'] ?? 'off',
  'json/no-bigint-literals': 'error',
  'json/no-binary-expression': 'error',
  'json/no-binary-numeric-literals': 'error',
  'json/no-comments': 'error',
  'json/no-dupe-keys': 'error',
  'json/no-escape-sequence-in-identifier': 'error',
  'json/no-floating-decimal': 'error',
  'json/no-hexadecimal-numeric-literals': 'error',
  'json/no-infinity': 'error',
  'json/no-irregular-whitespace': 'error',
  'json/no-multi-str': 'error',
  'json/no-nan': 'error',
  'json/no-number-props': 'error',
  'json/no-numeric-separators': 'error',
  'json/no-octal': 'error',
  'json/no-octal-escape': 'error',
  'json/no-octal-numeric-literals': 'error',
  'json/no-parenthesized': 'error',
  'json/no-plus-sign': 'error',
  'json/no-regexp-literals': 'error',
  'json/no-sparse-arrays': 'error',
  'json/no-template-literals': 'error',
  'json/no-undefined-value': 'error',
  'json/no-unicode-codepoint-escapes': 'error',
  'json/no-useless-escape': 'error',
  'json/object-curly-newline': stylisticRule['style/object-curly-newline'] ?? 'off',
  'json/object-curly-spacing': ['error', 'always'],
  'json/object-property-newline': stylisticRule['style/object-property-newline'] ?? 'off',
  'json/quote-props': ['error', 'always'],
  'json/quotes': [
    'error',
    'double',
    { avoidEscape: false }
  ],
  'json/space-unary-ops': 'error',
  'json/valid-json-number': 'error',
  'json/vue-custom-block/no-parsing-error': 'error',
  'no-irregular-whitespace': 'off'
};

export { jsonRule };