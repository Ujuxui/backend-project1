import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  const token = authHeader && authHeader.split(" ")[1];

  jwt.verify(token, "secretKey", (err, user) => {
    if (err) {
      res.status(401).json({ message: "Invalid token" });
    }

    req.user = user;
    next();
  });
};

export default authenticateToken;
