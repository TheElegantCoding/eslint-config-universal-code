import type { Linter } from 'eslint';

const perfectionistGeneralRule: Linter.RulesRecord = {
  'perfectionist/sort-array-includes': ['error', { ignoreCase: true, type: 'natural' }],
  'perfectionist/sort-classes': ['error', {
    groups: [
      'static-property',
      'private-property',
      'property',
      'constructor',
      'static-method',
      'private-method',
      'method'
    ],
    order: 'asc',
    type: 'natural'
  }],
  'perfectionist/sort-enums': ['error', { ignoreCase: true, type: 'line-length' }],
  'perfectionist/sort-exports': ['error', { order: 'asc', type: 'line-length' }],
  'perfectionist/sort-imports': ['error', {
    groups: [
      'builtin',
      'internal',
      ['value-builtin', 'value-external'],
      'value-internal',
      [
        'value-parent',
        'value-sibling',
        'value-index'
      ],
      'type-import',
      'type-internal',
      [
        'type-parent',
        'type-sibling',
        'type-index'
      ],
      'ts-equals-import',
      'index',
      'style',
      'unknown'
    ],
    newlinesBetween: 1,
    order: 'asc',
    type: 'natural'
  }],
  'perfectionist/sort-interfaces': ['error', { ignoreCase: true, type: 'line-length' }],
  'perfectionist/sort-intersection-types': ['error', { order: 'asc', type: 'line-length' }],
  'perfectionist/sort-jsx-props': ['error', { ignoreCase: true, type: 'line-length' }],
  'perfectionist/sort-maps': ['error', { ignoreCase: true, type: 'natural' }],
  'perfectionist/sort-named-exports': ['error', { order: 'asc', type: 'line-length' }],
  'perfectionist/sort-named-imports': ['error', { order: 'asc', type: 'line-length' }],
  'perfectionist/sort-object-types': ['error', { ignoreCase: true, type: 'line-length' }],
  'perfectionist/sort-union-types': ['error', { order: 'asc', type: 'line-length' }]
};

export { perfectionistGeneralRule };