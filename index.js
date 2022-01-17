const express = require("express");

const port = 3000;

const app = express();

app.use(express.static("public"));

app.listen(port, function () {
  console.log("listening on 3000");
});

// 어떤 요청이 들어오든 다 index.html을 전송한다
app.get("/*", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
