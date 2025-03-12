const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: false },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["user", "admin", "finance"],
    default: "user",
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
