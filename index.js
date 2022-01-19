const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const port = 3000;
const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser()); // cookieParser(secretKey, optionObj)

app.listen(port, function () {
  console.log("listening on 3000");
});

// my_db 데이터베이스와 연결
const connection = mysql.createConnection({
  host: "localhost", // 호스트 주소
  user: "root", // mysql user
  password: "111111", // mysql password
  database: "my_db", // mysql 데이터베이스
});

// 데이터베이스와 연결
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

// 회원가입에 성공하였다면
app.post("/login", (req, res) => {
  var id = req.body.id;
  var pw = req.body.passwd;
  var region = req.body.location;
  console.log(id, pw, region);

  // 입력된 값들을 데이터베이스에 넣어준다.
  var sql = "INSERT INTO users (id, password, region) VALUES (?, ?, ?)";
  connection.query(sql, [id, pw, region], function (err, result, field) {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server  Error");
    }
    res.sendFile(__dirname + "/index.html"); // 화면 생성에 이용됨
  });
});

// 로그인이 되었다면
// app.post("/signed/home", (req, res) => {
//   var id = req.body.id;
//   var pw = req.body.passwd;

//   console.log(id, pw);

//   res.sendFile(__dirname + "/index.html");
// });
app.post("/signed/home", function (request, response) {
  var username = request.body.id;
  var password = request.body.passwd;
  if (username && password) {
    connection.query(
      "SELECT * FROM users WHERE id = ? AND password = ?",
      [username, password],
      function (error, results, fields) {
        if (error) throw error;
        if (results.length > 0) {
          // request.session.loggedin = true;
          // request.session.username = username;
          response.redirect("/signed/home");
          response.end();
        } else {
          response.send(
            '<script type="text/javascript">alert("로그인 정보가 일치하지 않습니다."); document.location.href="/login";</script>'
          );
        }
      }
    );
  } else {
    response.send(
      '<script type="text/javascript">alert("username과 password를 입력하세요!"); document.location.href="/login";</script>'
    );
    response.end();
  }
});

// 이부분 사용되면 회원가입에서 오류 발생
// connection.end();
