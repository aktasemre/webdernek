module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    'quotes': 'off',
    'semi': 'off',
    'indent': 'off',
    'no-console': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    '@next/next/no-img-element': 'off',
    'react/display-name': 'off',
    'react/jsx-key': 'off',
    'no-unused-vars': 'warn'
  },
  ignorePatterns: [
    'node_modules/',
    '.next/',
    'public/'
  ]
};
