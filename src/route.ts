// src/route.ts

import express from "express";
import { single, multiple } from "./middlewares/upload.middleware";
import { handleUpload } from "./utils/cloudinary";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Sanbercode Cloudinary REST API Server",
    data: "Created by: Muhammad Ridwan Hakim",
  });
});

router.post("/upload/single", single, async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    const result = await handleUpload(req.file.buffer);
    res.json({ message: "File uploaded successfully", data: result });
  } catch (error) {
    res.status(500).json({ message: "Error uploading file", error });
  }
});

router.post("/upload/multiple", multiple, async (req, res) => {
  try {
    if (!req.files || !Array.isArray(req.files)) {
      return res.status(400).json({ message: "No files uploaded" });
    }
    const uploadPromises = (req.files as Express.Multer.File[]).map((file) =>
      handleUpload(file.buffer)
    );
    const results = await Promise.all(uploadPromises);
    res.json({ message: "Files uploaded successfully", data: results });
  } catch (error) {
    res.status(500).json({ message: "Error uploading files", error });
  }
});

export default router;
