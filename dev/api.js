const express = require("express");
const bodyParser = require("body-parser");
const Blockchain = require("./blockchain");
const app = express();

const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/blockchain", (req, res) => {
  res.send(bitcoin);
});

app.post("/transaction", (req, res) => {});

app.get("/mine", (req, res) => {});

app.listen(3000, (req, res) => {
  console.log("Listening on Port 3000...");
});
