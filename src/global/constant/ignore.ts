const IGNORE = [
  // Directorios de dependencias y build (Standard)
  'node_modules',
  'dist',
  'output',
  'coverage',
  'temp',

  '**/.next',
  '**/.nuxt',
  '**/.vercel',
  '**/.cache',
  '**/.vitepress/cache',
  '**/.eslint-config-inspector',
  '**/.astro',

  '**/*.lock',
  '**/bun.lockb',
  '**/pnpm-lock.yaml',
  '**/CHANGELOG*.md',
  '**/LICENSE*',

  '**/auto-import?(s).d.ts',
  '**/components.d.ts',
  '**/__snapshots__'
];

export { IGNORE };