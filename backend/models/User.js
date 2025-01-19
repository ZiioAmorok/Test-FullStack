const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: "string", required: true, unique: true},
  email: { type: "string", required: true, unique: true },
  password: { type: "string", required: true },
  isPremium: { type: Boolean, default: false }
});


const User = mongoose.model('User', userSchema);
module.exports = User;