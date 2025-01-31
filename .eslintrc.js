module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    indent: [
      'error',
      2
    ],
    'react/react-in-jsx-scope': 'off',
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'indent': 'off',
    'jsx-a11y/alt-text': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react-hooks/exhaustive-deps': 'off',
    // '@typescript-eslint/interface-name-prefix': 'off',
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
    'linebreak-style': 'off',
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'never'
    ]
  }
}
