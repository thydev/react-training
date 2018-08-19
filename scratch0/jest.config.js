module.exports = {
  modulePathIgnorePatterns: ['/dist/', '/node_modules/'],
  testRegex: '/src/.*?(Spec)\\.js$',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png)$': '<rootDir>/src/utils/fileMock.js',
  },
};
