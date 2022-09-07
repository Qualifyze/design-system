module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/dist/'],
  testURL: `http://localhost`,
  setupFilesAfterEnv: [`<rootDir>/src/util/test/setupTests.js`],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
}
