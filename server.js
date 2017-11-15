var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var CONTACTS_COLLECTION = "contacts";

var app = express();
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;
app.get("/", function(req, res){
  res.send("Hola Mundo");
});

// Connect to the database before starting the application server.
mongodb.MongoClient.connect("mongodb://heroku_vpfj747q:pgt29qm9ol42h6da046h2c2it7@ds163705.mlab.com:63705/heroku_vpfj747q", function (err, database) { //process.env.MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// CONTACTS API ROUTES BELOW