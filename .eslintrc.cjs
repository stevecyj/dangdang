module.exports = {
  root: true,
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard-with-typescript', 'plugin:vue/vue3-essential'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json'],
    extraFileExtensions: ['.vue']
  },
  plugins: ['vue'],
  ignorePatterns: ['temp.js', '**/vendor/*.js', '**/*.d.ts'],
  rules: {
    'space-before-function-paren': 0,
    'vue/no-multiple-template-root': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    semi: [2, 'always'],
    quotes: [2, 'single'],
    '@typescript-eslint/semi': [2, 'always'],
    'prefer-const': 2,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-extraneous-class': 0
  }
};
