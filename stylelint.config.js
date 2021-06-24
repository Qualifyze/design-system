module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard',
    'stylelint-config-styled-components',
  ],
  processors: [['stylelint-processor-styled-components']],
}
