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

// 회원가입에 성공하였다면
//   // 입력된 값들을 데이터베이스에 넣어준다.
//   var sql = "INSERT INTO users (id, password, region) VALUES (?, ?, ?)";
//   connection.query(sql, [id, pw, region], function (err, result, field) {
//     if (err) {
//       console.log(err);
//       res.status(500).send("Internal Server  Error");
//     }
//     res.sendFile(__dirname + "/index.html"); // 화면 생성에 이용됨
//   });
// });
app.post("/login", function (request, response) {
  var username = request.body.id;
  var password = request.body.passwd;
  var region = request.body.location;
  console.log(username, password, region);
  // 입력된 값들을 데이터베이스에 넣어준다.
  // 값들이 다 입력되었다면
  if (username && password && region) {
    const sql =
      "SELECT * FROM users WHERE id = ? AND password = ? AND region = ?";
    connection.query(
      sql,
      [username, password, region],
      function (error, results, fields) {
        if (error) throw error;
        if (results.length <= 0) {
          const sql = "INSERT INTO users (id, password, region) VALUES(?,?,?)";
          connection.query(
            sql,
            [username, password, region],
            function (error, data) {
              if (error) console.log(error);
              else console.log(data);
            }
          );
          response.send(
            '<script type="text/javascript">alert("회원가입을 환영합니다! 다시 로그인해주세요."); document.location.href="/login";</script>'
          );
        } else {
          response.send(
            '<script type="text/javascript">alert("이미 존재하는 아이디 입니다."); document.location.href="/sign-up";</script>'
          );
        }
        response.end();
      }
    );
  }
  // 값이 다 입력되지 않았다면
  else {
    response.send(
      '<script type="text/javascript">alert("모든 정보를 입력하세요"); document.location.href="/sign-up";</script>'
    );
    response.end();
  }
  response.sendFile(__dirname + "/index.html");
});

// 로그인이 되었다면
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
