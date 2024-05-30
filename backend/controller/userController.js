const User = require("../model/userModel");
const { hashPassword, comparePassword } = require("../helper/bycriptPassword");
const jwt = require("jsonwebtoken");
exports.createUserController = async (req, res) => {
  try {
    const { name, email, answer, password } = req.body;

    if (!name || !email || !answer || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide all credentials",
      });
    }

    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please login.",
      });
    }

    const hashPass = await hashPassword(password);

    const newUser = await User.create({
      name,
      email,
      answer,
      password: hashPass,
    });

    return res.status(200).json({
      success: true,
      newUser,
    });
  } catch (error) {
    console.error("Error while registering user:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide Email and Password credentials",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exist. Please register first.",
      });
    }

    const compPass = await comparePassword(password, user.password);

    if (!compPass) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JSON_KEY, {
      expiresIn: "7d",
    });
    return res.status(200).json({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.error("Error while logging in user:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// change password controller

exports.changePasswordController = async (req, res) => {
  try {
    const { email, password, newpassword } = req.body;

    if (!email || !password || !newpassword) {
      return res.status(400).json({
        success: false,
        message: "Please provide Email and Password credentials",
      });
    }

    const findUser = await User.findOne({ email });

    if (!findUser) {
      return res.status(400).json({
        success: false,
        message: "User does not exist. Please register first.",
      });
    }

    const compPass = await comparePassword(password, findUser.password);

    if (!compPass) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }
    const hashNewpassword = await hashPassword(newpassword);
    findUser.password = await hashNewpassword;
    await findUser.save();
    return res.status(200).json({
      success: true,
      message: "Password change Successfully",
    });
  } catch (error) {
    console.error("Error while logging in user:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Forgot password controller

exports.forgotpasswordController = async (req, res) => {
  try {
    const { email, answer,newpassword } = req.body;

    if (!email || !answer || !newpassword) {
      return res.status(400).json({
        success: false,
        message: "Please provide Email and Valid answer ,Password credentials",
      });
    }

    const findUser = await User.findOne({ email });

    if (!findUser) {
      return res.status(400).json({
        success: false,
        message: "User does not exist. Please register first.",
      });
    }

    if (findUser.answer !== answer) {
      return res.status(401).json({
        success: false,
        message: "Invalid Answer.",
      });
    }
    const hashNewpassword = await hashPassword(newpassword);
    findUser.password = await hashNewpassword;
    await findUser.save();
    return res.status(200).json({
      success: true,
      message: "Password change Successfully",
    });
  } catch (error) {
    console.error("Error while logging in user:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//test controller
exports.testController = (req, res) => {
  try {
    res.send("Protected Routes");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
