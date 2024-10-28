module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@babel/eslint-parser', // Certifique-se de que está correto
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true, // Isso deve ser verdade para usar JSX
    },
    ecmaVersion: 2018, // Mantenha como 2018
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 0,
  },
};
