module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'global-require': 0,
    'no-param-reassign': 0,
    'max-len': 0,
    'no-bitwise': 0,
    'no-plusplus': 0,
    'dot-notation': 0,
    'prefer-numeric-literals': 0,
    'guard-for-in': 0,
    'prefer-destructuring': 0,
    'no-nested-ternary': 0,
    'import/no-cycle': 0,
    'no-self-assign': 0,
    'operator-assignment': 0,
    'import/no-extraneous-dependencies': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
