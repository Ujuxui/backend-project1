import express from "express";
import { fetchProducts, fetchById } from "../Controllers/product.controller.js";

const router = express.Router();

router.get("/", fetchProducts);
router.get("/:id", fetchById);

export default router;
