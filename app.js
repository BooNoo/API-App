const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const morgan = require('morgan');
const PORT = process.env.PORT || 3003;
const userRouter = require('./routes/user');

app.use(morgan('short'));
app.use('/users', userRouter);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('./public'));

app.get("/", function (req, res) {
    res.send("hello world");
});

app.listen(PORT, function () {
    console.log(process.env.DATA_BASE);
    console.log("server up on: " + PORT);
});
