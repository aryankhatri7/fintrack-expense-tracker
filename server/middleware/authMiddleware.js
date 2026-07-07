import jwt from "jsonwebtoken";
import User from "../models/User.js";

const protect = async (req, res, next) => {
  try {
    let token;

    // Check if token exists in Authorization header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];

      // Verify Token
const decoded = jwt.verify(token, process.env.JWT_SECRET);

console.log("Decoded Token:", decoded);

// Get User (without password)
req.user = await User.findById(decoded.id).select("-password");

console.log("User Found:", req.user);

next();
    } else {
      return res.status(401).json({
        success: false,
        message: "Not authorized, token missing",
      });
    }
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Not authorized, invalid token",
    });
  }
};

export default protect;