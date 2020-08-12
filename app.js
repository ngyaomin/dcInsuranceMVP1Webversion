var express = require("express");
var app = express();
var port = 3000;

app.get("/", (req, res) => {
  res.send("this is testing");
})

app.listen(port, () => {
  console.log("Listening on port " + port);
});
