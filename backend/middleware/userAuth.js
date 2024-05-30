const JWT = require("jsonwebtoken");
const User = require("../model/userModel");
exports.requireSignIn = async (req, res, next) => {
  try {
    const decoded = JWT.verify(req.headers.authorization, process.env.JSON_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};
//admin acceess
exports.isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Admin Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};
