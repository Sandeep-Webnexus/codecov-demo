const express = require("express");
const app = express();
const port = 5000;

// Middleware to parse JSON
app.use(express.json());

// Health check endpoint
app.get("/api/health", (req, res) => {
  console.log("Server started on port 5000");
  res.status(200).json({ message: "API is running" });
});

// Start the server only if not in test environment
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

// Export app for testing
module.exports = app;
