import express from "express";
import { addToCart, getCartItem, removeFromCart, updateCartItem } from "../controllers/cartItemController.js";

const router = express.Router();

router.post("/", addToCart);
router.get("/", getCartItem);
router.put("/:id", updateCartItem);
router.delete("/:id", removeFromCart);

export default router;