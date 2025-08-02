import express from "express";
import { addToCart, deleteFromCart, getCartItem, removeFromCart, updateCartItem } from "../controllers/cartItemController.js";

const router = express.Router();

router.post("/", addToCart);
router.get("/:userId", getCartItem);
router.put("/:id", updateCartItem);
router.delete("/:id", removeFromCart);
router.delete("/clear/:userId", deleteFromCart);

export default router;