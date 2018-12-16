const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const db = require("./config/dbConnect");

const port = process.env.PORT || 5000;

app.listen(port, err => {
  if (err) throw err;
  console.log(`Server is running in port ${port}`);
});
