const bcrypt = require("bcryptjs");
const User = require("../../models/User.js");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    if (err.code === 11000) {
     
      return res.status(400).json({ message: "Email is already registered" });
    }
    res.status(500).json({ message: "Server error, please try again later" });
  }
};
