const mongoose = require("mongoose");

const dbConnect = ()=> mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas!"))
  .catch((error) => console.error("Connection error:", error));

module.exports = dbConnect;