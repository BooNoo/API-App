const express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
var db = require('../models/dbconnection');
// var fs = require("fs");
// var firebaseAPI = require("firebase");
// const googleStorage = require('@google-cloud/storage');
//
// const Multer = require('multer');
// //
// var config = {
//     apiKey: "AIzaSyC4vjCzqWwP-vfaijAyGaJ_fLAbgIql0jE",
//     authDomain: "historymap-1994.firebaseapp.com",
//     databaseURL: "https://historymap-1994.firebaseio.com",
//     projectId: "historymap-1994",
//     storageBucket: "historymap-1994.appspot.com",
//     messagingSenderId: "982265422411"
// };
//
// firebaseAPI.initializeApp(config);
//
// const storage = googleStorage({
//     projectId: "historymap-199409",
//     keyFilename: "./history-map-cloud.json"
// });
//
// // var datastore = gcloud.datastore();
// // var storage = gcloud.storage();
// const bucket = storage.bucket('history-map.appspot.com');
//
//
// function getPublicUrl (filename) {
//     return 'https://storage.googleapis.com/${CLOUD_BUCKET}/${filename}';
// }

const corsm = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
};

router.use(bodyParser.urlencoded({extended: false}));

router.get("/", corsm, function (req, res) {
    db.query('SELECT * FROM users', function (err, rows, fields) {
        res.json(rows);
    });
});

router.get("/:id", function (req, res) {
    db.query('SELECT * FROM users WHERE id = ?', [req.params.id], function (err, rows, fields) {
        res.json(rows);
    });
});

router.post("/create", function (req, res) {
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;

    const queryString = "INSERT INTO users (first_name, last_name) VALUES (?, ?)";
    db.query(queryString, [firstName, lastName], function (err, results, fields) {
        if (err) {
            console.log("Failed insert user" + err);
            res.sendStatus(500);
            return
        }
        console.log("insert a new user with id:", results.insertId);
        res.end();
    });
});

// router.post("/save-image", function (req, res) {
//
//     const email = "boonoovova@gmail.com";
//     const password = "940920Djdf";
//
//     firebaseAPI.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // ...
//     });
//
//     var storageRef = firebaseAPI.getDownloadURL()
//
//     //
//     // res.sendFile(image);
//
//     // fs.readFile('./assets/image.png', function (err, content) {
//     //     if (err) {
//     //         res.writeHead(400, {'Content-type':'text/html'})
//     //         console.log(err);
//     //         res.end("No such image");
//     //     } else {
//     //         //specify the content type in the response will be an image
//     //         res.writeHead(200,{'Content-type':'image/jpg'});
//     //         res.end(content);
//     //     }
//     // });
//
//     // var image = fs.readFileSync("./assets/image.png");
//     // var destination = 'uploads/12345/full.jpg';
//     //
//     //
//     // const gcsname = Date.now() + image.name;
//     // console.log(image);
//     // const file = bucket.file(gcsname);
//     //
//     // const stream = file.createWriteStream({
//     //     metadata: {
//     //         contentType: image.mimetype
//     //     }
//     // });
//     //
//     // stream.on('error', function (err) {
//     //     image.cloudStorageError = err;
//     //     next(err);
//     // });
//     //
//     // stream.on('finish', function () {
//     //     image.cloudStorageObject = gcsname;
//     //     file.makePublic().then(function () {
//     //         image.cloudStoragePublicUrl = getPublicUrl(gcsname);
//     //         next();
//     //     });
//     // });
//     //
//     // stream.end(image.buffer);
//
//     // res.end(image)
//
//     // const blob = bucket.file(image.originalname);
//     // const blobStream = blob.createWriteStream();
//     // //
//     // bucket.upload("./assets/image.png", { destination: "images/1.jpg" }, function(err, file) {
//     //     if (err) {
//     //         console.log(err);
//     //         res.end(err)
//     //     } else {
//     //         res.end(file)
//     //     }
//     // });
//
//
// });

module.exports = router;