import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import playwright from 'eslint-plugin-playwright';
export default [
   js.configs.recommended,
   {
       files: ['**/*.{js,ts}'],
       languageOptions: {
           parser: tsParser,
           parserOptions: {
               ecmaVersion: 'latest',
               sourceType: 'module',
           },
           globals: {
               console: 'readonly',
               process: 'readonly',
               setTimeout: 'readonly',
               clearTimeout: 'readonly',
               setInterval: 'readonly',
               clearInterval: 'readonly',
           },
       },
       plugins: {
           '@typescript-eslint': tsPlugin,
           playwright: playwright,
       },
       rules: {
           ...tsPlugin.configs.recommended.rules,
           ...playwright.configs['recommended'].rules,
           '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
       },
   },
];