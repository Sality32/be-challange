require('@babel/register')

module.exports = {
  env: {
    browser: true,
    common: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier', 'mocha'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2017,
  },
  plugins: ['prettier', 'babel'],
  rules: {
    'prettier/prettier': ['error'],
  },
};
