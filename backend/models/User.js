const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: "string", required: true, unique: true},
  email: { type: "string", required: true, unique: true },
  password: { type: "string", required: true },
  isPremium: { type: Boolean, default: false },
  profilePic: { type: "string", default: "https://res.cloudinary.com/dam21eppy/image/upload/v1738326862/blank-profile-picture-973460_640_h4z3pi.png"}
});


const User = mongoose.model('User', userSchema);
module.exports = User;