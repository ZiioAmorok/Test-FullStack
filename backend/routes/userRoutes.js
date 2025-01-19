const express = require("express");
const {
  registerUser,
} = require("../controllers/userController/registerUser.js");
const { loginUser } = require("../controllers/userController/loginUser.js");
const { logoutUser } = require("../controllers/userController/logoutUser.js");
const authenticate = require("../middlewares/auth.js");
const validatePassword = require("../middlewares/validatePassword.js");

const router = express.Router();

router.post("/register", validatePassword, registerUser);
router.post("/login", loginUser);
router.post("/logout", authenticate, logoutUser);
router.get("/auth", authenticate, (_, res) => {
  res.status(200).json();
});

module.exports = router;