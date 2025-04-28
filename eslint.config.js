import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended,
        ...tseslint.configs.strictTypeChecked,
        ...tseslint.configs.recommendedTypeChecked,
        ...tseslint.configs.stylisticTypeChecked,

    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
        parserOptions: {
            project: ['./tsconfig.node.json', './tsconfig.app.json'],
            tsconfigRootDir:__dirname,
        },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
        'react-x': reactX,
        'react-dom': reactDom,
    },
    rules: {

        semi: ['error', 'always'],
        'no-magic-numbers': [
            'error',
            {
                ignoreArrayIndexes: true,
                ignore: [1, -1, 0],
                ignoreDefaultValues: true,
                ignoreClassFieldInitialValues: true,
            },
        ],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: 'function',
                next: '*',
            },
            {
                blankLine: 'always',
                prev: '*',
                next: 'function',
            },
            { blankLine: 'always', prev: '*', next: 'multiline-const' },
            { blankLine: 'always', prev: 'multiline-const', next: '*' },
            { blankLine: 'always', prev: 'function', next: '*' },
            { blankLine: 'always', prev: '*', next: 'function' },
        ],

      ...reactHooks.configs.recommended.rules,
        ...reactX.configs['recommended-typescript'].rules,
        ...reactDom.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
