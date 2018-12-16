const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, err => {
  if (err) throw err;
  console.log(`Server is running in port ${port}`);
});
