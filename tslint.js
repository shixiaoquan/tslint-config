module.exports = {
  linterOptions: {
    exclude: [
      'dist/**',
      'tmp/**',
      'node_modules/**',
    ],
  },
  rules: {
    'class-name': true,
    'member-access': [true, 'no-public'],
    'no-any': false,
    'no-non-null-assertion': true,
    'no-var-requires': false,
    'only-arrow-functions': [
      true,
      'allow-declarations',
    ],
    'prefer-for-of': true,
    'typedef': [true, 'call-signature', 'parameter', 'member-variable-declaration'],
    'eofline': true,
    'indent': 'spaces',
    'member-ordering': [
      true,
      'public-before-private',
      'static-before-instance',
      'variables-before-functions',
    ],
    'no-eval': true,
    'no-sparse-arrays': true,
    'switch-default': true,
    'prefer-const': true,
    'arrow-return-shorthand': true,
    'trailing-comma': [
      true,
      {
        'multiline': 'always',
        'singleline': 'never',
      },
    ],
    'one-line': [
      true,
      'check-open-brace',
      'check-catch',
      'check-else',
      'check-whitespace',
    ],
    'quotemark': [
      true,
      'single',
    ],
    'semicolon': false,
    'triple-equals': [
      true,
      'allow-null-check',
    ],
    'variable-name': false,
    'whitespace': [
      true,
    ],
  },
}
