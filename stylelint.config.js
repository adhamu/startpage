const stylelintConfig = require('@adhamu/zero/stylelint')

module.exports = {
  ...stylelintConfig,
  overrides: [
    {
      files: ['**/*.tsx'],
      customSyntax: 'postcss-styled-syntax',
      rules: {
        'scss/operator-no-unspaced': null,
        '@stylistic/no-empty-first-line': null,
      },
    },
  ],
}
