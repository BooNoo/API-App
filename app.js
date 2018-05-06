const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const morgan = require('morgan');

var userRouter = require('./routes/user');

app.use(morgan('short'));
app.use('/users', userRouter);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('./public'));

app.listen(3002, function () {
    console.log("server up");
});
