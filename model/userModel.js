const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("userModel", userSchema);
module.exports = userModel;
