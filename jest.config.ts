import type { Config } from 'jest';

const config: Config = {
  // Automatically mock modules
  automock: false,

  // Directory where Jest should store its cached dependency info
  // cacheDirectory: "C:\\Users\\pradi\\AppData\\Local\\Temp\\jest",

  // Collect coverage info while executing the test
  collectCoverage: true,

  // Coverage provider to use with Babel
  coverageProvider: "babel",
  coverageDirectory: "./coverage", // Specify coverage output directory
  coverageReporters: ["json", "lcov", "text","text-summary"], // Report formats

  // Match test files
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)",
    "**/frontend/tests/**/*.[jt]s?(x)", // This matches any test file in frontend/tests/
    "**/frontend/src/tests/**/*.[jt]s?(x)",
    "**/frontend/src/**/*.[jt]s?(x)"
  ],

  // Automatically reset mocks before each test
  resetMocks: true,

  // Use `ts-jest` to transform TypeScript files
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },

  // Setup files that run before each test
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  // Modules to mock automatically
  moduleDirectories: ["node_modules", "src"], // Add `src` if your source code is inside it

  // Ensure Jest works with ES modules
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Example alias if you're using path aliases
    "**/?(*.)+(spec|test).[tj]s?(x)" // Example alias if you're using path aliases
  },

  // Test environment options
  testEnvironment: "jsdom", // Use jsdom for browser-like tests

  // Verbose output in test results
  verbose: true,

  // Coverage threshold to enforce
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },

  // File extensions for module resolution
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

export default config;
