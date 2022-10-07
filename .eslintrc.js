module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },

    parser: '@typescript-eslint/parser',
    extends: [
        'prettier',
        'airbnb-typescript',
        'plugin:import/errors',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:jsx-a11y/recommended',
    ],
    plugins: ['react', 'react-hooks', 'import', '@typescript-eslint', 'jsx-a11y'],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    rules: {
        '@typescript-eslint/ban-ts-comment': [1],
        '@typescript-eslint/naming-convention': [1],
        '@typescript-eslint/no-unused-vars': [2],
        '@typescript-eslint/no-explicit-any': [2],
        '@typescript-eslint/array-type': [
            2,
            {
                default: 'generic',
            },
        ],
        '@typescript-eslint/no-namespace': [2],

        'import/order': [
            2,
            {
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                'newlines-between': 'always-and-inside-groups',
            },
        ],
        'import/named': [1],
        'import/no-unresolved': [2],
        'import/prefer-default-export': [1],
        'import/extensions': [0],
        'import/no-cycle': [2],
        'import/no-extraneous-dependencies': [2],
        'no-restricted-imports': [
            'error',
            {
                paths: [
                    {
                        name: 'react',
                        importNames: ['default'],
                        message: "Dont use 'import React from 'react''.",
                    },
                    {
                        name: 'react-router',
                        message: 'Please use import from react-router-dom instead.',
                    },
                ],
            },
        ],

        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': [
            'error',
            {
                additionalHooks: 'useRecoilCallback',
            },
        ],

        'react/jsx-boolean-value': [2],
        'react/jsx-curly-brace-presence': [2],
        'react/react-in-jsx-scope': [0],
        'react/self-closing-comp': [2],
        'react/display-name': [0],
        'react/prop-types': [0],
        'react/jsx-props-no-spreading': [0],

        'consistent-return': [0],
        'no-underscore-dangle': [1],
        'no-console': [2],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
