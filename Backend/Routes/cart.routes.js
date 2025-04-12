import express from "express";
import { addToCart, updateCartItem, deleteCartItem } from "../Controllers/cart.controller.js";
import authenticateToken from "../Middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authenticateToken, addToCart);
router.put("/:id", authenticateToken, updateCartItem);
router.delete("/:id", authenticateToken, deleteCartItem);

export default router;
