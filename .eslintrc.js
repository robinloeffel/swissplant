module.exports = {
  extends: 'sweet',
  overrides: [{
    files: 'gulpfile.mjs',
    extends: 'sweet/node',
    rules: {
      'node/no-unsupported-features/es-syntax': 'off'
    }
  }]
};
