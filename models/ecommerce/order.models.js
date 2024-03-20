import mongoose, { model } from "mongoose";

const OrderItemSchema = new mongoose.Schema({
  roductid: {
    type: mongoose.Schema.Types.ObjectId,
    req: "Product",
  },
  OrderQuantity: {
    type: Number,
    required: true,
  },
});
const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: String,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItem: {
      type: [OrderItemSchema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", " "],
      default: "PENDING ",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order ", orderSchema);
