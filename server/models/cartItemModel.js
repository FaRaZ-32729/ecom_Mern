import mongoose from "mongoose";
import {userModel} from './userModel.js'
import {productModel} from './productModel.js'

const cartItemSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userModel",
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "productModel",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
      enum: ["S", "M", "L", "XL", "XXL"],
      default: "M",
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
      min: 1,
    },
  },
  { timestamps: true }
);

export const cartItemModel = mongoose.model("CartItem", cartItemSchema);
