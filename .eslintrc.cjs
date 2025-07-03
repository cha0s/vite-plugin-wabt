/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended'],
};
