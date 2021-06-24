module.exports = {
  testURL: `http://localhost`,
  setupFilesAfterEnv: [`<rootDir>/src/util/test/setupTests.js`],
  /**
   * Enable absolute imports from specific entry points.
   * @example: `import Button from '@ds/components/Button'`
   * @see: https://bit.ly/2KgcOOY
   */
  moduleNameMapper: {
    // Stubs
    '\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
}
