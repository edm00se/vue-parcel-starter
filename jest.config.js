module.exports = {
  coverageDirectory: '<rootDir>/config/tests/coverage',
  moduleFileExtensions: [ 'js', 'json', 'vue' ],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': '@vue/vue3-jest'
  },
  testEnvironment: 'jsdom'
};
