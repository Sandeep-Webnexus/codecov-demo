const request = require("supertest");
const app = require("../server"); // Path to your server.js file
let server;

beforeAll(() => {
  // Start the server before tests
  server = app.listen(5001); // Use a different port to avoid conflicts
});

afterAll((done) => {
  // Clean up and close the server after tests
  server.close(done);
});

describe("GET /api/health", () => {
  it("should return API health status", async () => {
    const res = await request(server).get("/api/health");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "API is running");
  });
});
