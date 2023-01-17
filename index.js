const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.send("hello express");
});
app.get("/hello", function (req, res) {
  res.send("bon jour! c'est un express.");
});
app.get("/introduce", function (req, res) {
  console.log(req.query.name); //url로 오는 명령을 받음. 여기서는 name을 받음.
  console.log(req.query.age);
  res.send("Non, ce n'est pas un express. c'est" + req.query.name + ".");
  if (req.query.age < 20) {
    res.send("vous n'avez pas de la age");
  }
});
app.get("/weather", function (req, res) {
  if (req.query.region == "서울") {
    res.send("<h1>맑음</h1>");
  } else if (req.query.region == "강원") {
    res.send("<h1>폭설</h1>");
  }
});
app.listen(3000, function () {
  console.log("This order is input by port no.3000");
});
