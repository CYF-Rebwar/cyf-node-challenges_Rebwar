const express = require("express");
const app = express();

const quotes = require("./quotes.json");

app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

app.get("/quotes", function (request, response) {
  response.json(quotes);
});

app.get("/quotes/random", (req, res) => {
  res.json(pickFromArray(quotes));
});

app.get("/quotes/search", (req, res) => {
  const term = req.query.author.toLowerCase();
  console.log(term);
  res.json(quotes.filter(q => q.author.toLowerCase().includes(term)));
});

function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
const PORT = process.env.PORT || 3000;

const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
