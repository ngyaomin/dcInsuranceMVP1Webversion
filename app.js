var express = require("express");
var app = express();
var port = 3000;
var mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => {
  console.log("Listening on port " + port);
});

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/requestInsurance");

