const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const morgan = require('morgan');
const PORT = process.env.PORT || 3003;
const userRouter = require('./routes/user');

app.use(morgan('short'));
app.use('/api/users', userRouter);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('./public'));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get("/", function (req, res) {
    res.send("hello world");
});

app.listen(PORT, function () {
    console.log("server up on: " + PORT);
});
