const express = require("express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

const app = express();

const db = require("./config/dbConnect");

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Express Validator middleware
app.use(expressValidator());

// Server connection
const port = process.env.PORT || 5000;
app.listen(port, err => {
  if (err) throw err;
  console.log(`Server is running in port ${port}`);
});
