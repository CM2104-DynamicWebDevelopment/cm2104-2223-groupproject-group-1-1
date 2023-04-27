
const MongoClient = require('mongodb').MongoClient; //npm install mongodb@2.2.32
const url = "mongodb://localhost:27017/loginDB";
const express = require('express'); //npm install express
const session = require('express-session'); //npm install express-session
const bodyParser = require('body-parser'); //npm install body-parser
const app = express();

app.use(session({ secret: 'example' }));

app.use(express.static('public'))

app.use(bodyParser.urlencoded({
  extended: true
}))

app.set("view engine", "ejs");

var db;

//this is our connection to the mongo db, ts sets the variable db as our database
MongoClient.connect(url, function(err, database) {
  if (err) throw err;
  db = database;
  app.listen(8080);
  console.log('listening on 8080');
});


//********** GET ROUTES - Deal with displaying pages ***************************

// Showing home page
app.get("/", function (req, res) {
  res.render("pages/home");
});

// Showing root route page/login
app.get('/login', function(req, res) {
  res.render('pages/login');
});

// Showing createAccount page
app.get("/createAccount", function (req, res) {  
  res.render("pages/createAccount");
});

// Showing EVchargePoints page
app.get("/EVchargePoints", function (req, res) {
    res.render("pages/EVchargePoints");
});

app.get('/logout', function(req, res) {
  req.session.loggedin = false;
  req.session.destroy();
  console.log('logged out!')
  res.redirect('/');
});


//********** POST ROUTES - Deal with processing data from forms ***************************


// Handling user signup
app.post('/register', function(req, res) {

  //we create the data string from the form components that have been passed in

var datatostore = {

"email":req.body.email,
"password":req.body.password}


//once created we just run the data string against the database and all our new data will be saved/
  db.collection('users').save(datatostore, function(err, result) {
    if (err) throw err;
    console.log('saved to database')
    //when complete redirect to the index
    res.redirect('/')
  })
});


app.post('/login', function(req, res) {
  console.log(JSON.stringify(req.body))
  var email = req.body.email;
  var password = req.body.password;


 
  db.collection('users').findOne({"email":email}, function(err, result) {
    if (err) throw err;


    if(!result){res.redirect('/login');return}



    if(result.password == password){ req.session.loggedin = true; res.redirect('/') 
    console.log('logged in!')}



    else{res.redirect('/login')}
  });
});