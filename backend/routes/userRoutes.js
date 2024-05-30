const express = require("express");
const {
  createUserController,
  loginController,
  testController,
  changePasswordController,
  forgotpasswordController
} = require("../controller/userController");


const { requireSignIn, isAdmin } = require("../middleware/userAuth");
const router = express.Router();

router.post("/signup", createUserController);
router.post("/login", loginController);
router.post("/forgotpassword", forgotpasswordController);
router.post("/changepassword", changePasswordController);
router.post("/protected", requireSignIn, isAdmin, testController);

module.exports = router;
