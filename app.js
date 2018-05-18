const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const morgan = require('morgan');
const PORT = process.env.PORT || 3003;
const userRouter = require('./routes/user');
const cors = require('cors');

app.use(morgan('short'));
app.use('/api/users', userRouter);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('./public'));


app.use(function (req, res, next) {
});

app.get("/", function (req, res) {
    res.send("hello world");
});

app.listen(PORT, function () {
    console.log("server up on: " + PORT);
});
