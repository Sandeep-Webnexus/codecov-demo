import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import HealthCheck from "../components/HealthCheck";

test("renders health check component", async () => {
  // Mock the fetch function to return a successful response
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ message: "API is running" }),
    })
  ) as jest.Mock;

  render(<HealthCheck />);

  // Wait for the status element to appear and check its content
  await waitFor(() => {
    const statusElement = screen.getByTestId("health-status");
    expect(statusElement).toHaveTextContent("API is running");
  });
});

test("renders health check component with an error on API call", async () => {
  // Mock the fetch function to simulate an error
  global.fetch = jest.fn(() =>
    Promise.reject(new Error("Network error"))
  ) as jest.Mock;

  render(<HealthCheck />);

  // Wait for the status element to appear and check its content
  await waitFor(() => {
    const statusElement = screen.getByTestId("health-status");
    expect(statusElement).toHaveTextContent("Error fetching health status");
  });
});
