// specifies files from triggering a test run
export default {
  watchPathIgnorePatterns: [
    "<rootDir>/src/sandbox/sandbox*.js",
    "<rootDir>*.sandbox.js",
    ".*\\.mjs$",
  ],
  // use the 'node' environment for service/API testing
  testEnvironment: "node",
  // autoclear mock calls and instances between tests
  clearMocks: true,
  // run this script after the testing environment has been established
  // setupFilesAfterEnv: ["<rootDir>/tests/setup.js"],
  // ensure Jest finds the tests directory
  testMatch: ["<rootDir>/tests/**/*.test.js"],
};
