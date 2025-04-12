import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser)
      return res.status(400).json({ message: "username already exists!" });

    const newUser = new User({ username, password });
    await newUser.save();
    res.status(200).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || user.password !== password)
      return res.status(401).json({ message: "Invalid credentials" });

    const accessToken = jwt.sign({ user: user }, "secretKey", {
      expiresIn: "10m",
    });

    res.status(200).json({ accessToken });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
