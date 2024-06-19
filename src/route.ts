import express from "express";

import { single, multiple } from "./middlewares/upload.middleware";

const router = express.Router();

router.get("/upload/single", single, (req, res) => {});
router.get("/upload/multiple", multiple, (req, res) => {});

export default router;
