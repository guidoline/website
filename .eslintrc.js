module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'plugin:gridsome/recommended',
    'plugin:vue/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {}
}
