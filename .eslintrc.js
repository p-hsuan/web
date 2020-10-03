module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential', '@vue/airbnb'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: ['error', 4, { SwitchCase: 1 }],
        semi: ['error', 'never'],
        'import/extensions': ['error', 'ignorePackages', { vue: 'always', js: 'always' }],
        'linebreak-style': ['error', 'windows'],
        'object-curly-newline': [
            'error',
            {
                ImportDeclaration: 'never',
            },
        ],
        'global-require': 0,
    },
}
