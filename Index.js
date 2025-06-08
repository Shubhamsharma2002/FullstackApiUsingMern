import express from "express";

const server = express();

// Optional: Define a simple route
server.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start the server
server.listen(8000, () => {
  console.log("🚀 Server is listening on http://localhost:8000");
});
