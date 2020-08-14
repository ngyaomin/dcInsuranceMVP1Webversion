var express = require("express");
var app = express();
var port = 3000;
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => {
  console.log("Listening on port " + port);
});

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/requestInsurance");

var requestInsuranceSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  term1: String,
  valuePayout1: String,
  term2: String,
  valuePayout2: String,
  term3: String,
  valuePayout3: String,
  premium: String
});

var InsuranceRequest = mongoose.model("InsuranceRequest", requestInsuranceSchema);

app.post("/addInsuranceRequest", (req, res) => {
  var requestInsuranceData = new InsuranceRequest(req.body);
  requestInsuranceData.save()
  .then(item => {
    res.send("item saved to database");
  })
  .catch(err => {
    res.status(400).send("fill in your form properly la");
  });
});

