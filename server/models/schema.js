const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const userModel = new mongoose.model("users", userSchema);
module.exports = userModel;
