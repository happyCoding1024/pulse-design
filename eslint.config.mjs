import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'consistent-return': 2,
      indent: [1, 2],
      'no-else-return': 1,
      semi: [1, 'always'],
      'space-in-parens': ['error', 'never'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-trailing-spaces': 'error',
      'react/display-name': 'off',
      quotes: ['error', 'single', { avoidEscape: true }],
    },
  },
];
