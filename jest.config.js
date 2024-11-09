module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'], // Points to jest.setup.js
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Transforms JSX files
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy', // Mocks CSS imports
  },
};
