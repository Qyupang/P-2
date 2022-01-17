const express = require("express");

const port = 3000;

const mysql = require("mysql");

const app = express();

app.use(express.static("public"));

app.listen(port, function () {
  console.log("listening on 3000");
});

// my_db 데이터베이스와 연결
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "111111",
  database: "my_db",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
});

// 어떤 요청이 들어오든 다 index.html을 전송한다
app.get("/*", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

connection.query("SELECT * from Users", (error, rows, fields) => {
  if (error) throw error;
  console.log("User info is: ", rows);
});

connection.end();
