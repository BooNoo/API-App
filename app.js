const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const morgan = require('morgan');
const PORT = process.env.PORT || 3003;
const userRouter = require('./routes/user');

const corsm = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
};

app.use(morgan('short'));
app.use('/api/users', corsm, userRouter);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('./public'));

app.get("/", function (req, res) {
    res.send("hello world");
});

app.listen(PORT, function () {
    console.log("server up on: " + PORT);
});
