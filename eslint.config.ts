import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            'padding-line-between-statements': [
                'error',
                // Add blank line between function declarations
                { blankLine: 'always', prev: 'function', next: 'function' },
                { blankLine: 'always', prev: 'block-like', next: 'function' },
            ],
        },
    },
];

export default eslintConfig;
