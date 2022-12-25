module.exports = {
  extends: 'sweet',
  overrides: [{
    files: [
      'gulpfile.mjs',
      'stylelint.config.cjs',
      '.eslintrc.cjs'
    ],
    extends: 'sweet/node',
    rules: {
      'node/no-unsupported-features/es-syntax': 'off'
    }
  }]
};
