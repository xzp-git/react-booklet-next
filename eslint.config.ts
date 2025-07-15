import {FlatCompat} from '@eslint/eslintrc';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort'; // 必须显式导入
import {dirname} from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const config = [
  // 先继承 next、prettier 配置
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),

  // 再追加一个配置对象，记得 plugins 要这样注册
  {
    plugins: {
      'simple-import-sort': simpleImportSortPlugin
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^next', '^lodash-es', '^@?\\w'],
            ['^(@|components)(/.*|$)'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^.+\\.?(css)$'],
            ['^\\u0000']
          ]
        }
      ],
      'simple-import-sort/exports': 'error'
    }
  }
];

export default config;
