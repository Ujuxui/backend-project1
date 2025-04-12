import mongoose from "mongoose";

// Defining User Schema with Mongoose
const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stock: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", userSchema);

export default Product;
