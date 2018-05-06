const mysql = require('mysql');

var connection = mysql.createPool({
    host: process.env.DATA_BASE == 'dev' ? 'localhost' : 'eu-cdbr-west-02.cleardb.net',
    user: process.env.DATA_BASE == 'dev' ? 'root' : 'b1750ef905d503',
    password: process.env.DATA_BASE == 'dev' ? 'werTT75&' : '30524845',
    database: process.env.DATA_BASE == 'dev' ? 'werTT75&' : 'heroku_9517f6a4faa8437'
});

module.exports = connection;