import 'dotenv/config';
import express from "express";

const server = express();
const Port = 8000 || process.env.PORT
// Optional: Define a simple route
server.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start the server
server.listen(Port, () => {
  console.log("🚀 Server is listening on http://localhost:8000");
});
