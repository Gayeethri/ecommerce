const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const { response } = require("express");
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Javeed@123",
  database: "etsy",
});

app.post("/register", (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "INSERT INTO login (email, username, password) VALUES (?, ?, ?)",
    [email, username, password],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
//   console.log(req.body.username, req.body.password);

  if (username && password) {
    db.query(
      "SELECT * FROM login WHERE username = ? AND password = ?",
    //   "SELECT * FROM login",
      [username, password],
      (err, result, fields) => {
        // If there is an issue with the query, output the error
        if (err) {
          res.send(err);
        }
        if (result.length > 0) {
          res.send(result);
        //   response.redirect("http://localhost:3000/home");
        } else {
          res.send({
            message:
              "Invalid credentials, Please click on Register to Sign Up.",
          });
        }
      }
    );
  }
  else {
    res.send({message:"Please enter Username and Password!"});
    res.end();
  }
});

//to check server is running or not
app.listen(3001, () => {
  console.log("Javeed your server is running on server 30001");
});

// app.get("/login", (req, res) => {
//     db.query("SELECT * FROM login", (err, result) => {
//       if (err) {
//         console.log("OKay its an error");
//       } else {
//         res.send(result);
//       }
//     });
//   });
