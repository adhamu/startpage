const stylelintConfig = require('@adhamu/zero/stylelint')

module.exports = {
  ...stylelintConfig,
  overrides: [
    {
      files: ['**/*.tsx'],
      customSyntax: 'postcss-styled-syntax',
      rules: {
        'scss/operator-no-unspaced': null,
        'scss/operator-no-newline-after': null,
        '@stylistic/no-empty-first-line': null,
        '@stylistic/declaration-colon-newline-after': null,
      },
    },
  ],
}
