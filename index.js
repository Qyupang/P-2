const express = require("express");

const port = 3000;

const mysql = require("mysql");

const app = express();

app.use(express.static("public"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

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

// connection.query("SELECT * from Users", (error, rows, fields) => {
//   if (error) throw error;
//   console.log("User info is: ", rows);
//   console.log(rows[0].region);
// });

app.post("/login", (req, res) => {
  var id = req.body.id;
  var pw = req.body.passwd;
  var region = req.body.location;
  console.log(id, pw, region);
  // connection.query(
  //   "INSERT INTO user (id, password, region) VALUES ('test', 'test', '광교');"
  //   (error) => {
  //     if (error) throw error;
  //   }
  // );
  res.sendFile(__dirname + "/index.html");
});

app.post("/signed/home", (req, res) => {
  var id = req.body.id;
  var pw = req.body.passwd;

  console.log(id, pw);

  res.sendFile(__dirname + "/index.html");
});

connection.end();
