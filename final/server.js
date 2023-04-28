//dependencies 
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

// Showing our mission page
app.get("/ourMission", function (req, res){
  res.render("pages/ourMission");
});

// Showing about us page
app.get("/aboutUs", function (req, res){
  res.render("pages/aboutUs");
});

// Showing contact us page
app.get("/contactUs", function (req, res){
  res.render("pages/contactUs");
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

//log out button/session end
app.get('/logout', function(req, res) {
  req.session.loggedin = false;
  req.session.destroy();
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
    if(err){
      //render the bad error page and passdown the error
      res.render('pages/baderror',{error:err} );
      return;
    }
    console.log('saved to database')
    //when complete redirect to the homepage
    res.redirect('/')
  })
});


//handling the login form data
app.post('/login', function(req, res) {
  console.log(JSON.stringify(req.body))
  var email = req.body.email;
  var password = req.body.password;


 
  db.collection('users').findOne({"email":email}, function(err, result) {
     if(err){
      //render the bad error page and passdown the error
      res.render('pages/baderror',{error:err} );
      return;
    }


    //checking to see if the details do not match
    if(!result){res.redirect('/login'),console.log('this isnt a user') ;return}


    // if the details do match sends message to terminal and logs user in
    if(result.password == password){ req.session.loggedin = true; res.redirect('/') 
    console.log('logged in!')}



    else{res.redirect('/login')}
  });
});
