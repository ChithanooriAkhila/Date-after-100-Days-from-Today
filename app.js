const express = require("express");
var addDays = require("date-fns/addDays");
var format = require("date-fns/format");

const app = express();

app.get("/", (req, res) => {
  const date = addDays(new Date(), 100);
  const result = format(date, "dd/MM/yyyy");
  //   console.log(result);
  res.send(result);
});

app.listen(3000);

module.exports = app;
