const mongoose = require("mongoose");
require("dotenv").config();

module.export = mongoose.connect(
  process.env.mongoURI,
  { useNewUrlParser: true },
  err => {
    if (err) throw err;
    console.log("Database connected");
  }
);
