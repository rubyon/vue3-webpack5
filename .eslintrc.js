module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'plugin:prettier/recommended'
  ],
  rules: {
    'global-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/newline-after-import': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'no-use-before-define': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  globals: {
    __static: true
  }
}
