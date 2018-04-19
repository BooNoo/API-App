const express = require('express');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'werTT75&',
  database: 'testmysql'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Database connected!');
});

app.use(morgan('short'))

app.get("/", (req, res) => {
  console.log("response");
  res.send("Hello world");
})

app.get("/user", (req, res) => {
  connection.query('SELECT * FROM users', (err,rows) => {
  if(err) throw err;
  try {
    let data = JSON.parse(JSON.stringify(rows));
    res.json(data);
  } catch (e) {
    res.send(e);
  }
  });
})

app.listen(3002, () => {
  console.log("server up");
})
