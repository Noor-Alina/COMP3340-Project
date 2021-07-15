const express = require("express");
const app = express(); // create express app
const data = require("./data/example.json");

app.get("/products", (req, res) => {
  res.status(200).json(data);
});

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});