module.exports = {
  extends: [
    'next/core-web-vitals', 'airbnb', 'airbnb-typescript'
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
