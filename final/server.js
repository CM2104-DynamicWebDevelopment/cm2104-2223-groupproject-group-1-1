// server.js
// load the things we need
var express = require('express');
var app = express();

//code to define the public "static" folder
app.use(express.static('public'))

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
 res.render('pages/index');
});

// Ev charge point page
app.get('/EVchargePoints', function(req, res) {
 res.render('pages/EVchargePoints');
});

// login page
app.get('/login', function(req, res) {
    res.render('pages/login');
   });

// create accounnt page
app.get('/createAccount', function(req, res) {
    res.render('pages/createAccount');
   });

app.listen(8080);
console.log('8080 is the magic port');