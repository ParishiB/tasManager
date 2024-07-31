const { Request, Response, NextFunction } = require("express");
const jwt = require("jsonwebtoken");
const ACCESS_TOKEN_SECRET = "1234@abc";
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ status: 401, message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({ status: 401, message: "Unauthorized" });
    }
    req.user = user;
    next();
  });
};

// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];

//   if (!token) return res.sendStatus(401);

//   jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// };

module.exports = { authenticateToken };
