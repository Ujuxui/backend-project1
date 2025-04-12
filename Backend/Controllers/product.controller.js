import Product from "../models/Product.js";

export const fetchProducts = async (req, res) => {
      try {
        const products = await Product.find();
        res.status(200).json(products);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    };

    export const fetchById = async (req, res) => {
        try {
          const productId = req.params.id;
          const product = await Product.findById(productId);
          if (!product) {
            return res
              .status(404)
              .json({ message: "product with this id does not exist" });
          }
          res.status(200).send(product);
        } catch (err) {
          res.status(400).json({ error: err.message });
        }
      };

