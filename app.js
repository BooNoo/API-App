const express = require('express');
const app = express();
var router = express.Router();
const morgan = require('morgan');

var userRouter = require('./routes/user');

app.use(morgan('combined'));
app.use('/users', userRouter);

app.listen(3002, function () {
    console.log("server up");
});

router.get("/", function (req, res) {
    console.log("response");
    res.send("Hello world");
});



