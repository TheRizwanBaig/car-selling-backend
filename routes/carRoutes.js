import express from "express";
import multer from "multer";
import { addCar } from "../controllers/carController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/add", authMiddleware, upload.array("pictures", 4), addCar);

export default router;
