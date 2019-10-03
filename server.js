require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
<<<<<<< HEAD
var passport   = require('passport')
var session    = require('express-session')
var bodyParser = require('body-parser')


=======
>>>>>>> a5c2cfd81b38ff26abe1a15b5179739c28674838
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions


app.set('views', './views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// // Routes

require("./routes/apiRoutes")(app);
require("./routes/apiRoutesInvoice")(app);
<<<<<<< HEAD
require('./config/passport/passport.js')(passport, db.user);
require("./routes/auth")(app,passport);
require("./routes/htmlRoutes")(app);
=======
require("./routes/emailRoutes")(app);
>>>>>>> a5c2cfd81b38ff26abe1a15b5179739c28674838

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = false;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
},error=>console.log(error)).catch(error=>console.log(error));

module.exports = app;
