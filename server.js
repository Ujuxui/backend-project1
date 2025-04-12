// Importing files since using ES Module
import express from "express";
import mongoose from "mongoose";
import logger from "./Backend/Middleware/logger.js";
import cors from "cors";
import productRoutes from "./Backend/Routes/product.routes.js";
import cartRoutes from "./Backend/Routes/cart.routes.js";
import authRoutes from "./Backend/Routes/auth.routes.js";

const app = express();
// Middleware
app.use(express.json());
app.use(logger);
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/Products");
const db = mongoose.connection;
db.on("open", () => {
  console.log("Connection successful!");
});
db.on("error", () => {
  console.log(err);
});

// Routing
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/", authRoutes);

//Server listening on the port
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});