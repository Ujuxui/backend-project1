import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

export const addToCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await Product.findById(productId);
    if (!product) {
      return res
        .status(404)
        .json({ message: "product with this id does not exist" });
    }
    const newCartItem = new Cart(req.body);
    await newCartItem.save();
    res.status(201).json(newCartItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateCartItem = async (req, res) => {
  try {
    const updatedItem = await Cart.findByIdAndUpdate(req.params.id, req.body,
      { new: true }
    );
    if (!updatedItem) {
      return res
        .status(404)
        .json({ message: "Cart item not found" });
    }
    res.status(200).send(updatedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteCartItem = async (req, res) => {
    try {
      const deletedItem = await Cart.findByIdAndDelete(req.params.id);
      if (!deletedItem) {
        return res
          .status(404)
          .json({ message: "cart item not found!" });
      }
      res.status(200).json("cart item deleted successfully");
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  