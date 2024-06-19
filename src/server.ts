// src/server.ts

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import router from "./route";

const app = express();
const BASE_URL = "localhost";
const PORT = 3000;

app.use("/api", router);
app.get("/", (req, res) => {
  res.json({
    message: "Sanbercode Cloudinary REST API Server",
    data: "Created by: Muhammad Ridwan Hakim",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://${BASE_URL}:${PORT}`);
});
