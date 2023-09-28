const app = require("../app");

require("dotenv").config();

const mongoose = require("mongoose");

dbConnect().catch((err) => console.log(err));

async function dbConnect() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("connected");
}

module.exports = dbConnect;
