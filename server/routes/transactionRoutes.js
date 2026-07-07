import express from "express";
import { createTransaction } from "../controllers/transactionController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Transaction
router.post("/", protect, createTransaction);

export default router;