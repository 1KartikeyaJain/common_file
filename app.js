
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import studentRoutes from "./Router/all_router.js"; 

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get("/api/message", (req, res) => {
  res.json({ message: "hello" });
});

// Use student routes under /api
app.use("/api", studentRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
