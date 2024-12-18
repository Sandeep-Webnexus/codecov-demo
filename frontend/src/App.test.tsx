import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';



test('renders HealthCheck component with system health message', () => {
  render(<App/>); // Renders the App component
  const healthCheckText = screen.getByTestId('health-status'); // Checks for the data-testid
  expect(healthCheckText).toBeInTheDocument(); // Asserts it exists in the DOM
});
